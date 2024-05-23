import { Input } from "@/libraries/material-tailwind";
import React from "react";
import { Icon } from "@iconify-icon/react";
import { FormProvider, useForm } from "react-hook-form";
import apiService from "@/service";
import { useStateProvider } from "@/context/stateContext";

function MessageBox() {
  const [{ currentChatUser, userInfo }, dispatch] = useStateProvider();

  const methods = useForm({
    defaultValues: { message: "" },
    // resolver: yupResolver(userSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;
  const onSubmit = async (values: { message: string }) => {
    const { data } = await apiService.post("/api/message/sent-message", {
      message: values.message,
      to: currentChatUser?.id,
      from: userInfo?.id,
    });
    console.log(data, "data");
  };
  return (
    <div className="bg-white">
      <div className="px-5 py-3 pb-4 flex justify-center items-center gap-3 bg-[#ccc9]">
        <div className="flex items-center justify-center gap-2">
          <Icon
            icon="fluent:emoji-24-regular"
            className="text-[30px] text-[#607d8b]"
          />

          <Icon
            icon="material-symbols:attachment"
            className="text-[30px] text-[#607d8b]"
          />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex gap-2 items-center justify-center"
          >
            <Input
              placeholder="Type a Message"
              containerProps={{
                className:
                  "[&_input]:border-none [&_input]:px-5 [&_input]:py-3 h-auto  [&_input]:bg-white [&_input]:rounded-full ",
              }}
              labelProps={{
                className: "hidden",
              }}
              {...register("message")}
            />
            <button type="submit">
              {""}
              <Icon
                icon="material-symbols:send"
                className="text-[36px] text-[#607d8b]"
              />
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default MessageBox;
