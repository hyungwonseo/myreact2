import { useContext, useEffect, useState } from "react";
import {
  getGenre,
  IMG_PATH,
  getMoviesNowPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
  setGenreListOfMovie,
} from "./api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieWrapper";

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
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  color: #333;
  margin: 2px 0;
`;
const Tab = styled.div`
  display: flex;
  margin: 10px 0;
`;
const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: dodgerblue;
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: blue;
  }
  &.active {
    background-color: darkblue;
  }
`;

const categories = [
  { category: "Now Playng", func: getMoviesNowPlaying },
  { category: "Popular", func: getMoviesPopular },
  { category: "Top Rated", func: getMoviesTopRated },
  { category: "Upcoming", func: getMoviesUpcoming },
];

export function MovieList() {
  const [data, setData] = useState(null);
  const { category, setCategory } = useContext(MovieContext);
  // useNavigate후크는 url주소를 매개변수로 갖는 페이지 변경 함수를 리턴함!
  const navigate = useNavigate();

  useEffect(() => {
    setGenreListOfMovie();
    getMovies(category);
  }, []);

  async function getMovies(index) {
    try {
      setCategory(index);
      const response = await categories[index].func();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <h1>Movie List</h1>
      <Tab>
        {categories.map((c, i) => (
          <Button
            key={i}
            onClick={() => getMovies(i)}
            className={i == category ? "active" : ""}
          >
            {c.category}
          </Button>
        ))}
      </Tab>
      <Container>
        {data &&
          data.results.map((movie) => (
            <Card
              key={movie.id}
              onClick={() => {
                navigate(`${movie.id}`);
              }}
            >
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>
                <b>타이틀</b> : {movie.title}
              </Text>
              <Text>
                <b>장르</b> : {getGenre(movie.genre_ids)}
              </Text>
              <hr />
              <Text>{movie.overview}</Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
