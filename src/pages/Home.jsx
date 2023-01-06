import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const { getFirms } = useStockCalls();

  useEffect(() => {
    getFirms();
  }, []);
  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quibusdam
      doloremque dolorum cumque iusto repudiandae quisquam modi adipisci odio
      sapiente, autem delectus? Fugit amet voluptatibus minus libero! Assumenda
     
      porro alias unde cum quas animi, laboriosam sit enim! Beatae fugiat sint
    
    </div>
  );
};

export default Home;
