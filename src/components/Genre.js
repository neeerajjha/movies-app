import React, { useState, useEffect } from "react";
function Genre(props) {
  const [isLoaded, setLoaded] = useState(true);
  const [content, setContent] = useState([]);
  const sendGenre = (e) => {
    console.log("genre : " + e.target.textContent);
    props.setGlobalGenre(e.target.textContent);
  };

  useEffect(
    function () {
      (async function () {
        let response = await fetch(
          "https://react-backend101.herokuapp.com/genres"
        );
        response = await response.json();
        setLoaded(false);
        setContent(response);
      })();
    },

    []
  );
  return (
    <div className="Genre">
      <div
        className="
      mr-6 border-2 w-25 text-center h-10 font-bold"
        onClick={sendGenre}
      >
        All Genre
      </div>
      {isLoaded == true ? (
        <div className="font-bold"> Loading...</div>
      ) : (
        content.genres.map(function (genre) {
          return (
            <div
              key={genre._id}
              className="mr-6 border-2 w-40 text-center h-10 border-t-5 font-bold"
              onClick={sendGenre}
            >
              {genre.name}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Genre;
