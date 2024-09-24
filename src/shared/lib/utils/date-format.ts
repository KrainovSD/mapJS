import dayjs from "dayjs";

export function dateFormat(date: Date | string | number, format: string) {
  const correctDate = new Date(date);

  if (!isValidDate(correctDate)) return "";

  return dayjs(correctDate).format(format);
}

function isValidDate(date: Date) {
  return !Number.isNaN(date.valueOf());
}
