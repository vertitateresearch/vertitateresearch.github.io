"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";

type Student = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

type Modal = {
  open: boolean;
  content: JSX.Element;
};

const studentsData: Student[] = [
  {
    name: "Katie Chen",
    title: "Founder and Editor-in-Chief",
    bio: "Katie is a student at the Gwinnett School of Mathematics, Science, and Technology. She is passionate about research and founded Veritate Research to provide a platform for students to share their research. Her research focus on the intersection of computer science and biology.",
    image: "images/about/students/katie-chen.png",
  },
  {
    name: "Katie Chen",
    title: "Founder and Editor-in-Chief",
    bio: "Katie is a student at the Gwinnett School of Mathematics, Science, and Technology. She is passionate about research and founded Veritate Research to provide a platform for students to share their research. Her research focus on the intersection of computer science and biology.",
    image: "images/about/students/katie-chen.png",
  },
  {
    name: "Katie Chen",
    title: "Founder and Editor-in-Chief",
    bio: "Katie is a student at the Gwinnett School of Mathematics, Science, and Technology. She is passionate about research and founded Veritate Research to provide a platform for students to share their research. Her research focus on the intersection of computer science and biology.",
    image: "images/about/students/katie-chen.png",
  },
];

const SingleStudent = ({
  student,
  setModal,
}: {
  student: Student;
  setModal: (modal: Modal) => void;
}) => {
  const { name, title, bio, image } = student;
  const modal = <p className="mx-auto leading-loose">{bio}</p>;
  return (
    <div
      className="container cursor-pointer p-4"
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
      <section id="student-board" className="pb-16 md:pb-20 lg:pb-28">
        <div className="container">
          <SectionTitle title="Student Board" paragraph="" mb="1rem" />
          <p className="mb-[80px] max-w-[800px] leading-relaxed text-body-color">
            The Veritate Research student board consists of high school students
            passionate about research. They work together to streamline and
            improve the publication process for all Georgia high school
            students.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {studentsData.map((student, i) => (
              <SingleStudent key={i} student={student} setModal={setModal} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;
