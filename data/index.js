const marvelMovies = [
  {
    Title: "Iron Man",
    Year: "2008",
    imdbID: "tt0371746",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  },
  {
    Title: "The Incredible Hulk",
    Year: "2008",
    imdbID: "tt0800080",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Man 2",
    Year: "2010",
    imdbID: "tt1228705",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Thor",
    Year: "2011",
    imdbID: "tt0800369",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Captain America: The First Avenger",
    Year: "2011",
    imdbID: "tt0458339",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Iron Man 3",
    Year: "2013",
    imdbID: "tt1300854",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Thor: The Dark World",
    Year: "2013",
    imdbID: "tt1981115",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
  },
  {
    Title: "Captain America: The Winter Soldier",
    Year: "2014",
    imdbID: "tt1843866",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg",
  },
  {
    Title: "Guardians of the Galaxy",
    Year: "2014",
    imdbID: "tt2015381",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Ant-Man",
    Year: "2015",
    imdbID: "tt0478970",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
  },
  {
    Title: "Captain America: Civil War",
    Year: "2016",
    imdbID: "tt3498820",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
  },
  {
    Title: "Doctor Strange",
    Year: "2016",
    imdbID: "tt1211837",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
  },
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    imdbID: "tt3896198",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    Title: "Spider-Man: Homecoming",
    Year: "2017",
    imdbID: "tt2250912",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
  },
  {
    Title: "Thor: Ragnarok",
    Year: "2017",
    imdbID: "tt3501632",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
  },
  {
    Title: "Black Panther",
    Year: "2018",
    imdbID: "tt1825683",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Ant-Man and the Wasp",
    Year: "2018",
    imdbID: "tt5095030",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Captain Marvel",
    Year: "2019",
    imdbID: "tt4154664",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
  {
    Title: "Spider-Man: Far from Home",
    Year: "2019",
    imdbID: "tt6320628",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
  },
  {
    Title: "Black Widow",
    Year: "2021",
    imdbID: "tt3480822",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Shang-Chi and the Legend of the Ten Rings",
    Year: "2021",
    imdbID: "tt9376612",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Eternals",
    Year: "2021",
    imdbID: "tt9032400",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y1ODBhYTItYmJiZi00NjU2LWI2NjktNTcwM2U2NGQ2ZTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Spider-Man: No Way Home",
    Year: "2021",
    imdbID: "tt10872600",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
  },
  {
    Title: "Doctor Strange in the Multiverse of Madness",
    Year: "2022",
    imdbID: "tt9419884",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",
  },
  {
    Title: "Thor: Love and Thunder",
    Year: "2022",
    imdbID: "tt10648342",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Black Panther: Wakanda Forever",
    Year: "2022",
    imdbID: "tt9114286",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2FlN2U2NzMtOWE2Ni00MWIyLTk3YzQtM2RjNDFkNTlhYTZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
  },
];
