import { ButtonProps } from "../../types/types";

const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-greyLight p-2 hover:bg-grey dark:bg-greyDark dark:hover:bg-grey"
    >
      {children}
    </button>
  );
};

export default Button;
