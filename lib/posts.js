import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "posts");

const getPostFileNames = () => fs.readdirSync(POSTS_DIR);
const idFromFileName = (fileName) => fileName.replace(/\.md$/, "");
const readMarkdownFile = (fileName) => fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");

export function getPostsData() {
  const allPostsData = getPostFileNames().map((fileName) => getPostData(idFromFileName(fileName)));

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostIds() {
  return getPostFileNames().map((fileName) => {
    return {
      params: {
        id: idFromFileName(fileName),
      },
    };
  });
}

export function getPostData(id) {
  const fileContents = readMarkdownFile(`${id}.md`);
  return {
    id,
    ...matter(fileContents).data,
  };
}
