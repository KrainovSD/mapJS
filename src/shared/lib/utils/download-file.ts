type DownloadFileOptions = {
  data: Blob;
  fileName: string;
  mimeType: string;
};

const filenameVariable = "filename=";

export function downloadFile({ data, fileName, mimeType }: DownloadFileOptions) {
  const name = fileName
    .split(";")
    .find((info) => ~info.indexOf(filenameVariable))
    ?.replace(filenameVariable, "")
    ?.replace(/"/g, "")
    ?.trim();
  if (!name) throw new Error("Bad filename");

  const blob = new Blob([data], {
    type: mimeType,
  });
  if (!blob) throw new Error("Bad data");

  const downloadUrl = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.style.display = "none";
  link.download = name;
  link.href = downloadUrl;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  link.remove();
  window.URL.revokeObjectURL(downloadUrl);

  return null;
}
