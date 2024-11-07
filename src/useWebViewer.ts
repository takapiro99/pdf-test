import type { WebViewerInstance } from "@pdftron/webviewer";
import WebViewer from "@pdftron/webviewer";
import type { RefObject } from "react";
import { useCallback, useLayoutEffect, useRef } from "react";

type UseWebViewerArgs = {
  viewer: RefObject<HTMLDivElement>;
  pdfUrl: string;
};

export function useWebViewer({ viewer, pdfUrl }: UseWebViewerArgs) {
  const webViewerInstance = useRef<WebViewerInstance | null>(null);

  const loadDocument = useCallback((initialDoc: string | Blob) => {
    if (!webViewerInstance.current) return;
    const { UI } = webViewerInstance.current;
    UI.loadDocument(initialDoc, { extension: "pdf" });
  }, []);

  const initWebViewer = useCallback(async () => {
    if (!viewer.current || webViewerInstance.current) return;

    const options = {
      licenseKey: import.meta.env.VITE_APRYSE_WEBVIEWER_OEM_LICENSE_KEY,
      path: "/webviewer",
      preloadWorker: "pdf",
      extension: "pdf",
      initialDoc: pdfUrl,
    };
    let webViewer: WebViewerInstance;
    try {
      webViewer = await WebViewer(options, viewer.current);
    } catch (e) {
      console.error(e);
      return;
    }
    webViewerInstance.current = webViewer;

    loadDocument(options.initialDoc);
  }, [viewer, pdfUrl, loadDocument]);

  useLayoutEffect(() => {
    initWebViewer();

    return () => {
      webViewerInstance.current?.UI?.dispose().catch((err) => {
        console.error("==============");
        console.error(err);
      });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    webViewerInstance: webViewerInstance.current,
  };
}
