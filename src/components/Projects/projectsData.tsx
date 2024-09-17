// src/data/projectsData.tsx

import { Project } from "@/types/project";
import ExportedImage from "next-image-export-optimizer";

const projectsData: Project[] = [
  {
    id: 1,
    cover: (
      <ExportedImage
        src="/images/projects/genome-sequencing.png"
        alt="Genome Sequencing"
        width={70}
        height={70}
        className="rounded-md object-cover"
      />
    ),
    title: "Genome Sequencing",
    paragraph:
    "Advanced genome sequencing techniques enable comprehensive analysis of genetic information, facilitating breakthroughs in personalized medicine and biotechnology.",
  },
  {
    id: 2,
    cover: (
      <ExportedImage
        src="/images/projects/data-mining.png"
        alt="Data Mining"
        width={70}
        height={70}
        className="rounded-md object-cover"
      />
    ),
    title: "Data Mining",
    paragraph:
      "Innovative data mining methods uncover hidden patterns in large datasets, driving discoveries and enhancing research efficiency in bioinformatics.",
  },
  {
    id: 3,
    cover: (
      <ExportedImage
        src="/images/projects/machine-learning.png"
        alt="Machine Learning"
        width={70}
        height={70}
        className="rounded-md object-cover"
      />
    ),
    title: "Machine Learning",
    paragraph:
      "Integrating machine learning algorithms with bioinformatics allows for predictive modeling and improved data interpretation, accelerating scientific advancements.",
  },
  {
    id: 4,
    cover: (
      <ExportedImage
        src="/images/projects/protein-modeling.png"
        alt="Protein Modeling"
        width={70}
        height={70}
        className="rounded-md object-cover"
      />
    ),
    title: "Protein Modeling",
    paragraph:
      "Sophisticated protein modeling techniques provide insights into protein structures and functions, essential for drug discovery and therapeutic developments.",
  },
  {
    id: 5,
    cover: (
      <ExportedImage
        src="/images/projects/biostatistics.png"
        alt="Biostatistics"
        width={70}
        height={70}
        className="rounded-md object-cover"
      />
    ),
    title: "Biostatistics",
    paragraph:
      "Biostatistical analysis is crucial for interpreting biological data, ensuring the validity and reliability of research findings in the field of bioinformatics.",
  },
];

export default projectsData;
