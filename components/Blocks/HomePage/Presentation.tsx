const Presentation = () => {
  return (
    <>
      <h2 className="pb-2">Frontend developer</h2>
      <p className=" max-w-sm pb-3 text-greyDark dark:text-grey">
        I want to create web apps with clean code. I talk about web dev, mostly
        JavaScript and React.
      </p>
      <div>
        Contact me on{" "}
        <a href="https://github.com/" className="underline">
          GitHub
        </a>
        {", "}
        <a href="https://twitter.com/" className="underline">
          Twitter
        </a>
        {" or "}
        <a href="https://www.linkedin.com/" className="underline">
          Linkedin
        </a>
      </div>
    </>
  );
};

export default Presentation;
