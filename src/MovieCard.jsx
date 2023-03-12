import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative m-6 h-full w-80 overflow-hidden rounded-xl border-none shadow-lg shadow-orange-700">
      <div className="">
        <img
          className="h-[450px] w-full object-cover"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-end bg-gradient-to-b from-transparent to-slate-900  p-5">
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-orange-500">
            {movie.Title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="font-bold uppercase text-orange-300">{movie.Type}</p>
            <p className="font-semibold text-orange-300">{movie.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
