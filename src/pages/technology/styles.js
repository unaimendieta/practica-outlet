import styled from "styled-components";

const MainContainer = styled.section`
    height: 100vh;
    width: 100vw;
    background: url("../../assets/technology/background-technology-desktop.jpg");
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding:0 0 50px 165px;
    @media screen and (max-width: 1200px) {
        
        background: url("../../assets/technology/background-technology-tablet.jpg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        padding:136px 0 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    @media screen and (max-width: 800px) {
        
        background: url("../../assets/technology/background-technology-mobile.jpg");
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        padding:136px 0 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
    padding-bottom: 50px;
    @media screen and (max-width: 1200px) {
        height: fit-content;
        width: 100%;
    }
`;
const TechTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    @media screen and (max-width: 1200px) {
        padding-left: 40px;
        margin-bottom:32px;
    }
    @media screen and (max-width: 800px) {
        justify-content:center;
    }
`;
const TechNum = styled.p`
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
const TechTitle = styled.p`
    color: #FFF;
    font-size: 28px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
`;
const TechInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    @media screen and (max-width: 1200px) {
        
        gap: 40px;
        margin-top: 40px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;
const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media screen and (max-width: 1200px) {
        gap: 16px;
        flex-direction: row;
        justify-content: center;
    }
`;
const Option = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: none;
    border: 1px solid  rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease-in-out;
    color: white;
    cursor: pointer;
    :hover{
        
    border: 2px solid white;
        transition: all 0.3s ease-in-out;
    }
    &.actual{
         background: white;
         color: #0B0D17;
    }
    @media screen and (max-width: 1200px) {
        
        width: 60px;
        height: 60px;
    }
    @media screen and (max-width: 800px) {
        
        width: 40px;
        height: 40px;
    }
`;
const OptionNum = styled.p`
    font-size: 32px;
    font-family: 'Bellefair', serif;
    pointer-events: none;
    @media screen and (max-width: 1200px) {
        font-size: 24px;
    }
`;
const TechInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media screen and (max-width: 1200px) {
        align-items: center;
    }
    
`;

const Caption = styled.p`
    color: #D0D6F9;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7px;
    
`;
const Title = styled.h1`
    color: #FFF;
    font-size: 56px;
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size:40px;
    }
`;
const Description = styled.p`
    color: #D0D6F9;
    font-size: 18px;
    font-family: 'Barlow Condensed', sans-serif;
    line-height: 32px;
    width: 450px;
    @media screen and (max-width: 1200px) {
        font-size:16px;
    }
`;
const ImageContainer = styled.div`
    height: 100%;
    width: 400px;
    position: relative;
    @media screen and (max-width: 1200px) {

        display: none;
    }
`;
const TechImage = styled.img`
    width: 100%;
    position: absolute;
    top: 30%;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;
const ImageContainerLandscape = styled.div`

    display: none;
    @media screen and (max-width: 1200px) {
        height: 300px;
        width: 100%;
        position: relative;
        pointer-events: none;
        display: block;
    }
`;
const TechImageLandscape = styled.img`
    display: none;
    @media screen and (max-width: 1200px) {
        height: 100%;
        width: 100%;
        display: block;
    }
`;

export {MainContainer,InfoContainer,Caption,Description,ImageContainer,Option,OptionNum,Options,TechImage,TechInfo,TechInfoContainer,TechNum,TechTitle,TechTitleContainer,Title,ImageContainerLandscape,TechImageLandscape};