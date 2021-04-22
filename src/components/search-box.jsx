import React, { useState } from "react";

function SearchBox({ onSearch, isLoading }) {
  const [text, setText] = useState("");
  const clickHandler = (e) => {
    if (text.length > 0) {
      e.preventDefault();
      onSearch(text);
    }
  };
  return (
    <>
      <div className="col-md-7 offset-md-0 mt-2 border border-success pt-2 mb-2">
        <div className="input-group mb-2">
          <input type="text" 
          class="form-control" 
          placeholder="Search any public repo here..." 
          value={text}
           onChange={(e) => setText(e.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text"
            onClick={clickHandler}
            disabled={!text.length && !isLoading}
            >Search</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
