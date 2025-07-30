export type Reviewer = {
  objId: string;
  imgUrl: string;
  name: string;
  department: string;
  role: string;
};

export type AdvisoryBoard = {
  objId: string;
  name: string;
  title: string;
  department: string;
  affiliation: string;
  field: string;
  imgUrl: string;
};

export type Issue = {
  objId: string;
  name: string;
  area: string;
  link: string;
  title: string;
  keyword: string;
  paperUrl: string;
  paperVolume: number;
  paperNumber: number;
  content?: string;
  date?: string;
  imgUrl?: string;
};

export type Editor = {
  objId: string;
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  letter: string;
  imgUrl: string;
  level: "co-chief" | "chief";
};
