import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 bg-black text-white">
      <h1 className="text-3xl py-5">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <Moviecard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
