import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "../UI/ThemeSwitch";

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" width={2} height={1} {...props} />
);

export const components = {
  Image: ResponsiveImage,
  Link: Link,
  ThemeSwitch,
};
