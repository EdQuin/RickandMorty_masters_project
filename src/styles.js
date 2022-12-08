import styled from "styled-components";

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
export const PrimeText = styled.p`
font-family: 'Boogaloo';
font-style: normal;
font-weight: 100;
font-size: 30px;
line-height: 30px;

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
