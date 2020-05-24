import React from "react";
import "tachyons";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba br2 b--light-green bg-lightest-blue"
        type="search"
        placeholder="search jobs"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
