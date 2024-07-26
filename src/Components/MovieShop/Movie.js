import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailById, getMovieCreditById } from "./api";
import styled from "styled-components";

const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  margin: 20px;
  color: dodgerblue;
  text-align: center;
  position: relative;
`;
const Back = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
`;
const Img = styled.img`
  width: 100%;
`;
const Content = styled.div`
  font-size: 0.9rem;
  line-height: 30px;
`;

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
