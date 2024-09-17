import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"));

export const metadata: Metadata = {
  title: "Recent Issues | Veritate Research",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="Recent Issues" description="Volume 1 | Issue 1" />
      <PdfViewer pdfPath="/documents/volume-1/issue-1.pdf" width={800} />
    </>
  );
};

export default AboutPage;
