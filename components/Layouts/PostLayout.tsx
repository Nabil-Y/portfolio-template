import BaseContainer from "./BaseContainer";
import { PostLayoutProps } from "../../types/types";

const PostLayout = (props: PostLayoutProps) => {
  const { title, description, image, date, children, readingTime } = props;

  return (
    <BaseContainer
      title={`${title} – Nabil Yassine`}
      description={description}
      image={image}
      date={new Date(date).toLocaleDateString()}
      type="article"
    >
      <div className="flex justify-between text-greyDark dark:text-grey">
        <div>Nabil-Y / {date}</div> <div>{readingTime}</div>
      </div>
      <div className="prose pt-10 dark:prose-invert">{children}</div>
    </BaseContainer>
  );
};

export default PostLayout;
