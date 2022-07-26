import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable';
import Pagination from "./Pagination";
import { useEffect } from 'react';

function Movies(props) {
  let { cPage, setcPage } = props;

  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(9);
 
  const [content, setContent] = React.useState([]);
  const [isLoaded, setLoaded] = React.useState(true);

  useEffect(function () {
    async function fn() {
      let response = await fetch('https://react-backend101.herokuapp.com/movies');
      response = await response.json();
      setLoaded(false);
      setContent(response);
    }
    fn();
  }, []);
  const setGlobalSearchText = (searchText) => {
    console.log("movies : " + searchText);
    setSearchText(searchText);
    setcPage(1);
  }
  const setGlobalCount = (moviesCount) => {
    console.log("movies : " + moviesCount);
    setCount(moviesCount);
    setcPage(1);
  }
  let filteredContent;
  let totalpagesWaliMovies;
  if (content.movies) {
    filteredContent = content.movies;
    if (props.searchText != "") {
      filteredContent = content.movies.filter((movie) => {
        let lowerCaseTitle = movie.title.toLowerCase();
        let lowercaseSearchText = searchText.toLowerCase();
        return lowerCaseTitle.includes(lowercaseSearchText);
      });

    }
    if (props.cGenre != "") {
      filteredContent = filteredContent.filter(
        function (movie) {

          console.log("movies table ", movie.genre.name);
          return movie.genre.name.trim() == props.cGenre.trim();
        })
      console.log("movies table ", filteredContent)
    }

    totalpagesWaliMovies = filteredContent;
    let sidx = (cPage - 1) * moviesCount;
    let eidx = sidx + moviesCount;
    filteredContent = filteredContent.slice(sidx, eidx);
  }

  return (<div >
    <InputBox setGlobalSearchText
      ={setGlobalSearchText}
      setGlobalCount
      ={setGlobalCount}
    ></InputBox>
    <MoviesTable searchText={searchText}
      filteredContent={filteredContent}
      cGenre={props.cGenre}
      content={content}
      isLoaded={isLoaded}
      setContent={setContent}
      cPage={cPage}
    ></MoviesTable>

    <Pagination
      moviesCount={moviesCount}
      totalpagesWaliMovies={totalpagesWaliMovies}
      cPage={cPage}
      setcPage={setcPage}
    ></Pagination>
  </div>
  )
}
export default Movies;