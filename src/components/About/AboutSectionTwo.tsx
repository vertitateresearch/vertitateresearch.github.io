"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";

type Editor = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

type Modal = {
  open: boolean;
  content: JSX.Element;
};

const editorsData: Editor[] = [
  {
    name: "Dr. Courtney Cox",
    title: "Cellular and Molecular Researcher",
    bio: "Dr. Cox is a researcher at Emory's Meeks's Lab, focusing on research surrounding the immune response to factor VIII in patients with hemophilia A. Dr. Cox has been nominated for Presidential Award for Excellence in Mathematics and Science Teaching, earned $10,000 grant for her research program, and published over 50 papers.",
    image: "/images/about/editors/dr-cox.png",
  },
  {
    name: "Dr. Luke Rapley",
    title: "Doctor of Philosophy in Pedagogy",
    bio: "Dr. Rapley is passionate about educational research. He has a Master of Education in Educational Leadership from the University of Georgia and a Bachelor of Science in Electrical Engineering from the University of Michigan.",
    image: "/images/about/editors/dr-rapley.png",
  },
  // {
  //   name: "Dr. William Cossen",
  //   title: "US History Researcher",
  //   bio: "Dr. Cossen is a historian of the nineteenth- and twentieth-century United States, specializing in the intersection of religion and nationalism. He serves as the book review editor for H-SHGAPE (Society for Historians of the Gilded Age and Progressive Era).",
  //   image: "/images/about/editors/dr-cossen.png",
  // },
];

const SingleEditor = ({
  editor,
  setModal,
}: {
  editor: Editor;
  setModal: (modal: Modal) => void;
}) => {
  const { name, title, bio, image } = editor;
  const modal = <p className="mx-auto leading-loose">{bio}</p>;
  return (
    <div
      className="container cursor-pointer bg-white p-8 shadow-one dark:bg-gray-dark"
      onClick={() =>
        setModal({
          open: true,
          content: modal,
        })
      }
    >
      <div className="mb-4 aspect-square size-36 overflow-clip rounded-full bg-slate-400 bg-opacity-10 p-2 pt-4">
        <div className="relative -mb-4 size-32">
          <ExportedImage src={image} alt={`Avatar of ${name}`} fill />
        </div>
      </div>
      <p className="mb-2 text-2xl font-semibold text-black dark:text-white">
        {name}
      </p>
      <p className="mb-1 text-lg text-body-color">{title}</p>
    </div>
  );
};

const AboutSectionTwo = () => {
  const [modal, setModal] = useState({
    open: false,
    content: (
      <p className="mx-auto my-auto">
        The modal shouldn&apos;t be displayed unless there is content to
        display.
      </p>
    ),
  });

  return (
    <>
      <div
        className={`duration-300ms fixed bottom-0 left-0 right-0 top-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg transition-all ${modal.open ? "pointer-events-auto cursor-pointer opacity-100 " : "pointer-events-none opacity-0"}`}
        onClick={() => setModal({ ...modal, open: false })}
      >
        <div
          className="container max-w-[800px] rounded-xl bg-white p-8 shadow-one"
          onClick={() => setModal({ ...modal, open: false })}
        >
          {modal.content}
        </div>
      </div>
      <section id="editoral-board" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <SectionTitle title="Editorial Board" paragraph="" mb="1rem" />
            <p className="mb-[80px] max-w-[800px] leading-relaxed text-body-color">
              The Veritate Research editoral board consists of academics and
              research professionals. The Board provides valuable feedback for
              student researchers and ensures the quality of the research
              published in the journal.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {editorsData.map((editor, i) => (
                <SingleEditor key={i} editor={editor} setModal={setModal} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;
