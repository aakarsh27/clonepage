import styled from "styled-components";

const Container = styled.div`
    max-width: 1180px;
`;

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
`

const StartGame = () => {
  return (
    <Container>
        <img src="/images/dices.png" alt="dices"/>
        <div>
            <h1>DICE GAME</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
    
  )
}

export default StartGame