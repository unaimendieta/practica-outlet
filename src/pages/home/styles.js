import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.section`
    height: 100vh;
    width: 100vw;
    background: url("../../assets/home/background-home-desktop.jpg");
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding:0 165px 131px;
    @media screen and (max-width: 1200px) {
        background: url("../../assets/home/background-home-tablet.jpg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        flex-direction: column;
        align-items: center;
        padding:0 ;
    }
    @media screen and (max-width: 800px) {
        background: url("../../assets/home/background-home-mobile.jpg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    width: 400px;
    @media screen and (max-width: 1200px) {
        margin-top: 200px;
        align-items: center;
        text-align: center;
    }
`;
const Caption = styled.p`
    color: #D0D6F9;
    font-size: 28px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 4.725px;
    @media screen and (max-width: 1200px) {
        font-size: 20px;
        letter-spacing: 3.375px;
    }
`;
const Title = styled.h1`
    color: #FFF;
    font-size: 150px;
    font-family: 'Bellefair', serif;
`;
const Description = styled.p`
    color: #D0D6F9;
    font-size: 18px;
    font-family: 'Barlow Condensed', sans-serif;
    line-height: 32px;
    @media screen and (max-width: 1200px) {
        font-size: 16px;
    }
`;
const ExploreButton = styled(NavLink)`
    width: 274px;
    height: 274px;
    border-radius: 274px;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover{
    transition: all 0.3s ease-in-out;
        box-shadow: 0px 0px 0px 88px rgba(255,255,255,0.1);
    }
    @media screen and (max-width: 1200px) {
        width: 244px;
        height: 244px;
        margin-bottom: 30px;
    }
    @media screen and (max-width: 800px) {
        width: 150px;
        height: 150px;
    }
`;
const ExploreText = styled.p`
    color: #0B0D17;
    font-size: 32px;
    font-family: 'Bellefair', serif;
    letter-spacing: 2px;
    @media screen and (max-width: 800px) {
        font-size: 20px;
    }
`;
export {MainContainer,Caption,Content,Description,ExploreButton,ExploreText,Title};