import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

export async function mdxToHtml(source: string) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
      format: "mdx",
    },
  });

  return {
    html: mdxSource,
    readingTime: readingTime(source).text,
  };
}
