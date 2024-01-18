const { VITE_BASE_URL,  VITE_USER_URL, VITE_EXTRA_URL } = import.meta.env;
// const { VITE_USER_URL } = import.meta.env;

export default {
    BASE_URL: VITE_BASE_URL,
    EXTRA_URL: VITE_EXTRA_URL,
    USER_URL: VITE_USER_URL,
}