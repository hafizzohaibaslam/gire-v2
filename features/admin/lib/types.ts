export type Reviewer = {
  id: string;
  image: string;
  name: string;
  department: string;
  position: string;
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

export type TrendingTopic = {
  id: string;
  image: string;
  author: string;
  date: string;
  title: string;
  researchField: string;
  researchKeywords: string[];
  doi: string;
};
