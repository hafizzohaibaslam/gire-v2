export type Reviewer = {
  id: string;
  image: string;
  name: string;
  department: string;
  position: string;
};

export type AdvisoryBoard = {
  id: string;
  university: string;
  professor: string;
  position: string;
  affiliation: string;
  field: string;
  image: string;
};

export type TrendingTopic = {
  id: string;
  image: string;
  author: string;
  date: string;
  title: string;
  tags: string[];
  doi: string;
};
