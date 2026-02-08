export default function LogoAY({ size = "text-2xl", font = "font-bold" }) {
  return (
    <span className={`inline-flex items-center gap-1 ${size} ${font}`}>
      <span className="text-white">{"{"}</span>
      <span className="text-sky-400">AY</span>
      <span className="text-white">{"}"}</span>
    </span>
  );
}

import JSZip from "jszip";

export const downloadPublicFolderAsZip = async () => {
  const zip = new JSZip();
  const folderUrl = "/downloads/";

  const fileList = ["AllanYuvaraja_CV.pdf"];

  try {
    let totalSize = 0;

    for (const filePath of fileList) {
      const fullUrl = folderUrl + filePath;
      const response = await fetch(fullUrl);

      if (!response.ok) {
        console.error(`Failed to fetch ${filePath}: ${response.status}`);
        alert(`😔File not found: ${filePath}`);
        return;
      }

      const arrayBuffer = await response.arrayBuffer();
      totalSize += arrayBuffer.byteLength;

      zip.file(filePath, arrayBuffer);
      console.log(` Added ${filePath} (${arrayBuffer.byteLength} bytes)`);
    }

    if (totalSize > 5 * 1024 * 1024) {
      alert("😓ZIP exceeds 5MB limit. Please reduce file size.");
      return;
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    link.download = "Allan_Yuvaraj_CV.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("😔 ZIP creation error:", error);
    alert("Error creating ZIP: " + error.message);
  }
};
