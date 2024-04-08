"use client";
import React, { Suspense, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import useResetPassword from "@/hooks/mutations/useResetPassword";

function ForgotPassword() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const searchParams = useSearchParams();
  const { mutate, isPending } = useResetPassword();

  const requiredErrorMsg = "This field is required";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const resetId = searchParams.get("id");
    const resetData = {
      resetId,
      password: data.password,
    };
    mutate(resetData);
  };

  const handleViewPassword = () => {
    setPasswordType("text");
  };

  const handleHidePassword = () => {
    setPasswordType("password");
  };

  const handleViewConfirmPassword = () => {
    setConfirmPasswordType("text");
  };

  const handleHideConfirmPassword = () => {
    setConfirmPasswordType("password");
  };

  return (
    <>
      <section className="bg-white px-4 pt-9 lg:py-14 lg:px-24 flex flex-col items-center">
        <div className="max-w-[579px]">
          <div className="flex justify-center">
            <Image
              className="w-[185px] h-[34px] md:w-[273px] md:h-[45px]"
              src={"/assets/icons/logo-primary.svg"}
              width={2730}
              height={450}
              alt="SendMercury logo"
            />
          </div>
          <div className="flex flex-col justify-center w-full mt-9">
            <h2 className="text-primaryBlue text-[40px] text-center">
              Change Password
            </h2>
            <p className="text-[#959595] w-full text-center">
              Just a little bit of information about changing passwords.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:border md:border-primaryBlue rounded-[10px] p-4 md:p-12 my-10"
          >
            <div className="mb-6">
              <div className="relative flex flex-col">
                <label htmlFor="password">New Password</label>
                <input
                  className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                  {...register("password", {
                    required: requiredErrorMsg,
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                  type={passwordType}
                  id="password"
                  name="password"
                  placeholder="New Password"
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
                <p className="text-neutral-500 text-xs">{`${errors?.password?.message}`}</p>
              )}
            </div>
            <div className="mb-9">
              <div className="relative flex flex-col">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                  {...register("confirmPassword", {
                    required: requiredErrorMsg,
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                  type={confirmPasswordType}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <div className="absolute right-3 top-[50%]">
                  <Eye
                    onClick={handleViewConfirmPassword}
                    className={`${
                      confirmPasswordType === "password" ? "block" : "hidden"
                    } cursor-pointer`}
                  />
                  <EyeOff
                    onClick={handleHideConfirmPassword}
                    className={`${
                      confirmPasswordType === "text" ? "block" : "hidden"
                    } cursor-pointer`}
                  />
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-neutral-500 text-xs">{`${errors?.confirmPassword?.message}`}</p>
              )}
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                variant="default"
                className="px-10 font-bold w-full md:w-1/2"
                type="submit"
              >
                {isPending ? <BeatLoader color="#f3f3f3" /> : "Change Password"}
              </Button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ForgotPassword />
    </Suspense>
  );
}