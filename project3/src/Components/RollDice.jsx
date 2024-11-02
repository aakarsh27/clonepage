import styled from "styled-components"
import { useState } from "react";
const RollDice = () => {


    const [cuurentDice, setCurrentDice] = useState(1);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }


    const RollDice = () =>{
        const RandomNumber = generateRandomNumber(1, 7);
        setCurrentDice(RandomNumber);
    }


  return (
    <DiceContainer>
        <div className="dice" onClick={RollDice}>
            <img src={`/images/dice/dice_${cuurentDice}.png`} alt="dice"/>
        </div>
        <p>Click on the dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice


const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
    `