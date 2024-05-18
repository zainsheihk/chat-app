"use client";
import Image from "next/image";
import loginImage from "@/public/155547155_l_normal_none-e86c9fa6-1920w.webp";
import { Button, Input, Typography } from "@/libraries/material-tailwind";
import { useStateProvider } from "@/context/stateContext";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Avatar from "@/components/avatar";
import { UserType, userSchema } from "@/utils/validation.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import apiService from "@/service";
import { REDUCER_CASES } from "@/utils/constant";
import { useRouter } from "next/navigation";

function SignUp() {
  const [{ userInfo }] = useStateProvider();
  const methods = useForm({
    defaultValues: userInfo,
    resolver: yupResolver(userSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;
  const [{}, dispatch] = useStateProvider();
  const router = useRouter();

  const onSubmit = async (values: UserType) => {
    try {
      const { data } = await apiService.post("/api/auth/create-user", {
        ...values,
      });
      if (data.status) {
        dispatch({
          type: REDUCER_CASES.SET_NEW_USER,
          newUser: false,
        });
        dispatch({
          type: REDUCER_CASES.SET_USER_INFO,
          userInfo: { ...data },
        });
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main
      className=" flex
     justify-center items-center min-h-[calc(100vh_-_80px)] container max-w-[1000px]"
    >
      <div className="w-[60%]">
        <Image
          src={loginImage}
          alt="login page image"
          className="max-w-[500px]"
        />
      </div>
      <div className="w-[40%]">
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2 text-text-color "
          >
            Sign up
          </Typography>
          <Typography className="mb-5 text-gray-600 font-normal ">
            Ready to dive into lively discussions and connect with friends?
            Signing up for Chat app is quick and easy—lets get started!{" "}
          </Typography>
          <FormProvider {...methods}>
            <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
              <Avatar />
              <Input
                label="display name"
                {...register("name")}
                containerProps={{
                  className: "mb-3",
                }}
                labelProps={{
                  className: "font-body capitalize",
                }}
                error={!!errors["name"]?.message}
              />
              {/* <Input
                label="email"
                {...register("email")}
                containerProps={{
                  className: "mb-3",
                }}
                labelProps={{
                  className: "font-body capitalize",
                }}
                error={!!errors["email"]?.message}
              /> */}
              <Input
                label="About"
                {...register("about")}
                labelProps={{
                  className: "font-body capitalize",
                }}
                error={!!errors["about"]?.message}
              />
              <Button
                size="lg"
                className="mt-6 flex h-12 items-center justify-center gap-2 bg-primary"
                fullWidth
                type="submit"
              >
                Create Profile
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
