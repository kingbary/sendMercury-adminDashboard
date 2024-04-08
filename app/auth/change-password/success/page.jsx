import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
            <Image
              src={"/assets/images/confirmation.svg"}
              className="w-[153px] h-[153px]"
              width={1530}
              height={1530}
              alt="mail inbox icon"
            />
            <div className="flex flex-col justify-center w-full my-9">
              <h2 className="text-primaryBlue text-[40px] text-center">
                Success!
              </h2>
              <p className="text-[#959595] w-full text-center">
                Your password has been changed successfully
              </p>
              <Link href={"/login"} className="flex justify-center mt-10">
                <Button variant="default" className="w-full md:w-[40%]">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
