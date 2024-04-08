import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="bg-deepBlue lg:px-16 md:px-12 sm:px-6 px-6 xl:20 2xl:px-40 text-white pt-16 pb-20 ">
      <div className="grid grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2">
          <Link href="https://dev--send-mercury.netlify.app">
            <Image
              className="pb-4"
              src="/assets/icons/logo-transparent.svg"
              alt="send mercury logo"
              width={30}
              height={30}
            />
          </Link>
          <p>©{new Date().getFullYear()}, All rights reserved</p>
          <p className="my-3">
            <a
              href="https://goo.gl/maps/LdiK3Dc5ZpXDybY3A"
              target="_blank"
              rel="noreferrer"
            >
              928, Bishop Aboyade Cole Street Victoria Island Lagos.
            </a>
          </p>
          <p className="my-3">
            <a className="td" href="tel:+2348023727226">
              +234 802 372 7226
            </a>
          </p>
        </div>
        <div className="pt-8 lg:pt-0">
          <h6 className="text-lg lg:text-xl leading-9 text-white font-bold">
            About Us
          </h6>
          <div className="flex flex-col gap-1">
            <Link
              href="https://dev--send-mercury.netlify.app/contact"
              className="py-2 td"
            >
              Our Story
            </Link>
            <Link
              href="https://dev--send-mercury.netlify.app/contact"
              className="py-2 td"
            >
              Careers
            </Link>
          </div>
        </div>
        <div className="pt-8 lg:pt-0">
          <h6 className="text-lg lg:text-xl leading-9 text-white font-bold">
            Support
          </h6>
          <div className="flex flex-col gap-1">
            <Link
              href="https://dev--send-mercury.netlify.app/faq"
              className="py-2"
            >
              FAQ
            </Link>
            <Link
              href="https://dev--send-mercury.netlify.app/contact"
              className="py-2"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="pt-8 lg:pt-0">
          <h6 className="text-lg lg:text-xl leading-9 text-white font-bold">
            Legal
          </h6>
          <div className="flex flex-col gap-1">
            <Link
              href="https://dev--send-mercury.netlify.app/contact"
              className="py-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://dev--send-mercury.netlify.app/contact"
              className="py-2"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>

      <hr className=" opacity-30 my-[24px] md:mt-[50px] md:mb-[30px]" />

      <div className="flex float-right opacity-30">
        <TiSocialInstagram className="" size={25} />
        <TiSocialFacebook className="mx-4" size={25} />
        <TiSocialLinkedin className="" size={25} />
        <TiSocialTwitter className="mx-4" size={25} />
      </div>
    </footer>
  );
}
