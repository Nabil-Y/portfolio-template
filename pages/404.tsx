import Link from "next/link";
import BaseContainer from "../components/Layouts/BaseContainer";

const ErrorPage = () => {
  return (
    <BaseContainer>
      <h1>Error 404</h1>
      <h2>Content not found</h2>
      <div className="mt-8 text-lg underline">
        <Link href="/">Go Home</Link>
      </div>
    </BaseContainer>
  );
};

export default ErrorPage;
