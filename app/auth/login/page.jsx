"use client";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../../components/Footer";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import useLogin from "@/hooks/mutations/useLogin";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  let [passwordType, setPasswordType] = useState("password");

  const { mutate, isPending } = useLogin();
  const router = useRouter();

  const requiredErrorMsg = "This field is required";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const onSubmit = async (data) => {
    await mutate(data);
    router.push("/");
  };

  const handleViewPassword = () => {
    setPasswordType("text");
  };
  const handleHidePassword = () => {
    setPasswordType("password");
  };

  return (
    <section className="bg-deepBlue text-white px-4 pt-9 lg:py-14 lg:px-24">
      <div className="flex justify-center md:justify-start mb-12">
        <Image
          className="w-[185px] h-[34px] md:w-[273px] md:h-[45px]"
          src={"/assets/icons/logo-white.svg"}
          width={2730}
          height={450}
          alt="SendMercury logo"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="w-full md:w-[530px]">
          <div className="mb-10">
            <h2 className="text-[40px] text-center">Log In</h2>
            <p className="text-lg text-center">
              Log in to continue where you left off
            </p>
          </div>
          <div className="flex flex-col mb-9">
            <label htmlFor="email">Email Address</label>
            <input
              className="bg-transparent w-full text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
              {...register("email", { required: requiredErrorMsg })}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-neutral-500">{`${errors?.email?.message}`}</p>
            )}
          </div>
          <div className="mb-9">
            <div className="relative flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                {...register("password", { required: requiredErrorMsg })}
                type={passwordType}
                id="password"
                name="password"
                placeholder="Password"
              />
              <div className="absolute right-3 top-[50%]">
                <Eye
                  onClick={handleViewPassword}
                  className={`${
                    passwordType === "password" ? "block" : "hidden"
                  } cursor-pointer`}
                />
                <EyeOff
                  onClick={handleHidePassword}
                  className={`${
                    passwordType === "text" ? "block" : "hidden"
                  } cursor-pointer`}
                />
              </div>
            </div>
            {errors.password && (
              <p className="text-neutral-500">{`${errors?.password?.message}`}</p>
            )}
          </div>
          <div className="flex justify-end mb-9">
            <Link href={"/forgot-password"}>Forgot password?</Link>
          </div>
          <div className="flex justify-center mb-20">
            <Button
              disable={isPending}
              variant="whiteBg"
              className="px-10 font-bold w-full md:w-fit"
            >
              {isPending ? <BeatLoader color="#0032C8" /> : "Login"}
            </Button>
          </div>
        </div>
      </form>
      <hr />
      <Footer />
    </section>
  );
}
