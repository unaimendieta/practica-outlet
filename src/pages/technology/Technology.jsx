import * as DATA from "../../constants/data";
import { useState } from "react";
import { Caption, Description, ImageContainer, ImageContainerLandscape, InfoContainer, MainContainer, Option, OptionNum, Options, TechImage, TechImageLandscape, TechInfo, TechInfoContainer, TechNum, TechTitle, TechTitleContainer, Title } from "./styles";

const Technology = () => {
        const techInfo = DATA.technology;
        const [currentTechInfo, setTechInfo] = useState({
                name: techInfo[0].name,
                images: techInfo[0].images,
                desc: techInfo[0].description
        });
	return (
        <>
         <MainContainer>
               <InfoContainer>
                        <TechTitleContainer>
                                <TechNum>03</TechNum>
                                <TechTitle>SPACE LAUNCH 101</TechTitle>
                        </TechTitleContainer>
                        <ImageContainerLandscape>
                                <TechImageLandscape src={currentTechInfo.images.landscape}/>
                        </ImageContainerLandscape>
                        <TechInfoContainer>
                                <Options>
                                        <Option onClick={e => handleTechnologyChange(e.target.id,techInfo,setTechInfo)} id={techInfo[0].name} key={techInfo[0].id} className={techInfo[0].name === currentTechInfo.name && "actual"}>
                                                <OptionNum>1</OptionNum>
                                        </Option>
                                        <Option onClick={e => handleTechnologyChange(e.target.id,techInfo,setTechInfo)} id={techInfo[1].name} key={techInfo[1].id} className={techInfo[1].name === currentTechInfo.name && "actual"}>
                                                <OptionNum>2</OptionNum>
                                        </Option>
                                        <Option onClick={e => handleTechnologyChange(e.target.id,techInfo,setTechInfo)} id={techInfo[2].name} key={techInfo[2].id} className={techInfo[2].name === currentTechInfo.name && "actual"}>
                                                <OptionNum>3</OptionNum>
                                        </Option>
                                </Options>
                                <TechInfo>
                                        <Caption>THE TERMINOLOGY…</Caption>
                                        <Title>{currentTechInfo.name}</Title>
                                        <Description>{currentTechInfo.desc}</Description>
                                </TechInfo>
                                
                        </TechInfoContainer>
               </InfoContainer>
               <ImageContainer>
                        <TechImage src={currentTechInfo.images.portrait}/>
               </ImageContainer>
        </MainContainer>
        </>
	);
};

const handleTechnologyChange = (target,techInfo, setTechInfo) =>{
        let newTech= "";
        techInfo.forEach(element => {
                if (element.name===target) {
                        newTech=element;
                }
        });
        setTechInfo({
                name: newTech.name,
                images: newTech.images,
                desc: newTech.description
        })
}

export default Technology;