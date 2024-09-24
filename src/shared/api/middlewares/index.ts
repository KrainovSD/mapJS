import { utils } from "@/shared/lib";
import type { Middleware, RequestInterface } from "@/shared/types/api";
import { consoleMiddleware } from "./console-middleware";

const middlewares: Middleware[] = [];
if (utils.isHasFeature("api-middleware-logger")) middlewares.push(consoleMiddleware);

export function executeMiddlewares<T, Incoming, Body, Outcoming>(
  request: RequestInterface<T, Incoming, Body, Outcoming>,
) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    for (const middleware of middlewares) {
      // eslint-disable-next-line no-await-in-loop
      await middleware(request);
    }

    resolve(1);
  });
}
