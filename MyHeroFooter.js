import React, { Fragment } from 'react';
import style from 'style-component';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';

let date = new Date().getFullYear();
console.log(date);

const myHeroFooter = () => {
    return (
      <Fragment>
       <Container>
           <Wrapper>
               <span>About Us</span>

               <Lead1>How it works</Lead1>
               <Lead2>Testimonials</Lead2>
               <Lead3>Careers</Lead3>
               <Lead4>Investors</Lead4>
               <Lead5>Terms of service</Lead5>
            </Wrapper>

           <Wrapper>
               <span>Contact Us</span>

               <Lead1>How it works</Lead1>
               <Lead2>Testimonials</Lead2>
               <Lead3>Careers</Lead3>
               <Lead4>Investors</Lead4>
               <Lead5>Terms of service</Lead5>
           </Wrapper>
           <Wrapper>
               <span>Video</span>

               <Lead1>How it works</Lead1>
               <Lead2>Testimonials</Lead2>
               <Lead3>Careers</Lead3>
               <Lead4>Investors</Lead4>
               <Lead5>Terms of service</Lead5>
           </Wrapper>
           <Wrapper>
               <span>Social Media</span>

               <Lead1>How it works</Lead1>
               <Lead2>Testimonials</Lead2>
               <Lead3>Careers</Lead3>
               <Lead4>Investors</Lead4>
               <Lead5>Terms of service</Lead5>
           </Wrapper>
       </Container>

<BottomTab>
<Tab>
  <Logo src="/video/logo.png" />
  <Span>
    Developed by CodeLite ☁️ | © {date} All rights reserved 👽{" "}
  </Span>
  <SocialLinks>
    <a
      href="https://www.facebook.com/groups/brighterdayscodelab/"
      // rel="noopener noreferrer"
      target="_blank"
    >
      <FaFacebookSquare />
    </a>

    <a
      href="https://www.instagram.com/peter_oti_code/"
      // rel="noopener noreferrer"
      target="_blank"
    >
      <FaInstagram />
    </a>
    <a
      href="https://studio.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg/videos"
      // rel="noopener noreferrer"
      target="_blank"
    >
      <FaYoutube />
    </a>
  </SocialLinks>
</Tab>
</BottomTab>
<Fragment/>
 );
};

export default myHeroFooter;

const Tab = style.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

const BottomTab = style.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: darkblue;
  color: white;
  align-items: center;
  /* padding: 0 15px; */
`;

const SocialLinks = style.div`
  font-size: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  width: 170px;
  justify-content: space-between;
  
a {
     color: white;
  }
`;

const Logo = style.img`
  width: 150px;
  height: 40px;
  object-fit: contain;
`;

const Lead1 = style.div`
  margin-top: 20px;
  text-align: left;
  width: 10rem;
  font-weight: normal;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Lead2 = style.div`
  text-align: left;
  width: 10rem;
  margin-top: 10px;
  font-weight: normal;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Lead3 = style.div`
  text-align: left;
  width: 10rem;
  margin-top: 10px;
  font-weight: normal;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Lead4 = style.div`
  text-align: left;
  width: 10rem;
  margin-top: 10px;
  font-weight: normal;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Lead5 = style.div`
  text-align: left;
  width: 10rem;
  margin-top: 10px;
  font-weight: normal;
 
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Container = style.div`
  background-color: #040714;
  width: 100%;
  height: 35vh;
  color: white;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrapper = style.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  font-weight: bold;
  flex-direction: column;

  Span {
    margin-top: 20px;
    text-transform: uppercase;
  }
`;
