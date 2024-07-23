import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    font-size: 2rem;
    margin: 10px;
  }
`;

export function CounterState() {
  console.log("CounterState start.");
  //let count = 0;
  const [count, setCount] = useState(0);

  function minus() {
    //count = count - 1;
    setCount(count - 1);
    console.log("minus", count);
  }
  function plus() {
    //count = count + 1;
    setCount(count + 1);
    console.log("plus", count);
  }
  console.log("CounterState end.", count);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]); //매개변수1은 콜백함수, 매개변수2는 상태 의존성배열
  useEffect(() => {
    // 빈 의존성배열의 의미는 컴포넌트가 처음 로드될때 딱 한번만 호출된다는 의미!
    // 각종 이벤트 콜백함수를 등록하는데 사용됨
  }, []);

  return (
    <>
      <Container>
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </Container>
    </>
  );
}
