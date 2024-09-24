import type { ParamsType } from "../lib/utils";

export interface RequestInterface<T, Incoming, Body, Outcoming> {
  path: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: Body | Outcoming;
  params?: ParamsType;
  headers?: Record<string, string | undefined>;
  delay?: number;
  transformOutcomingData?: (data: Body) => Outcoming;
  transformIncomingData?: (data: Incoming) => T;
  mock?: Incoming;
  downloadFile?: boolean;
  token?: string;
  withoutResponse?: boolean;
}

export type Middleware = <T, Incoming, Body, Outcoming>(
  request: RequestInterface<T, Incoming, Body, Outcoming>,
) => Promise<unknown>;
