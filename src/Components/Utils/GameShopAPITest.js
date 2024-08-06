import axios from "axios";
import { useEffect } from "react";

export function GameShopAPITest() {
  async function sendApi() {
    const url = "http://localhost:8080/api/products";
    try {
      const respone = await axios(url);
      console.log(respone.data);
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  useEffect(() => {
    sendApi();
  }, []);
  return (
    <>
      <h1>GameShopAPITest</h1>
    </>
  );
}
