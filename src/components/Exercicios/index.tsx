import Ex1 from "./Ex1";
import Ex10 from "./Ex10";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Ex4 from "./Ex4";
import Ex5 from "./Ex5";
import Ex6 from "./Ex6";
import Ex7 from "./Ex7";
import UnaHeader from "../UnaHeader";

const Exercicios: React.FC = () => {
  return (
    <>
      <UnaHeader />
      <span>-------------------------------------------------------</span>
      <Ex1 />
      <span>-------------------------------------------------------</span>
      <Ex2 />
      <span>-------------------------------------------------------</span>
      <Ex3 />
      <span>-------------------------------------------------------</span>
      <Ex4 />
      <span>-------------------------------------------------------</span>
      <Ex5 />
      <span>-------------------------------------------------------</span>
      <Ex6 />
      <span>-------------------------------------------------------</span>
      <Ex7 />
      <span>-------------------------------------------------------</span>
      <Ex10 />
      <span>-------------------------------------------------------</span>
    </>
  )
}

export default Exercicios;