import React from 'react'

function Pagination(props) {
  let { totalpagesWaliMovies, moviesCount, cPage, setcPage } = props;

  let pagesArr = [];
  if (totalpagesWaliMovies) {
    let noOfPages = Math.ceil(totalpagesWaliMovies.length / moviesCount);
    for (let i = 1; i <= noOfPages; i++) {
      pagesArr.push(i);
    }
  }
  return (
    <>
      {pagesArr.map(function (pageNumber) {
        let css = pageNumber == cPage ?
          "hover:bg-blue-500  border-2 py-2 px-3 rounded bg-blue-500 text-white" :
          "hover:bg-blue-500  border-2 py-2 px-3 rounded ";
        return (<button className={css} key={pageNumber}
          onClick={() => {
            setcPage(pageNumber)
          }}
        >{pageNumber}</button>)
      })}
    </>


  )
}

export default Pagination