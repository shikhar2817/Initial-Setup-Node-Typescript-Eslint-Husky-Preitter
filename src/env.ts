const config = process.env.ENV !== "production" ? await import("dotenv") : null;

if (config) config.config();

const PORT = process.env.PORT || 5000;

export { PORT };
