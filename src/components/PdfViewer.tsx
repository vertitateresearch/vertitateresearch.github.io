"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Polyfill/ref: https://github.com/wojtekmaj/react-pdf/issues/1811
if (typeof Promise.withResolvers === "undefined") {
  if (window)
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    window.Promise.withResolvers = function () {
      let resolve, reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    };
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  pdfPath: string;
  width?: number;
  height?: number;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfPath, width, height }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split("/").pop() || "download.pdf";
    link.click();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-end">
        <button
          onClick={downloadPdf}
          className="
            hover:bg-primary-dark rounded bg-primary px-4 py-2 text-white
            shadow-btn transition-colors duration-300
            focus:outline-none
          "
        >
          Download PDF
        </button>
      </div>
      <div className="max-h-[80vh] overflow-y-scroll rounded bg-white p-4 shadow-two dark:bg-gray-dark">
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={width || 600}
              height={height || 1400}
              className="mb-4"
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
