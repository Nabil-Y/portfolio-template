import Image, { ImageProps } from "next/image";

const ResponsiveImage = (props: ImageProps) => (
  <Image alt={props.alt} layout="responsive" width={2} height={1} {...props} />
);

export const components = {
  Image: ResponsiveImage,
};
