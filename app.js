let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2000,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

const galleryContainer = document.getElementById("movie-gallery-container");

// Function to: check data validity

function returnState(movieData) {
  clearGallery();
  let yearFilterOptions = [];
  const movieKeys = Object.keys(movieData);
  // Returns object as array with 2 elements each
  const movieInfo = Object.entries(movieData);

  for (let i = 0; i < movieKeys.length; i++) {
    const title = movieKeys[i];
    const plot = movieInfo[i][1].hasOwnProperty("plot")
      ? movieInfo[i][1].plot
      : `Plot unknown`;

    const runtime = movieInfo[i][1].hasOwnProperty("runtime")
      ? movieInfo[i][1].runtime
      : `Runtime unknown`;

    const rating = movieInfo[i][1].hasOwnProperty("rating")
      ? movieInfo[i][1].rating
      : `Rating unknown`;

    const year = movieInfo[i][1].hasOwnProperty("year")
      ? movieInfo[i][1].year
      : `Year unknown`;

    const cast = movieInfo[i][1].hasOwnProperty("cast")
      ? movieInfo[i][1].cast
      : `Cast unknown`;

    yearFilterOptions.push(movieInfo[i][1].year);

    renderData(title, plot, runtime, year, rating, cast, movieKeys);
  }

  createFilter(yearFilterOptions, movieInfo, movieKeys);
}

// Function to: dynamically create elements and render to display screen

function renderData(title, plot, runtime, year, rating, cast) {
  const movieTile = document.createElement("div");
  const moviePoster = document.createElement("div");
  const movieTitle = document.createElement("h3");
  const movieYear = document.createElement("span");
  const moviePlot = document.createElement("p");
  const movieRuntime = document.createElement("p");
  const movieRating = document.createElement("p");
  const castContainerUl = document.createElement("ul");

  movieTile.classList.add("movie-tile");
  moviePoster.classList.add("movie-poster");
  movieTitle.classList.add("movie-title");
  movieYear.classList.add("movie-year");
  moviePlot.classList.add("movie-plot");
  movieRuntime.classList.add("runtime");
  movieRating.classList.add("rating");
  castContainerUl.classList.add("cast-list");

  movieTitle.textContent = title;
  movieYear.textContent = year;
  moviePoster.textContent = "Poster placeholder";
  moviePlot.textContent = plot;
  movieRuntime.textContent = runtime;
  movieRating.textContent = rating;

  let castList = [];

  for (let i = 0; i < cast.length; i++) {
    const castLi = document.createElement("li");
    castLi.classList.add("cast-member");
    castLi.textContent = cast[i];
    castContainerUl.append(castLi);
    castList.push(cast[i]);
  }

  movieTile.appendChild(moviePoster);
  movieTile.appendChild(movieTitle);
  movieTile.appendChild(movieYear);
  movieTile.appendChild(moviePlot);
  movieTile.appendChild(movieRuntime);
  movieTile.appendChild(movieRating);
  movieTile.appendChild(movieRating);
  movieTile.appendChild(castContainerUl);
  galleryContainer.appendChild(movieTile);
}

// Filter movies by year and return data
// function filterMovieByYears(movieData, filterYear, movieKeys) {
//   const movieInfo = Object.entries(movieData);
//   let filteredMovies = [];

//   for (let i = 0; i < movieKeys.length; i++) {
//     const year = movieInfo[i][1].hasOwnProperty("year")
//       ? movieInfo[i][1].year
//       : `Year unknown`;

//     if (year === filterYear) {
//       filteredMovies.push(movieInfo[i]);
//     }
//   }

//   returnState(filteredMovies, movieKeys);
// }

// Function to: dynamically create drop down filter and render to display
function createFilter(yearFilterOptions, movieInfo, movieKeys) {
  const filterOptions = yearFilterOptions;

  const label = document.createElement("label");
  label.innerHTML = "Filter movies by year";
  label.htmlFor = "yearOptions";
  label.id = "yearsFilter";

  const select = document.createElement("select");
  select.name = "yearOptions";
  select.id = "yearOptions";

  for (let i = 0; i < filterOptions.length; i++) {
    let yearChoice = document.createElement("option");
    yearChoice.classList.add("yearOpt");
    yearChoice.setAttribute(`data-year`, `${yearChoice.value}`);
    yearChoice.value = filterOptions[i];
    yearChoice.text = filterOptions[i];
    select.appendChild(yearChoice);
  }

  select.addEventListener("change", function () {
    const filteredYear = event.target.value;
    let filteredState = [];

    // Loop to filter through objects to find all movies from the chosen year
    for (let i = 0; i < movieKeys.length; i++) {
      if (filteredYear == movieInfo[i][1].year) {
        filteredState[`${movieKeys[i]}`] = movieInfo[i][1];
      }
    }

    const seeAllBtn = document.createElement("button");
    seeAllBtn.innerHTML = "Back to all movies";
    seeAllBtn.id = "seeAllBtn";

    // Render filtered movies from chosen year
    returnState(filteredState);

    if (yearsFilter) yearsFilter.remove();

    seeAllBtn.addEventListener("click", () => returnState(movieData));

    galleryContainer.appendChild(seeAllBtn);
  });

  galleryContainer.appendChild(label).appendChild(select);
}

function clearGallery() {
  galleryContainer.innerHTML = "";
}

returnState(movieData);

const formSubmitBtn = document.getElementById("btn-submit");

const inputTitle = document.getElementById("input-title");
const inputYear = document.getElementById("input-year");
const inputPlot = document.getElementById("input-plot");
const inputRuntime = document.getElementById("input-runtime");
const inputRating = document.getElementById("input-runtime");
const inputCast = document.getElementsByClassName("input-cast");

const addMovieToLibrary = function (
  movieData,
  inputTitle,
  inputYear,
  inputPlot,
  inputRuntime,
  inputRating,
  inputCast
) {
  console.log("test working");
  const castArray = [inputCast];

  for (let i = 0; i < inputCast.length; i++) {
    castArray.push(inputCast[i].value);
  }

  let checkedTitle = inputTitle.value;
  let checkedYear = inputYear.value;
  let checkedPlot = inputPlot.value;
  let checkedRuntime = inputRuntime.value;
  let checkedRating = inputRating.value;

  movieData[checkedTitle] = {
    cast: castArray,
    plot: checkedPlot,
    rating: checkedRating,
    runtime: checkedRuntime,
    year: checkedYear,
  };

  returnState(movieData);
};

formSubmitBtn.addEventListener("click", () =>
  addMovieToLibrary(
    movieData,
    inputTitle,
    inputYear,
    inputPlot,
    inputRuntime,
    inputRating,
    inputCast
  )
);
