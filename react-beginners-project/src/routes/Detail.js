import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  // console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  });
  return <h1>Detail</h1>;
}
export default Detail;
//useParam 은 리액트 라우터에서 제공하는 함수.
//이 함수를 사용하면 react router는 Route path의 변수값을 넘겨준다.
