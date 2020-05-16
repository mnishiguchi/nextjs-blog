import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "posts");

const getPostFileNames = () => fs.readdirSync(POSTS_DIR);
const readMarkdownFile = (fileName) => fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
const parseFrontMatter = (markdown) => matter(markdown).data;

export function getSortedPostsData() {
  const allPostsData = getPostFileNames().map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fileContents = readMarkdownFile(fileName);
    return {
      id,
      ...parseFrontMatter(fileContents),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
