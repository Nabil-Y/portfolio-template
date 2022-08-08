import Image from "next/image";

const ProjectsPicture = () => {
  return (
    <Image
      src="/static/projects-img.png"
      layout="responsive"
      width={5}
      height={2}
      alt=""
      aria-hidden="true"
    />
  );
};

export default ProjectsPicture;
