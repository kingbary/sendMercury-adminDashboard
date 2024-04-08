"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import Container from "@/components/universal/Container";
import useGetNotifications from "@/hooks/queries/useGetNotifications";
import Image from "next/image";
import { PulseLoader } from "react-spinners";
import React from "react";

export default function Page() {
  const { data, isFetching } = useGetNotifications();
  const notifications = data?.data?.data.notifications;
  return (
    <DashboardLayout>
      <>
        <div className="flex justify-between mx-4 md:mx-8">
          <p className="text-2xl font-semibold">Notifications</p>
          <div>
            <Button variant="default" className="font-semibold">
              Mark all as read
            </Button>
          </div>
        </div>
        <Container className={"mx-4"}>
          {notifications?.length > 0 ? (
            <>
              {notifications.map((data) => {
                return (
                  <div key={data?.id} className="border-b border-neutral-400">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-start items-center gap-6 py-4">
                        <Image
                          src={"/assets/images/dp-avatar.png"}
                          width={64}
                          height={64}
                          alt=""
                        />
                        <div className="mr-2">
                          <p className="font-normal text-sm text-primaryBlue">
                            {data?.name} just upgraded his subscription.
                          </p>
                          <p className="text-sm text-gray-600">
                            09/04/2023 - 19:00
                          </p>
                        </div>
                      </div>
                      <Image
                        //src={"/assets/icons/read-notification-icon.svg"} --- for the unread notification
                        src={"/assets/icons/unread-notification-icon.svg"}
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="text-center">
              {isFetching ? (
                <PulseLoader color="#4d4d4d" />
              ) : (
                "You do not have any notifications yet"
              )}
            </div>
          )}
        </Container>
      </>
    </DashboardLayout>
  );
}
