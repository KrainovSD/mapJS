type ParamValueType = string | number | boolean;

export type ParamsType = Record<string, ParamValueType | ParamValueType[] | null | undefined>;

type CreateURLOptionsInterface = {
  baseURL: string;
  params?: ParamsType;
  short?: boolean;
};

export function createURLWithParams(options: CreateURLOptionsInterface): string {
  const { baseURL, params, short } = options;

  if (short) {
    return createShortURL(baseURL, params);
  }

  return createFullURL(baseURL, params);
}

function createShortURL(baseURL: string, params?: ParamsType): string {
  if (!params) {
    return baseURL;
  }

  const queryString = buildQueryString(params);

  return queryString ? `${baseURL}?${queryString}` : baseURL;
}

function createFullURL(baseURL: string, params?: ParamsType): string {
  const url = new URL(baseURL);

  if (params) {
    const urlSearchParams = new URLSearchParams();

    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== undefined && item !== null) {
            urlSearchParams.append(key, String(item));
          }
        });
      } else if (value !== null && value !== undefined) {
        urlSearchParams.append(key, String(value));
      }
    });
    url.search = urlSearchParams.toString();
  }

  return url.toString();
}

function buildQueryString(params: ParamsType): string {
  const queryString = Object.entries(params)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value !== undefined && value !== null)
    .flatMap(([key, value]) =>
      Array.isArray(value)
        ? value
            .filter((v) => v !== undefined && v !== null)
            .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`)
        : `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    )
    .join("&");

  return queryString;
}
