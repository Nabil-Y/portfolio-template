const Tag = (props: { content: string }) => {
  const { content } = props;
  return (
    <div className="mr-2 mb-2 inline-block rounded-lg bg-greyLight py-1 px-2 text-xs dark:bg-greyDark sm:text-sm">
      {content}
    </div>
  );
};

export default Tag;
