import React from "react";
import SearchResultsItem from "./SearchResultsItem";

interface ItemShape {
  id: number;
  name?: string;
  title?: string;
  poster_path?: string | null;
}

interface Props {
  data: ItemShape[];
}

const SearchResultsContainer: React.FC<Props> = ({ data }) => {
  return (
    <div className="search-results-container">
      {data?.map((item) => (
        <SearchResultsItem {...item} />
      ))}
    </div>
  );
};

export default SearchResultsContainer;
