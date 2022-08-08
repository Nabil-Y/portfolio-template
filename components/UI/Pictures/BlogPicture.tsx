import Image from "next/image";

const BlogPicture = () => {
  return (
    <Image
      src="/static/blog-img.png"
      layout="responsive"
      width={5}
      height={2}
      alt=""
      aria-hidden="true"
    />
  );
};

export default BlogPicture;
