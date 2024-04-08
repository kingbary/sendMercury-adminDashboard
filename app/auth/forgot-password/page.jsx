"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import useForgotPassword from "@/hooks/mutations/useForgotPassword";

export default function ForgotPassword() {
  const [formData, setFormData] = useState(null);
  const router = useRouter();

  const { mutate, isPending } = useForgotPassword();

  const requiredErrorMsg = "This field is required";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const onSubmit = async (data) => {
    const frontEndUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
    data.resetUrl = `${frontEndUrl}/change-password`;
    mutate(data);
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
              Forgot Password
            </h2>
            <p className="text-[#959595] w-full text-center">
              Don’t worry it happens to the best of us. Input your registered
              email address to get a link for your password reset.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:border md:border-primaryBlue rounded-[10px] p-4 md:p-12 my-10"
          >
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
            <div className="flex justify-center">
              <Button
                variant="default"
                className="px-10 font-bold w-full md:w-1/2"
              >
                {isPending ? <BeatLoader color="#f3f3f3" /> : "Send Link"}
              </Button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
