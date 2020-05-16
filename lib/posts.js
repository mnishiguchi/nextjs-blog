import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "posts");

const getPostFileNames = () => fs.readdirSync(POSTS_DIR);
const idFromFileName = (fileName) => fileName.replace(/\.md$/, "");
const readMarkdownFile = (fileName) => fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");

export function getPostsData() {
  const postsData = getPostFileNames().map((fileName) => {
    const { data } = matter(readMarkdownFile(fileName));
    return {
      id: idFromFileName(fileName),
      ...data,
    };
  });

  // Sort posts by date
  return postsData.sort((a, b) => (a.date < b.date ? 1 : -1));
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

export async function getPostData(id) {
  const { content, data } = matter(readMarkdownFile(`${id}.md`));
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...data,
  };
}
