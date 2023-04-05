import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  // console.log("render");
  //내가 state를 변경할 때 모든 코드들은 항상 다시 실행된다. 콘솔에 렌더가 여러번 찍히는것처럶.
  //useEffect : 두개의 argument 를 가지는 function이다. 첫번째 argument는 우리가 딱 한번만 실행하고픈 코드
  console.log("i run all");
  // const iRunOnce = () => {
  //   console.log("one");
  // };
  useEffect(() => console.log("call the API"), []);
  return (
    <div>
      <h1 className={styles.title}>{counter}!!</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"btn"} />
    </div>
  );
}

export default App;
