// const SERVER_URL =  "https://my-cosmetic-store.onrender.com";
const SERVER_URL = "http://localhost:8080";

export const URL = {
    ADD_NEW_ITEM: `${SERVER_URL}/api/v1/item`,
    GET_ALL_ITEM: `${SERVER_URL}/api/v1/getAll`,
    GET_DEFAULT_DATA: `${SERVER_URL}/api/v1/getDefaultData`,
    GET_ALL_BRAND: `${SERVER_URL}/api/v1/getAllBrand`,
    GET_ALL_TYPE: `${SERVER_URL}/api/v1/getAllType`,
    GET_ITEM_BY_ID: `${SERVER_URL}/api/v1/getOneItem`,
    SEARCH_ITEM_BY_BRAND: `${SERVER_URL}/api/v1/search`,
    GET_HOT_DEAL_ITEM: `${SERVER_URL}/api/v1/hot-deal?page=`,
    GET_ALL_HOT_DEAL_ITEM: `${SERVER_URL}/api/v1/all-hot-item`,
    GET_NEW_ITEM: `${SERVER_URL}/api/v1/new-item?page=`,
    GET_ALL_NEW_ITEM: `${SERVER_URL}/api/v1/all-new-item`,
    GET_BEST_SELLERS: `${SERVER_URL}/api/v1/best-sellers?page=`,
    GET_ALL_BEST_SELLERS: `${SERVER_URL}/api/v1/all-best-sellers`,
    GET_GIFT: `${SERVER_URL}/api/v1/gift?page=`,
    GET_ALL_GIFT: `${SERVER_URL}/api/v1/all-gift`,
    COUNT_ITEM_BY_TYPE_ID: `${SERVER_URL}/api/v1/count-item-by-typeid?typeId=`,
    COUNT_ITEM_BY_TYPE_ID_AND_BRAND: `${SERVER_URL}/api/v1/count-item-by-typeid-brands`,
    LOGIN: `${SERVER_URL}/login`,
    REGISTER: `${SERVER_URL}/register`,
    REFRESH_TOKEN: `${SERVER_URL}/refreshToken`,
    LOG_OUT: `${SERVER_URL}/log-out`,
    PAYMENT: `${SERVER_URL}/api/v1/payment`,
    CHANGE_CUSTOMER_INFO: `${SERVER_URL}/info`,
    GET_ALL_INVOICE: `${SERVER_URL}/api/v1/getSomeInvoice`,
    SEARCH_INVOICE_BY_CODE: `${SERVER_URL}/api/v1/invoice`,
    CANCEL_INVOICE_BY_CODE: `${SERVER_URL}/api/v1/invoice`

}