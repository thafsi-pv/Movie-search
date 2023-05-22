import { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";
import SearchList from "../searchlist/SearchList";

const SearchBar = ({
  data,
  handleSearchBar,
  searchTxt,
  handleClearBtn,
  placeholder,
}) => {
  return (
    <div className="local-search">
      <div className="input-div">
        <input
          type="text"
          name=""
          placeholder={placeholder}
          id=""
          value={searchTxt}
          onChange={handleSearchBar}
        />
        {searchTxt && (
          <MdClear className="clear-btn" onClick={handleClearBtn} />
        )}
      </div>
      <div className="search-reco">
        {data.length !== 0 ? (
          data?.map((item) => {
            return (
              <SearchList
                key={item.id}
                id={item.id}
                img={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                title={item.title}
                originaltitle={item.Name}
                vote_average={item.vote_average}
              />
            );
          })
        ) : (
          <p>No movies found!...</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
