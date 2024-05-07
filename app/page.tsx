import Image from "next/image";
import loginImage from "@/public/login-Image.jpg";
import { Button, Input, Typography } from "@/libraries/material-tailwind";

export default function Home() {
  return (
    <main className=" flex justify-center items-center min-h-[calc(100vh_-_80px)] container max-w-[1000px]">
      <div className="w-[60%]">
        <Image src={loginImage} alt="login page image" />
      </div>
      <div className="w-[40%]">
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2 text-text-color "
          >
            Sign In
          </Typography>
          <Typography className="mb-5 text-gray-600 font-normal ">
            Enter your email and password to sign in
          </Typography>
          <form action="#" className=" text-left">
            <Button
              variant="outlined"
              size="lg"
              className="mt-6 flex h-12 items-center justify-center gap-2 text-text-color"
              fullWidth
            >
              <img
                src={`https://www.material-tailwind.com/logos/logo-google.png`}
                alt="google"
                className="h-6 w-6"
              />
              sign in with google
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="mt-4 text-center font-normal"
            >
              Not registered?{" "}
              <a href="#" className="font-medium text-text-color">
                Create account
              </a>
            </Typography>
          </form>
        </div>
      </div>
    </main>
  );
}
