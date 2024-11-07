import { useRef } from "react";
import { useWebViewer } from "./useWebViewer";

export const PDFEditArea = () => {
  const viewer = useRef<HTMLDivElement>(null);
  useWebViewer({ viewer, pdfUrl: "/sample.pdf" });
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="webviewer"
        ref={viewer}
        style={{
          width: "100%",
          height: "100%",
          border: "red 2px solid", // for debugging purpose
        }}
      />
    </div>
  );
};
