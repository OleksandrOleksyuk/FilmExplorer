import { useEffect, useState } from "react";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=f4aa67c5";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMovies("The Dark Knight");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="mb-5 text-5xl font-bold text-orange-700">FilmExplorer</h1>
      <div className="my-3 flex w-full items-center justify-center rounded-full p-1 shadow-lg shadow-orange-700 md:w-8/12 md:p-6">
        <input
          className="active:bg-red/500 flex-1 border-none pl-4 text-2xl font-medium text-orange-900"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="animate rounded-full bg-orange-500 p-4">
          <img
            className="h-6 w-6 cursor-pointer sm:h-10 sm:w-10"
            src={SearchIcon}
            alt="searchIcon"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="mt-12 flex w-full flex-wrap items-center justify-center">
          {movies.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex w-full items-center justify-center">
          <h2 className="text-2xl font-medium text-red-600">No Movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
