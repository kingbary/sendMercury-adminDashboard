import SettingsLayout from "@/components/settings/SettingsLayout";
import Stores from "@/components/settings/Stores";
import React from "react";

export default function page() {
  return (
    <SettingsLayout>
      <Stores />
    </SettingsLayout>
  );
}
