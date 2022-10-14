let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
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

// add option to filter movies by rating or/and year
// allow user to add own movie

// loop through each prop and send to screen

function retrieveData(movieData) {
  const movieKeys = Object.keys(movieData);
  // Returns object as array with 2 elements each
  const movieInfo = Object.entries(movieData);
  console.log(movieInfo);

  for (let i = 0; i < movieKeys.length; i++) {
    const title = movieKeys[i];
    const plot = movieInfo[i][1].hasOwnProperty("plot")
      ? movieInfo[i][1].plot
      : `Plot TBC`;

    const runtime = movieInfo[i][1].hasOwnProperty("runtime")
      ? movieInfo[i][1].runtime
      : `runtime TBC`;

    const rating = movieInfo[i][1].hasOwnProperty("rating")
      ? movieInfo[i][1].rating
      : `rating TBC`;

    const year = movieInfo[i][1].hasOwnProperty("year")
      ? movieInfo[i][1].year
      : `year TBC`;

    const cast = movieInfo[i][1].hasOwnProperty("cast")
      ? movieInfo[i][1].cast
      : `cast TBC`;

    renderData(title, plot, runtime, year, rating, cast);
  }
}

// Create a renderData function

function renderData(title, plot, runtime, year, rating, cast) {
  const movieTile = document.createElement("div");
  movieTile.classList.add("movie-tile");
  //   const movieYear = document.createElement("p");
  //   movieYear.classList.add("")
  const moviePoster = document.createElement("div");
  moviePoster.classList.add("movie-poster");
  const movieTitle = document.createElement("h3");
  movieTitle.classList.add("movie-title");
  const movieYear = document.createElement("span");
  movieYear.classList.add("movie-year");
  const moviePlot = document.createElement("p");
  moviePlot.classList.add("movie-plot");
  const movieRuntime = document.createElement("p");
  movieRuntime.classList.add("runtime");
  const movieRating = document.createElement("p");
  movieRating.classList.add("rating");
  const castContainerUl = document.createElement("ul");
  castContainerUl.classList.add("cast-list");

  // for each cast member > create li element and append cast
  movieTitle.textContent = title;
  movieYear.textContent = year;
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

// Create a updateData function

retrieveData(movieData);
