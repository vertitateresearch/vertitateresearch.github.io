import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Submission Page",
  description: "This page is where you submit your articles.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Submission"
        description="Submit a poster or research paper to Veritate Research."
      />

      <div className="container my-[100px]">
        <div className="prose lg:prose-xl">
          <h2 id="poster-guidelines-for-submission">
            Poster Guidelines for Submission
          </h2>
          <p>
            To facilitate a constructive review of your poster, please ensure
            that your work fulfills the following requirements.
          </p>
          <h3 id="submission-requirements">Submission Requirements</h3>
          <ul>
            <li>
              <p>
                Include a 150-200-word, non-technical summary of your research.
              </p>
              <ul>
                <li>
                  This summary is given in a different field in the submission
                  form. It is submitted in text, not as a file.
                </li>
                <li>
                  The summary should be different from the abstract. The summary
                  should outline the main points of your research in an engaging
                  manner that can be easily read and understood by a non-expert.
                  A summary should focus on the conclusions of your research,
                  while the abstract often also briefly describes the methods
                  and details of the study.
                </li>
              </ul>
            </li>
            <li>
              <p>
                To ensure integrity of review, please either submit an
                anonymized copy of the poster (no name/personal identifier in
                the header, footer, or body). Alternatively, provide an editable
                version so we can redact your identifiers when sending for
                review.
              </p>
            </li>
          </ul>
          <h3 id="poster-formatting">Poster Formatting</h3>
          <ul>
            <li>
              <p>
                Submission may not exceed 1 page, including all figures/tables
                and references.
              </p>
              <ul>
                <li>
                  As such, references should be limited to few key references.
                </li>
              </ul>
            </li>
            <li>
              <p>The work should be submitted in .pdf format.</p>
            </li>
            <li>
              <p>
                We prefer that the manuscript be prepared using an editing
                program such as Google Slides. If your work is produced in
                software such as LaTeX, please include both a PDF and your
                source files.
              </p>
            </li>
          </ul>
          <h3 id="structure-and-style">Structure and Style</h3>
          <ul>
            <li>
              <p>
                Writing should be clear, logical, and free from typographical or
                grammatical errors.
              </p>
            </li>
            <li>
              <p>
                Appropriate structure of submissions will vary depending on the
                research field.
              </p>
              <ul>
                <li>
                  In general, your poster submission might include sections for
                  an Abstract, Introduction, Methods, Results, Discussion,
                  References, and Figures/Tables.
                </li>
              </ul>
            </li>
          </ul>
          <h3 id="figures-and-tables">Figures and Tables</h3>
          <ul>
            <li>
              <p>
                Figures may be incorporated into the body of the poster for
                readability.
              </p>
              <ul>
                <li>
                  If a poster is selected for publication, the editorial staff
                  will request high-resolution figures if the current figures
                  are deemed low-resolution.
                </li>
              </ul>
            </li>
            <li>
              <p>
                All figures must be appropriately referenced in the text and
                include legends in text format. For plots and graphs, axes
                should be clearly marked and legible.
              </p>
            </li>
            <li>
              <p>Tables should be submitted in text format.</p>
            </li>
          </ul>
        </div>
        <div className="my-[100px] flex flex-row flex-wrap items-center justify-center gap-4">
          {/* TODO: Google Form Link */}
          <Link
            href="#"
            className="rounded-md bg-primary px-4 py-2 text-lg text-white"
          >
            Submit a Poster
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
