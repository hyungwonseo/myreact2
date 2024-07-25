import { useEffect } from "react";
import { getMoviesNowPlaying } from "./api";

export function MovieList() {
  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await getMoviesNowPlaying();
      console.log(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <h1>Movie List</h1>
    </>
  );
}
