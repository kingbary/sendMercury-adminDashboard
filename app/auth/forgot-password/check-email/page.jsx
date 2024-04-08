import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
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
          <div className="flex flex-col justify-center items-center py-11">
            <div className="bg-[#F0F4FF] flex justify-center items-center p-6 rounded-[28px] w-fit">
              <Image
                src={"/assets/icons/mail-inbox.png"}
                className="w-[153px] h-[153px]"
                width={1530}
                height={1530}
                alt="mail inbox icon"
              />
            </div>
            <div className="flex flex-col justify-center w-full my-9">
              <h2 className="text-primaryBlue text-[40px] text-center">
                Check Your Email
              </h2>
              <p className="text-[#959595] w-full text-center">
                We have sent instructions to recover your password to your email.
                {/* <span className="font-semibold">{" "}{"[Email]"}</span> */}
              </p>
            </div>
            <div className="mt-8">
                <p className="text-center">Did not get email? Check your spam folder. Or try a <span className="text-primaryBlue font-semibold"><Link href={'/forgot-password'}>different email address</Link></span></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
