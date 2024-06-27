// AUTH
export const LOGIN = "/admin/auth/login";
export const FORGOT_PASSWORD = "/admin/auth/forgot-password";
export const RESET_PASSWORD = (resetId) =>
  `/admin/auth/reset-password/${resetId}`;

// DASHBOARD DATA
export const OVERVIEW = "/admin/overview";

//ORDERS
export const ORDERS_METRICS = "/admin/orders/order-overview";
export const CREATE_ORDER = "/admin/orders";
// export const GET_ORDERS = (pageParam, limit, status) =>
//   `/admin/orders?page=${pageParam || 1}&limit=${limit || 20}${
//     status ? "&status=" + status : ""
//   }
//   }`;
export const GET_ORDERS = (pageParam, limit, status) =>
  `/admin/orders?page=${pageParam || 1}&limit=${limit || 20}${
    status ? `&status=${status}` : ""
  }`;

export const SET_ORDER_STATUS = (orderId, orderStatus) =>
  `/admin/orders/${orderId}/status/${orderStatus}`;

// GET STORES
export const FETCH_STORES = (pageParam, limit) =>
  `admin/stores?page=${pageParam || 1}&limit=${limit || 150}&location`;

// REVIEWS
export const REVIEWS = "/admin/reviews";
export const GET_REVIEWS = "/admin/reviews";

// VENDORS
export const VENDORS_METRIC = "/admin/vendors/metrics";
export const LIST_VENDORS = (plan, pageParam, status, limit) =>
  `/admin/vendors?${plan ? "plan=" + plan + "&" : ""}page=${
    pageParam || 0
  }&limit=${limit || 20}&status=${status || "active"}`;
export const VENDOR_ACTION = (userId) => `/admin/vendors/${userId}`;

export const GET_VENDORS_DETAILS = (userId) =>
  `/admin/vendors/${userId}/reviews`;

// NOTIFICATIONS
export const GET_NOTIFICATIONS = "/admin/notifications";
export const READ_NOTIFICATIONS = (notificationId) =>
  `/admin/notifications/${notificationId}`;
export const READ_ALL_NOTIFICATIONS = "/admin/notifications";

// PRODUCTS
export const PRODUCT_METRIC = "/admin/products/product-metric";
export const GET_PRODUCTS = (status, type, pageParam, limit) =>
  `/admin/products?${status ? `status=${status}&` : ""}${
    type ? `type=${type}&` : ""
  }page=${pageParam || 1}&limit=${limit || 20}`;
export const GET_INDIVIDUAL_PRODUCT = (productId) =>
  `/admin/products/${productId}`;
export const PRODUCT_STORES = (productId) =>
  `/admin/products/${productId}/product-stores`;
export const VARIANTS = (variantId) => `/admin/variants/${variantId}`;
export const VET_TO_LIVE = (productId) => `/admin/products/${productId}/live`;

// REVENUE
export const TOP_STORES = "/admin/orders/top-stores";
export const GET_WITHDRAWAL = (pageParam, limit) =>
  `/admin/withdrawals?page=${pageParam || 1}&limit=${
    limit || 20
  }&status&from=2024-02-05&to=`;

// GRAPH DATA
export const SALES_DATA = (time, year) =>
  `/orders/sales-metric/${time}?year=${year || 2024}`;

// SETTINGS
export const LIST_PLAN = "/admin/plans";
export const INDIVIDUAL_PLAN = (planId) => `/admin/plans/${planId}`;
export const UPDATE_STORE = (storeId) => `/admin/stores/${storeId}`;
export const CREATE_STORE = "/admin/stores";
export const UPDATE_NOTIFICATIONS_SETTINGS = "/admin/notification-settings";
export const GET_NOTIFICATIONS_SETTINGS = "/admin/notification-settings";

// UPLOAD MEDIA
export const MEDIA_UPLOAD = "/media";
