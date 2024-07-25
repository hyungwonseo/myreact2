import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
`;
const Icon = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-top: 20px;
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;
const Temp = styled.div`
  margin-top: 20px;
  font-size: 5rem;
  i {
    font-size: 3.5rem;
  }
`;
const City = styled.div`
  font-size: 2.5rem;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`;

export function OpenWeather() {
  const API_KEY = "0f9dadad923c3b8044765233ab93226e";
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoOK, geoError);
  }, []); // 최초 1회만

  // Async~await방식의 비동기 코드는 반드시 함수안에서 실행되어야 하고
  // 함수선언문 앞에 asycn 키워드가 필요함!
  async function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // 1. Axios 사용법(Async~await)
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setCity(data.name);
      setTemp(parseInt(data.main.temp));
      setIcon(data.weather[0].icon);
      setWeather(data.weather[0].main);
    } catch (error) {
      console.log("요청이 실패했습니다.", error);
    }

    // 2. Axios 사용법(Promise~then)
    // axios
    //   .get(url)
    //   .then((response) => {
    //     const data = response.data;
    //     console.log(data);
    //     setCity(data.name);
    //     setTemp(parseInt(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //     setWeather(data.weather[0].main);
    //   })
    //   .catch((error) => {
    //     console.log("요청이 실패했습니다.", error);
    //   });

    // 3. fetch 사용법
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCity(data.name);
    //     setTemp(parseInt(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //     setWeather(data.weather[0].main);
    //   })
    //   .catch((error) => {
    //     console.log("요청이 실패했습니다.", error);
    //   });
  }
  function geoError() {
    alert("현재 위치정보를 찾을 수 없습니다.");
  }

  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
      </Container>
    </>
  );
}
