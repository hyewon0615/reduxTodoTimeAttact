import shortid from "shortid";

export const data = [
  {
    id: shortid.generate(),
    title: "제목1",
    content: "내용1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    content: "내용2",
    isDone: true,
  },
];
