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
      <p>{readingTime}</p>
      <div className="prose dark:prose-invert">{children}</div>
    </BaseContainer>
  );
};

export default PostLayout;
