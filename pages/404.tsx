import Link from "next/link";
import BaseContainer from "../components/Layouts/BaseContainer";
import { CustomMeta } from "../types/types";

const customMeta: Partial<CustomMeta> = {
  title: "Error",
  description: "Content not found",
};

const ErrorPage = () => {
  return (
    <BaseContainer {...customMeta}>
      <h1>Error 404</h1>
      <h2>Content not found</h2>
      <Link href="/">
        <a className="mt-8 text-lg underline">Go Home</a>
      </Link>
    </BaseContainer>
  );
};

export default ErrorPage;
