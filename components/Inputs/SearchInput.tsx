import { useId } from "react";
import { SearchInputProps } from "../../types/types";
import SearchIcon from "../UI/Icons/SearchIcon";

const SearchInput = (props: SearchInputProps) => {
  const { name, onChange, value } = props;
  const id = useId();

  return (
    <div className="relative flex items-center py-3">
      <label htmlFor={id} className="">
        <span className="sr-only">{name}</span>
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={onChange}
        name={name}
        placeholder="Search..."
        className="w-full rounded-lg border-2 border-grey  p-3 pr-12 caret-inherit"
      />
      <div className="absolute right-3 top-auto">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
