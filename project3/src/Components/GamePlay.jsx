import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";

const GamePlay = () => {

  const [selectedNumber, setSelectedNumber] = useState();


  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore/>
        <NumberSelector/> 
        </div>
        <RollDice/>   
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display:flex;
        justify-content: space-between;
        align-items: end;
    } 
`