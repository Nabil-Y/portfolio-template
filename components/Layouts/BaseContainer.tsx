import Head from "next/head";
import { useState } from "react";
import { BaseContainerProps } from "../../types/types";
import Header from "./Header/Header";

const BaseContainer = (props: BaseContainerProps) => {
  const { children, ...customMeta } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const meta = {
    title: "My name - Web Developer",
    description:
      "Web Developer, JavaScript enthusiast, I talk about the web and development",
    image: "/static/icon.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="author" content="My Name" />
        <meta property="type" content={meta.type} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <meta property="og:site_name" content="My Name" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:description" content={meta.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mytwittername" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Header menuState={{ isMenuOpen, setIsMenuOpen }} />
      <main id="skipNav" className={isMenuOpen ? "hidden" : ""}>
        {children}
      </main>
    </>
  );
};

export default BaseContainer;
