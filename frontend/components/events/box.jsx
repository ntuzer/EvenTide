import React from 'react';

const Box = ({ event, bookmark, removeBookmark, createBookmark }) => {

  return (
    <div className="search-box">
      <h1 className="abcdef">Find your next experience</h1>
      <div className="search-bar">
        <div className="search-bar-left"></div>
        <div className="search-bar-right">Search</div>
      </div>
    </div>
  );
};

export default Box;
