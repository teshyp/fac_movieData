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
const movieTile = document.getElementsByClassName("movie-tile");
// const moviePosters = document.getElementsByClassName("movie-poster");
// const movieTitle = document.getElementsByClassName("movie-title");
// const moviePlot = document.getElementsByClassName("movie-plot");
// const castContainer = document.getElementsByClassName("cast-div");
// const castList = document.getElementsByClassName("class-list");
// const castMember = document.getElementsByClassName("cast-member");
// const runtime = document.getElementsByClassName("runtime");
// const rating = document.getElementsByClassName("rating");

// add option to filter movies by rating or/and year
// allow user to add own movie

// loop through each prop and send to screen

function renderMovieData(movieData) {
  const movieKeys = Object.keys(movieData);
  const movieInfo = Object.entries(movieData);

  // for each key return values

  for (let i = 0; i < movieKeys.length; i++) {
    // step 1. return movie keys
    console.log(movieKeys[i]);
    // step 2. get key/value for movie info
    for (const [key, value] of Object.entries(movieInfo[1][1])) {
      console.log(key, value);
    }

    // step 3. render to dom - if there is no rating/year/runtime key then leave blank or put place holder in dom
  }
}
renderMovieData(movieData);
