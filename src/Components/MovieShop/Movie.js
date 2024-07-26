import { useParams } from "react-router-dom";

export function Movie() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h1>Movie : {id}</h1>
    </>
  );
}
