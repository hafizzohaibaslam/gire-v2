export type Feature = {
  id: number;
  title: string;
  description: string;
  list: string[];
  image: string;
  bgColor: string;
};

export const features = [
  {
    id: 1,
    title: "fast turnaround",
    description:
      "We offer quick response times, with queries answered within 2 business days and real-time tracking of the review process.",
    list: [
      "We are committed to timely communication in every step of the academic process.",
    ],
    image: "/home-page/clock.svg",
    bgColor: "#FF761033",
  },
  {
    id: 2,
    title: "professional community",
    description:
      "Our journal is supported by a team of distinguished experts, including professors, postdocs, and field leaders, ensuring rigorous academic standards.",
    list: [
      "Our journal is guided and enriched by a respected community of professionals",
    ],
    image: "/home-page/users.svg",
    bgColor: "#6E76E533",
  },
  {
    id: 3,
    title: "peer review process",
    description:
      "All submissions undergo a rigorous peer review to ensure quality and academic integrity.",
    list: [],
    image: "/home-page/brain.svg",
    bgColor: "#F2393633",
  },
  {
    id: 4,
    title: "open access",
    description:
      "Our journal is committed to open access, allowing free access to all published articles.",
    list: [
      "Our journal is committed to open access, making all published articles freely available",
    ],
    image: "/home-page/earth.svg",
    bgColor: "#008EFF33",
  },
  {
    id: 5,
    title: "student-centric",
    description:
      "We prioritize the voices of high school students, providing a platform tailored to their unique perspectives and insights.",
    list: [],
    image: "/home-page/student.svg",
    bgColor: "#45C64633",
  },
  {
    id: 6,
    title: "DOI  assignment",
    description:
      "Upon publication, each article is assigned a Digital Object Identifier (DOI), ensuring a permanent link and easy access for citation and reference.",
    list: [],
    image: "/home-page/link.svg",
    bgColor: "#FABB1833",
  },
];
