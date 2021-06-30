import React from "react";
import styled from "styled-components";

const myHeroScreen = () => {
  return (
    <div>
      <Container>
        <Hero
          src="/videos/video4.mp4"
          type="video/mp4"
          autoPlay={true}
          loop={true}
          muted
        />
        <Wrapper>
          <Info> Know Us Better </Info>
          <Info1> The loop attribute is boolean </Info1>
          <Button>
            <Button1> Sign Up </Button1>
            <Button2> Know More </Button2>
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default myHeroScreen;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  //background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  margin-top: 10px;
`;

const Hero = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Wrapper = styled.div`
  position: absolute;
  color: white;
  margin-top: -200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Info = styled.div`
  color: white;
  font-size: 55px;
  font-weight: bold;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const Info1 = styled.div`
  color: white;
  font-size: 22px;
  letter-spacing: 0.3px;
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const Button = styled.div`
  color: white;
  margin-top: 0px;
  padding-top: 20px;
  display: flex;
  width: 25rem;
  justify-content: space-between;
  align-items: center;
`;

const Button1 = styled.div`
  display: flex;
  width: 12rem;
  justify-content: center;
  color: black;
  align-items: center;
  border-radius: 5px;
  background-color: green;
  height: 45px;
  text-tranform: uppercase;
  font-weight: bold;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
    backgroung-color: #f69928;
    color: white;
  }
`;

const Button2 = styled.div`
  display: flex;
  width: 12rem;
  height: 45px;
  justify-content: center;
  color: black;
  align-items: center;
  border-radius: 5px;
  background-color: green;
  text-tranform: uppercase;
  font-weight: bold;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
    backgroung-color: #f69928;
    color: white;
  }
`;

// const MainFooter = styled.div`
//   width: 100%;
//   height: 50%;
//   display: flex;
//   justify-content: center;
//   color: white;
//   background-color: #13177e;
//   margin-top: 20px;
//   padding-top: 10px;
//   padding-bottom: 20px;
// `;

// const Footer = styled.div`
//   position: absolute;
//   color: white;
//   margin-top: -200px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Bottom = styled.div`
//   width: 100%;
//   height: 50%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background: #fe9901;
//   color: white;

//   img {
//     height: 50px;
//   }
// `;
