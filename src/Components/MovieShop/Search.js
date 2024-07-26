import styled from "styled-components";
import { useState } from "react";
import { IMG_PATH } from "./api";

const SearchBox = styled.div``;
const Input = styled.input`
  width: 500px;
  margin-right: 5px;
`;
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
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

export function Search() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);

  return (
    <>
      <SearchBox>
        <Input
          placeholder="검색어를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            //setInputValue("");
          }}
        >
          Search
        </button>
      </SearchBox>
      <h3></h3>
      <Container>
        {data &&
          data.results.map((movie) => (
            <Card key={movie.id} onClick={() => {}}>
              <Img src={IMG_PATH}></Img>
              <Text>
                <b>타이틀</b> :
              </Text>
              <Text>
                <b>장르</b> :
              </Text>
              <hr />
              <Text></Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
