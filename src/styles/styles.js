import styled from "styled-components";

export const FooterBox = styled.footer`
width: 100%;
height: 350px;
background: #000000;
position: fixed-bottom; left: 0; bottom: 0;
border-top: 5px solid #50EE05;
column-count: 2;
column-gap: 50px;
width: 850px; 
margin: auto; /* Same height as footer */
padding: 100px 0;
`;
export const FooterText = styled.p`
font-size: 1em;
font-weight: 300;
color: #696969;
text-align: center;
`;

export const Main = styled.main`
width: 100%;
height: 100%;
background: #000000;
`;
export const Title = styled.h1`
width: 540px;
height: 101px;
left: 551px;
top: 159px;

font-family: 'Boogaloo';
font-style: normal;
font-weight: 400;
font-size: 100px;
line-height: 119px;

color: #50EE05;


padding-top: 20px;
text-align: left;
`;
export const HomeContainer = styled.div`
display: flex;
margin: 3vh;
`;
export const HomeText = styled.p`
font-family: 'Boogaloo';
font-style: normal;
font-weight: 100;
font-size: 30px;
line-height: 1.6;

color: #50EE05;

margin: auto;
padding-top: 20px;
text-align: left;
`;
export const Navi = styled.nav`
box-sizing: border-box;
width: 100%;
height: 70px;
left: 0px;
top: 0px;

border: 5px solid #50EE05;
`;
export const NavLi = styled.li`
list-style-type: none;
padding-left: 50px;
padding-right: 50px;

font-family: 'Boogaloo';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;

a {
    text-decoration: none;
    color: #50EE05;
}
a:hover {
    color: #2BE2FB;
}
a:active{
    text-decoration: underline;
}
`;
export const NavUl = styled.ul`
text-align: right;
display: flex;
`;
export const NavImg = styled.img`
width: 60px;
heigth: 60px;
object-fit: contain;
`;
export const HomeImg = styled.img`
width: 600px;
heigth: 600px;
object-fit: contain;
`;
export const Characters = styled.li`
display: flex;
flex-wrap: wrap;
margin: 40px;
justify-content: space-between;

font-family: 'Boogaloo';
font-style: normal;
font-size: 30px;
color: #50EE05;
`;
export const Charactercard = styled.div`
border: 5px solid #50EE05;
padding: 30px;
margin-top: 20px;
list-style-type: none;
font-size: 2.5vh;
transition: all 0.3s;

&:hover{
    transform: scale(1.1);
    transition: all 0.3s;
}
`;
export const AboutText = styled.p`
font-family: 'Boogaloo';
font-style: normal;
font-size: 40px;
color: #50EE05;
`;
