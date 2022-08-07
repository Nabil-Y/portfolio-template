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
        <a className="hover:text-primary" href="https://github.com/Nabil-Y">
          GitHub
        </a>
        ,{" "}
        <a className="hover:text-primary" href="https://twitter.com/nabil_io">
          Twitter
        </a>{" "}
        or{" "}
        <a
          className="hover:text-primary"
          href="https://www.linkedin.com/in/nabil-yassine-0a5262226/"
        >
          Linkedin
        </a>
      </div>
    </>
  );
};

export default Presentation;
