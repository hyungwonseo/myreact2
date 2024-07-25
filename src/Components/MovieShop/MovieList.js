import { useEffect, useState } from "react";
import { getMoviesNowPlaying, getGenre, IMG_PATH } from "./api";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div``;

export function MovieList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await getMoviesNowPlaying();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <h1>Movie List</h1>
      <Container>
        {data &&
          data.results.map((movie) => (
            <Card key={movie.id}>
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {getGenre(movie.genre_ids)}</Text>
              <Text>소개글 : {movie.overview}</Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
