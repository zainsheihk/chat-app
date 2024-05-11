"use client";
import Image from "next/image";
import loginImage from "@/public/21437-scaled-1.jpg";
import { Button, Input, Typography } from "@/libraries/material-tailwind";
import { useStateProvider } from "@/context/stateContext";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Avatar from "@/components/avatar";

function SignUp() {
  const [{ userInfo }] = useStateProvider();
  const methods = useForm<{
    name: string;
    about: string;
    displayImage: string;
  }>({
    defaultValues: userInfo,
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  const onSubmit = (values: {}) => {
    console.log(values, "values");
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
              />
              <Input
                label="About"
                {...register("about")}
                labelProps={{
                  className: "font-body capitalize",
                }}
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
