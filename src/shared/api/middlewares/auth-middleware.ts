import {
  AUTH_REDIRECT_URL,
  AUTH_TOKEN_URL,
  STORAGE_EXPIRES_TOKEN_NAME,
  STORAGE_TOKEN_NAME,
} from "@/shared/constants";
import { typings, utils } from "@/shared/lib";
import type { Middleware } from "@/shared/types/api";

let isFetchingAccessToken = false;

export const authMiddleware: Middleware = async (request) => {
  const isSameOrigin = !request.path.includes("http") && !request.path.includes("https");

  if (request.token && !isSameOrigin) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${request.token}`,
    };

    return;
  }

  if (isFetchingAccessToken) await utils.waitUntil(() => isFetchingAccessToken != false);

  const expires = localStorage.getItem(STORAGE_EXPIRES_TOKEN_NAME);
  let token = localStorage.getItem(STORAGE_TOKEN_NAME);

  if (!expires || Date.now() > +expires || !token) {
    isFetchingAccessToken = true;
    token = await tokenRequest();
    isFetchingAccessToken = false;
  }

  if (!isSameOrigin)
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };
};

type TokenPayload = {
  token: string;
  expiresToken: string;
};

export const tokenRequest = async () => {
  try {
    const response = await fetch(AUTH_TOKEN_URL, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    const { expiresToken, token } = transformData(result);

    localStorage.setItem(STORAGE_EXPIRES_TOKEN_NAME, expiresToken);
    localStorage.setItem(STORAGE_TOKEN_NAME, token);

    return token;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    window.location.replace(AUTH_REDIRECT_URL);

    return null;
  }
};

function transformData(data: unknown): TokenPayload {
  if (
    !typings.isObject(data) ||
    (!typings.isString(data.expires) && !typings.isNumber(data.expires)) ||
    !typings.isString(data.token)
  )
    throw new Error("Bad response data");

  return {
    expiresToken: String(data.expires),
    token: data.token,
  };
}
