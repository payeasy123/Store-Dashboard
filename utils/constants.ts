const ICONS_DIR = "/icons";

const IMAGE_DIR = "/images";

const ROUTES = {
    auth: {
        LOGIN: "/auth/login",
        FORGOT_PASSWORD: "/auth/forgot-password",
        RESET_PASSWORD: "/auth/reset-password",
    },
    dashboard: {
        HOME: "/",
    },
};

const ACCESS_TOKEN_KEY = "accessToken";

const CACHE_KEYS = {};

export { ACCESS_TOKEN_KEY, CACHE_KEYS, ICONS_DIR, IMAGE_DIR, ROUTES };
