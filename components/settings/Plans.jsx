import React from "react";
import Container from "../universal/Container";
import Image from "next/image";
import Link from "next/link";

export default function Plans() {
  return (
    <div className="w-full md:w-3/4">
      <div className="lg:ml-6">
        <p className="text-lg font-bold mt-8">Plan Settings</p>
        <p className="text-midGray">
          Set the stores available for the various plans
        </p>
      </div>
      <Container className="px-4">
        <p className="text-lg font-semibold mb-4">Basic Plan</p>
        <div className="flex gap-4">
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
        </div>
        <Link
          href={"/settings/plans/399339299"}
          className="bg-primaryBlue inline-flex text-white px-4 py-3 mt-5 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
        >
          Set Stores
        </Link>
      </Container>
      <Container className="px-4">
        <p className="text-lg font-semibold mb-4">Silver Plan</p>
        <div className="flex gap-4">
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
        </div>
        <Link
          href={"/settings/plans/399339299"}
          className="bg-primaryBlue inline-flex text-white px-4 py-3 mt-5 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
        >
          Set Stores
        </Link>
      </Container>
      <Container className="px-4">
        <p className="text-lg font-semibold mb-4">Gold Plan</p>
        <div className="flex gap-4">
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
        </div>
        <Link
          href={"/settings/plans/399339299"}
          className="bg-primaryBlue inline-flex text-white px-4 py-3 mt-5 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
        >
          Set Stores
        </Link>
      </Container>
      <Container className="px-4">
        <p className="text-lg font-semibold mb-4">Platinum Plan</p>
        <div className="flex gap-4">
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
            <div className="w-10 h-10 overflow-hidden">
              <Image
                src={"/assets/icons/amazon.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
        </div>
        <Link
          href={"/settings/plans/399339299"}
          className="bg-primaryBlue inline-flex text-white px-4 py-3 mt-5 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
        >
          Set Stores
        </Link>
      </Container>
    </div>
  );
}
