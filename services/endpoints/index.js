// AUTH
export const LOGIN = "/admin/auth/login";
export const FORGOT_PASSWORD = "/admin/auth/forgot-password";
export const RESET_PASSWORD = (resetId) =>
  `/admin/auth/reset-password/${resetId}`;

// DASHBOARD DATA
export const DASHBOARD = "";

//ORDERS
export const CREATE_ORDER = "/admin/orders";
export const GET_PENDING_ORDERS =
  "/admin/orders?page=1&limit=100&status=pending";
export const GET_SUCCESSFUL_ORDERS =
  "/admin/orders?page=1&limit=100&status=successful";
export const SET_SUCCESSFUL_ORDER = (orderId) =>
  `/admin/orders/${orderId}/status/cancel`;
export const SET_SHIPPED_ORDER = (orderId) =>
  `/admin/orders/${orderId}/status/cancel`;

// GET STORES
export const FETCH_STORES = "/admin/stores?page=1&limit=100&location";

// REVIEWS
export const REVIEWS = "/admin/reviews";
export const GET_REVIEWS = "/admin/reviews";

// VENDORS
export const PLATINUM_VENDORS = "/admin/vendors?plan=platinum&page=1&limit=20";
export const PLATINUM_VENDORS_SUSPENDED =
  "/admin/vendors?plan=platinum&page=1&limit=20&status=suspended";
export const SILVER_VENDORS = "/admin/vendors?plan=silver&page=1&limit=20";
export const SILVER_VENDORS_SUSPENDED =
  "/admin/vendors?plan=silver&page=1&limit=20&status=suspended";
export const BASIC_VENDORS = "/admin/vendors?plan=basic&page=1&limit=20";
export const BASIC_VENDORS_SUSPENDED =
  "/admin/vendors?plan=basic&page=1&limit=20&status=suspended";
export const SUSPEND_VENDOR = (userId) => `/admin/vendors/${userId}`;

export const GET_VENDORS_DETAILS = (userId) =>
  `/admin/vendors/${userId}/reviews`;

// NOTIFICATIONS
export const GET_NOTIFICATIONS = "/admin/notifications";
export const READ_NOTIFICATIONS = (notificationId) =>
  `/admin/notifications/${notificationId}`;
