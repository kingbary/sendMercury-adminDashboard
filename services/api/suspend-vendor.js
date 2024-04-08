import { SUSPEND_VENDOR } from "../endpoints";
import { instance } from "../instance";

export const suspendVendor = (payload) => {
    const { userId, ...rest } = payload;
    console.log(payload)
    return instance.delete(SUSPEND_VENDOR(userId), { ...rest });
};
