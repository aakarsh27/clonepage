import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const GamePlay = () => {
  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore/>
        <NumberSelector/> 
        </div>   
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
    .top_section{
        display:flex;
        justify-content: space-between;
        align-items: end;
    }
`