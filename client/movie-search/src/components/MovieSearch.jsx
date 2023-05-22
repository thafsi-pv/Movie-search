import "../components/MovieSearch.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./searchbar/SearchBar";
import Layout from "./layout/Layout";
//import { IMG_URL, TMDB_SEARCH_API } from "../../Constants/constants";

const MovieSearch = () => {
  const [localSearchTxt, setLocalSearchTxt] = useState("");
  const [tmdbSearchTxt, setTmdbSearchTxt] = useState("");

  //const [dataList] = useState(searchdata);
  //const [filterData, setFilterData] = useState(searchdata);
  const [imdbdata, setImdbData] = useState([{}]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("useEffect run....");
      getMovieList(tmdbSearchTxt);
    }, 300);
    return () => {
      console.log("retun exicuted");
      clearTimeout(timeout);
    };
    //getImdbData("malayalam");
  }, [tmdbSearchTxt]);

  const getMovieList = async (txt) => {
    const data = await axios("http://localhost:3006/api/movies", {
      params: { query: txt },
    });
    setImdbData(data?.data);
  };

  const handleTmdbSearch = (event) => {
    let txt = event.target.value;
    setTmdbSearchTxt(event.target.value);
  };

  const handleTmdbClearBtn = () => {
    setTmdbSearchTxt("");
  };

  return (
    <>
      <Layout>
        <div className="scontainer">
          <div className="serch-container">
            <SearchBar
              data={imdbdata}
              handleSearchBar={handleTmdbSearch}
              searchTxt={tmdbSearchTxt}
              handleClearBtn={handleTmdbClearBtn}
              placeholder={"Search movie with name"}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MovieSearch;
