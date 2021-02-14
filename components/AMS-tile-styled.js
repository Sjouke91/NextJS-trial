import styles from "../styles/ams.module.scss";
import Icon from "../icons/icon.svg";
import styled from "styled-components";

const Container = styled.section`
  margin: 20px 0;
  height: 25vh;
  width: 90vw;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 5px 0px rgba(228, 228, 228, 0.75);
`;

const Title = styled.h1`
  color: dodgerblue;
  font-weight: 600;
  margin-bottom: -10px;
`;

const Body = styled.p`
  font-weight: 200;
`;

const IconMobile = styled.section`
  margin: 0 60px;
  height: 7vw;
  width: 7vw;
`;

const Button = styled.button`
  height: 3.5em;
  width: 12vw;
  border: none;
  background-color: dodgerblue;
  border-radius: 12.5vh;
  color: white;
  margin: 0 60px;
  outline: none;

  :active {
    background-color: firebrick;
  }
`;

export default function AmsTile() {
  return (
    <Container>
      <IconMobile>
        <Icon />
      </IconMobile>
      <div>
        <Title>Give us a call</Title>
        <Body>
          Call +31 (0)20 709 3000. From Monday until Thursday between 9 AM and 5
          PM; Friday between 9 AM and 3 PM.
        </Body>
      </div>
      <Button>CALL NOW</Button>
    </Container>
  );
}
