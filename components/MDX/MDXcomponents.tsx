import Image from "next/image";

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" width={2} height={1} {...props} />
);

export const components = {
  Image: ResponsiveImage,
};
