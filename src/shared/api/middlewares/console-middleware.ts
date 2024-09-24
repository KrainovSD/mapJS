import type { Middleware } from "@/shared/types/api";

export const consoleMiddleware: Middleware = async (response) => {
  // eslint-disable-next-line no-console
  console.log(response);
};
