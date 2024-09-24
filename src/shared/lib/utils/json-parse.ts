export function jsonParse<T>(json: string): T | null {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
}
