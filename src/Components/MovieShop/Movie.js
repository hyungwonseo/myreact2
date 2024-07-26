import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailById, getMovieCreditById } from "./api";

export function Movie() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [credit, setCredit] = useState(null);

  useEffect(() => {
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    try {
      let response = await getMovieDetailById(id);
      console.log(response);
      setDetail(response.data);
      response = await getMovieCreditById(id);
      console.log(response);
      setCredit(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <h1>Movie : {id}</h1>
    </>
  );
}
