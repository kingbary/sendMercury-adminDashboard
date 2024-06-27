"use client";
import React, { useState, useEffect } from "react";
import Container from "../universal/Container";
import { useAuthToken } from "@/hooks/useAuthToken";
import useUpdateNotificationsSettings from "@/hooks/mutations/useUpdateNotificationsSettings";
import { useGetNotificationsSettings } from "@/hooks/queries/useGetNotificationsSettings";
import { ClipLoader } from "react-spinners";

export default function Notifications() {
  useAuthToken();
  const { mutate } = useUpdateNotificationsSettings();
  const { data: notificationsSettingsData, isLoading: isFetching } =
    useGetNotificationsSettings();

  const [settings, setSettings] = useState({
    newFeatures: [],
    newVendor: [],
    // OTHER NOTIFICATIONS SETTINGS WILL GO HERE
    // newWithdrawal: [],
    // newSubscription: [],
  });

  const [loadingStates, setLoadingStates] = useState({
    newVendorNone: false,
    newVendorInApp: false,
    newVendorEmail: false,
    newFeaturesNone: false,
    newFeaturesInApp: false,
    newFeaturesEmail: false,
  });

  useEffect(() => {
    if (notificationsSettingsData) {
      const fetchedSettings =
        notificationsSettingsData?.data?.data?.setting?.general;
      setSettings({
        newFeatures: fetchedSettings?.newFeatures || [],
        newVendor: fetchedSettings?.newVendor || [],
        // newWithdrawal: fetchedSettings?.newWithdrawal || [],
        // newSubscription: fetchedSettings?.newSubscription || [],
      });
    }
  }, [notificationsSettingsData]);

  const handleUpdateSettings = (type, value, loadingKey) => {
    const updatedSettings = { ...settings, [type]: value };
    setSettings(updatedSettings);
    setLoadingStates({ ...loadingStates, [loadingKey]: true });
    mutate(updatedSettings, {
      onSettled: () =>
        setLoadingStates({ ...loadingStates, [loadingKey]: false }),
    });
  };

  const newVendorSettings = settings?.newVendor;
  const newFeatureSettings = settings?.newFeatures;

  return (
    <div className="w-full md:w-3/4">
      <Container className="px-4">
        <p className="font-bold">Notification Settings</p>
        <p className="text-[#666] mb-10">
          Select your default notification channels
        </p>

        {/* New vendor application */}
        <div className="flex flex-col md:flex-row justify-between border-b border-[#C4C4C4] mb-4 pb-4">
          <p className="text-[#666]">New vendor application</p>
          <div className="flex gap-1">
            <button
              onClick={() =>
                handleUpdateSettings("newVendor", [], "newVendorNone")
              }
              className={`py-1 px-[10px] border-solid border ${
                newVendorSettings.length === 0
                  ? "bg-primaryBlue text-white"
                  : "text-[#525252] bg-none border-[#525252]"
              }  rounded-[5px] min-w-[60px] flex items-center justify-center`}
            >
              {loadingStates.newVendorNone ? (
                <ClipLoader size={16} color="white" />
              ) : (
                "None"
              )}
            </button>
            <button
              onClick={() =>
                handleUpdateSettings("newVendor", ["in_app"], "newVendorInApp")
              }
              className={`py-1 px-[10px] rounded-[5px] min-w-[60px] border-solid border ${
                newVendorSettings?.includes("in_app")
                  ? "bg-[#0032C8] text-white"
                  : "text-[#525252] bg-none border-[#525252]"
              }`}
            >
              {loadingStates.newVendorInApp ? (
                <ClipLoader size={16} color="white" />
              ) : (
                "In app"
              )}
            </button>
            <button
              onClick={() =>
                handleUpdateSettings("newVendor", ["email"], "newVendorEmail")
              }
              className={`py-1 px-[10px] rounded-[5px] min-w-[60px] border-solid border ${
                newVendorSettings?.includes("email")
                  ? "bg-[#0032C8] text-white"
                  : "text-[#525252] bg-none border-[#525252]"
              }`}
            >
              {loadingStates.newVendorEmail ? (
                <ClipLoader size={16} color="white" />
              ) : (
                "Email"
              )}
            </button>
          </div>
        </div>

        {/* New Features */}
        <div className="flex flex-col md:flex-row justify-between border-b border-[#C4C4C4] pb-4">
          <p className="text-[#666]">New Features</p>
          <div className="flex gap-1">
            <button
              onClick={() =>
                handleUpdateSettings("newFeatures", [], "newFeaturesNone")
              }
              className={`py-1 px-[10px] border-solid border ${
                newFeatureSettings.length === 0
                  ? "bg-primaryBlue text-white"
                  : "text-[#525252] bg-none border-[#525252]"
              }  rounded-[5px] min-w-[60px] flex items-center justify-center`}
            >
              {loadingStates.newFeaturesNone ? (
                <ClipLoader size={16} color="white" />
              ) : (
                "None"
              )}
            </button>
            <button
              onClick={() =>
                handleUpdateSettings(
                  "newFeatures",
                  ["in_app"],
                  "newFeaturesInApp"
                )
              }
              className={`py-1 px-[10px] rounded-[5px] min-w-[60px] border-solid border ${
                newFeatureSettings?.includes("in_app")
                  ? "bg-[#0032C8] text-white"
                  : "text-[#525252] bg-none border-[#525252]"
              }`}
            >
              {loadingStates.newFeaturesInApp ? (
                <ClipLoader size={16} color="white" />
              ) : (
                "In app"
              )}
            </button>
            <button
              onClick={() =>
                handleUpdateSettings(
                  "newFeatures",
                  ["email"],
                  "newFeaturesEmail"
                )
              }
              className={`py-1 px-[10px] rounded-[5px] min-w-[60px] border-solid border ${
                newFeatureSettings?.includes("email")
                  ? "bg-[#0032C8] text-white"
                  : "text-[#525252] bg-none border-[#525252]"
              }`}
            >
              {loadingStates.newFeaturesEmail ? (
                <ClipLoader size={16} color="white" />
              ) : (
                "Email"
              )}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
