import styled from "styled-components";

const MainContainer = styled.section`
    height: 100vh;
    width: 100vw;
    background: url("../../assets/crew/background-crew-desktop.jpg");
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding:0 165px;
    @media screen and (max-width: 1200px) {
        background: url("../../assets/crew/background-crew-tablet.jpg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        padding:136px 40px 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    @media screen and (max-width: 800px) {
        background: url("../../assets/crew/background-crew-mobile.jpg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        padding:136px 24px 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    padding-bottom: 90px;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
    @media screen and (max-width: 800px) {
        
        height:100%;
    }
`;
const CrewTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    @media screen and (max-width: 800px) {
        justify-content:center;
    }
`;
const CrewNum = styled.p`
    color: #FFF;
    font-size: 28px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    letter-spacing: 4.725px;
    opacity: 0.25;
    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
`;
const CrewTitle = styled.p`
    color: #FFF;
    font-size: 28px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
`;
const CrewInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media screen and (max-width: 1200px) {
        align-items:center;
    }
    
`;
const Role = styled.p`
    color: #FFF;
    opacity: 0.5042492151260376;
    font-size: 32px;
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size: 24px;
    }
`;
const Name = styled.h1`
    color: #FFF;
    font-size: 56px;
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
`;
const Description = styled.p`
    color: #D0D6F9;
    font-size: 18px;
    font-family: 'Barlow Condensed', sans-serif;
    width: 600px;
    @media screen and (max-width: 1200px) {
        font-size: 16px;
    }
    @media screen and (max-width: 800px) {
        text-align: center;
        width:100%;
    }
`;
const BulletPoints = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        justify-content: center;
    }
`;
const Bullet = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background: #363841;
    cursor: pointer;
        transition: all 0.3s ease-in-out;
    :hover{
        
        opacity: 0.500094473361969;
        background: #FFF;
        transition: all 0.3s ease-in-out;
    }
    &.actual{
        background: #ffffff;
    }
`;
const ImageContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media screen and (max-width: 1200px) {
        height: 400px;
        width: 100%;
        align-items: center
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`;
const CrewImage = styled.img`
    height: 100%;

`;
const ImageContainerMobile = styled.div`
    display: none;
    @media screen and (max-width: 800px) {
        
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;    
        height: 220px;
        width: 100%;
    }
`;
const CrewImageMobile = styled.img`
    height: 100%;

`;
export {MainContainer,Bullet,BulletPoints,CrewInfo,CrewNum,CrewTitle,CrewTitleContainer,Description,ImageContainer,InfoContainer,Name,Role,CrewImage,CrewImageMobile,ImageContainerMobile};