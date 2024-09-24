import { utils } from "@/shared/lib/";
import { typings } from "../lib/utils";
import type { RequestInterface } from "../types/api";
import { executeMiddlewares } from "./middlewares";

export async function requestApi<T, Incoming = unknown, Body = unknown, Outcoming = unknown>(
  request: RequestInterface<T, Incoming, Body, Outcoming>,
): Promise<T> {
  if (request.delay) {
    await utils.wait(request.delay);
  }
  if (request.mock) {
    const transformedResult = request.transformIncomingData
      ? request.transformIncomingData(request.mock)
      : (request.mock as T);

    return transformedResult;
  }

  await executeMiddlewares(request);

  const { method, body, path, params, headers } = request;
  const trimedPath = path.replace(/^\//, "").replace(/\/$/, "");
  const fullPath =
    trimedPath.includes("http") || trimedPath.includes("https")
      ? trimedPath
      : `${window.location.origin}/${trimedPath}`;

  const url = utils.createURLWithParams({ baseURL: fullPath, params });
  let preparedBody = body;

  if (body && !(preparedBody instanceof FormData)) {
    if (request.transformOutcomingData) {
      preparedBody = request.transformOutcomingData(body as Body);
    }

    if (typings.isObject(body) || typings.isArray(body))
      preparedBody = JSON.stringify(preparedBody) as Outcoming;
  }

  const response = await fetch(url, {
    method,
    body: preparedBody as BodyInit,
    headers: {
      ...(body instanceof FormData ? {} : { "Content-Type": "application/json; charset=UTF-8" }),
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  if (request.downloadFile) {
    const data = await response.blob();
    const mimeType = response.headers.get("content-type");
    const fileName = response.headers.get("content-disposition");

    if (!mimeType || !fileName) throw new Error("Download Error! Empty info!");

    return utils.downloadFile({
      data,
      fileName,
      mimeType,
    }) as T;
  }

  if (request.withoutResponse) return true as T;

  const result = await response.json();
  const transformedResult = request.transformIncomingData
    ? request.transformIncomingData(result)
    : result;

  return transformedResult;
}
