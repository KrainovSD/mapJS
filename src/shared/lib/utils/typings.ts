export function checkType<R>(value: unknown, condition: boolean): value is R {
  if (condition) {
    return true;
  }

  return false;
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

export function isId(value: unknown): value is number | string {
  return isNumber(value) || isString(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

export function isArrayOfObjects(value: unknown): value is Record<string, unknown>[] {
  return Array.isArray(value) && value.every((val) => isObject(val));
}

export function isArray(value: unknown): value is unknown[] {
  return Boolean(value && Array.isArray(value));
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isNullable(value: unknown): value is null | undefined {
  return typeof value === "undefined" || value === null;
}
