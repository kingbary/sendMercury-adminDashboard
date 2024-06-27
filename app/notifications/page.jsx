"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import Container from "@/components/universal/Container";
import useGetNotifications from "@/hooks/queries/useGetNotifications";
import Image from "next/image";
import React from "react";
import { formatDateTime } from "@/utils/formatDateTime";
import { useAuthToken } from "@/hooks/useAuthToken";
import { Skeleton } from "@/components/ui/skeleton";
import useReadAllNotifications from "@/hooks/mutations/useReadAllNotifications";
import { ClipLoader } from "react-spinners";
import useReadNotifications from "@/hooks/mutations/useReadNotifications";
import { toast } from "sonner";

export default function Page() {
  useAuthToken();
  const { data, isFetching } = useGetNotifications();
  const notifications = data?.data?.data.notifications;
  const { mutate: readNotificationsMutation } = useReadNotifications();
  const { mutate: readAllNotificationsMutation, isPending: isReadAllPending } =
    useReadAllNotifications();

  const handleReadNotifications = (notificationsId, isRead) => {
    if (isRead) {
      toast.error("Notification has been read already!");
    } else {
      readNotificationsMutation(notificationsId);
    }
  };
  const handleReadAllNotifications = () => readAllNotificationsMutation();
  return (
    <DashboardLayout>
      <>
        <div className="flex justify-between mx-4 md:mx-8">
          <p className="text-2xl font-semibold">Notifications</p>
          <div>
            <Button
              variant="default"
              className="font-semibold min-w-[138px]"
              onClick={handleReadAllNotifications}
            >
              {isReadAllPending ? (
                <ClipLoader size={16} color="white" />
              ) : (
                "Mark all as read"
              )}
            </Button>
          </div>
        </div>
        <Container className={"mx-4"}>
          {notifications?.length > 0 ? (
            <>
              {notifications.map((data) => {
                return (
                  <div key={data?.id} className="border-b border-neutral-400">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        handleReadNotifications(data?.id, data?.isRead)
                      }
                    >
                      <div className="flex justify-start items-center gap-6 py-4">
                        <Image
                          src={"/assets/images/dp-avatar.png"}
                          width={64}
                          height={64}
                          alt=""
                        />
                        <div className="mr-2">
                          <p
                            className={`font-normal text-sm  ${
                              data?.isRead ? "text-black" : "text-primaryBlue"
                            }`}
                          >
                            {data?.message}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatDateTime(data?.createdAt)}
                          </p>
                        </div>
                      </div>
                      <Image
                        src={`${
                          data?.isRead
                            ? "/assets/icons/read-notification-icon.svg"
                            : "/assets/icons/unread-notification-icon.svg"
                        }`}
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
                <>
                  <div className="flex items-center gap-6 w-full border-b py-4 border-neutral-400">
                    <Skeleton className="w-16 h-16 rounded-full" />
                    <div className="w-full">
                      <Skeleton className="h-4 w-1/2 mb-3" />
                      <Skeleton className="h-3 w-1/4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-6 w-full border-b py-4 border-neutral-400">
                    <Skeleton className="w-16 h-16 rounded-full" />
                    <div className="w-full">
                      <Skeleton className="h-4 w-1/2 mb-3" />
                      <Skeleton className="h-3 w-1/4" />
                    </div>
                  </div>
                </>
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
