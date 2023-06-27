import styled from "styled-components";

const MainContainer = styled.section`
    height: 100vh;
    width: 100vw;
    background: url("../../assets/destination/background-destination-desktop.jpg");
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    
    padding:0 165px 131px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    
    @media screen and (max-width: 1200px) {
        
        background: url("../../assets/destination/background-destination-tablet.jpg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        padding:136px 40px 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    @media screen and (max-width: 800px) {
        background: url("../../assets/destination/background-destination-mobile.jpg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        padding:136px 24px 0;
    }
`;


const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`;
const DestinationTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    @media screen and (max-width: 800px) {
        justify-content:center;
    }
`;
const DestinationNum = styled.p`
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
const DestinationTitle = styled.p`
    color: #FFF;
    font-size: 28px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
    
`;
const PlanetImg = styled.img`
    margin-left: 32px;
    width: 300px;
    height: 300px;
    @media screen and (max-width: 1200px) {
        align-self: center;
    }
    @media screen and (max-width: 800px) {
        width: 170px;
        height: 170px;
    }
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 445px;
    @media screen and (max-width: 1200px) {
        align-items: center;
        width: 100%;
    }
`;
const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    height: 34px;
`;
const Tab = styled.div`
    height: 100%;
    cursor: pointer;
    :hover{
        transition: all 0.1s ease-in-out;
        border-bottom: 3px solid rgba(255, 255, 255, 0.3);
    }
    &.actual{
        border-bottom: 3px solid white;
    }
    text-transform: uppercase;
    
`;
const TabText = styled.p`
    color: #D0D6F9;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7px;
    pointer-events: none;
    &.actual{
        color: #ffffff;
    }
`;
const PlanetInfo = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
        align-items: center;
        width: 573px;
        text-align: center;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;
const PlanetTitle = styled.h1`
    color: #FFF;
    font-size: 100px;
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size: 80px;
    }
`;
const PlanetDesc = styled.p`
    color: #D0D6F9;
    font-size: 18px;
    font-family: 'Barlow Condensed', sans-serif;
    @media screen and (max-width: 1200px) {
        font-size: 16px;
    }
`;
const Line = styled.div`
    background: #383B4B;
    height: 1px;
    width: 100%;
    margin-bottom: 28px;
    margin-top: 54px;
    @media screen and (max-width: 1200px) {
        width: 573px;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
    }
    
`;
const PlantesDataContainer = styled.div`
    display: flex;
    gap: 80px;
    width: 100%;
    @media screen and (max-width: 1200px) {
        justify-content: center;
        margin-bottom: 32px;
    }
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        gap: 32px;

    }

`;
const PlanetData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

`;
const DataTitle = styled.p`
    color: #D0D6F9;
    font-size: 14px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.362px;
    text-transform: uppercase;

`;
const DataValue = styled.p`
    color: #FFF;
    font-size: 28px;
    font-family: 'Bellefair', serif;
    text-transform: uppercase;

`;
export {MainContainer ,DataTitle,DataValue,DestinationNum,DestinationTitle,DestinationTitleContainer,ImageContainer,InfoContainer,Line,PlanetData,PlanetDesc,PlanetImg,PlanetInfo,PlanetTitle,PlantesDataContainer,Tab,TabText,Tabs};