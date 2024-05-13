"use client";
import Image from "next/image";
import loginImage from "@/public/login-Image.jpg";
import { Button, Input, Typography } from "@/libraries/material-tailwind";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";
import apiService from "@/service";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStateProvider } from "@/context/stateContext";
import { REDUCER_CASES } from "@/utils/constant";
import { userInfo } from "os";

export default function Home() {
  const router = useRouter();
  const [{}, dispatch] = useStateProvider();
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const {
        user: { displayName: name, email, photoURL: displayImage },
      } = await signInWithPopup(auth, provider);
      const { data } = await apiService.post("/api/auth/check-user", { email });
      if (!data.status) {
        dispatch({
          type: REDUCER_CASES.SET_NEW_USER,
          newUser: true,
        });
        dispatch({
          type: REDUCER_CASES.SET_USER_INFO,
          userInfo: { name, email, displayImage, status: "" },
        });
        router.push("/sign-up");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
            Ready to join the conversation? Simply hit the Sign in with Google
            button below and let the chatting begin!
          </Typography>
          <form className=" text-left">
            <Button
              variant="outlined"
              size="lg"
              className="mt-6 flex h-12 items-center justify-center gap-2 text-text-color"
              fullWidth
              onClick={handleLogin}
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
              <Link href="/sign-up" className="font-medium text-text-color">
                Create account
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </main>
  );
}
