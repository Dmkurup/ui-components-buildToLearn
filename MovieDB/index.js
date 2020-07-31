const search = document.getElementById("search");
const container = document.querySelector(".container");
const tableData = document.querySelector(".tableData");

let movies;
const getMovies = async () => {
  const response = await fetch("movies.json");
   movies = await response.json();
  createTable(movies);
};
console.log(getMovies());

const createTable =(movies) =>{
  //extract column headings
  let col = [];
  for (let i = 0; i < movies.length; i++) {
    for (let key in movies[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  let table = document.createElement("table");
  table.setAttribute("id","myTable");
  let tr = table.insertRow(-1);
  tr.setAttribute("class","header");

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = col[i].toUpperCase();
    tr.appendChild(th);
  }
  for (let i = 0; i < movies.length; i++) {
    tr = table.insertRow(-1);
    for (let j = 0; j < col.length; j++) {
      let tableCell = tr.insertCell(-1);
      tableCell.innerHTML = movies[i][col[j]];
    }
  }
  tableData.innerHTML = "";
  tableData.appendChild(table);
}

search.addEventListener("input", () => showMovies(search.value));

const showMovies = (searchText) => {
//     let matches =searchText.length ===0 ? []: movies.filter((movie) => {
//     const regex = new RegExp(`^${searchText}`,'gi');
//     return movie.title.match(regex) || movie.rating.match(regex)||movie.year.match(regex);
//   });
//   createTable(matches);
//   ;
 
  const searchTerm = searchText.toLowerCase();
  const regex = new RegExp(`^${searchTerm}`,'gi');
  const movieRows = tableData.getElementsByTagName('tr');
  const movieArr= Array.from(movieRows);
  for(let i=0;i<movieRows.length;i++){
     let tds= movieRows[i].getElementsByTagName("td");
     for(let j=0;j<tds.length;j++){
         let txtVal = tds[j].textContent.toLowerCase();
         console.log(txtVal);
         if(txtVal){
             if(txtVal.match(regex)){
                 movieRows[i].style.display="";
             }else{
                 movieRows[i].style.display="none";
             }
         }
     }
 }
      
  }

 
