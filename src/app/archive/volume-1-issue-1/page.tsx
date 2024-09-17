import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import PdfViewer from "@/components/PdfViewer";

export const metadata: Metadata = {
  title: "Volume 1 | Issue 1 | Veritate Research",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="Archive" description="Volume 1 | Issue 1" />
      <PdfViewer
        pdfPath="/documents/volume-1/issue-1.pdf"
        width={800}
      />
    </>
  );
};

export default AboutPage;
