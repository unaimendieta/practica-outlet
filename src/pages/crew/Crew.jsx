import {Bullet, BulletPoints, CrewImage, CrewImageMobile, CrewInfo, CrewNum, CrewTitle, CrewTitleContainer, Description, ImageContainer, ImageContainerMobile, InfoContainer, MainContainer, Name, Role} from "./styles";

import * as DATA from "../../constants/data";
import { useState } from "react";

const Crew = () => {
        const crewInfo = DATA.crew;
        const [currentCrewInfo, setCrewInfo] = useState({
                name: crewInfo[0].name,
                images: crewInfo[0].images,
                role: crewInfo[0].role,
                bio: crewInfo[0].bio
        });

	return (
        <>
        <MainContainer>
               <InfoContainer>
                        <CrewTitleContainer>
                                <CrewNum>02</CrewNum>
                                <CrewTitle>Meet your crew</CrewTitle>
                        </CrewTitleContainer>
                        
                        <ImageContainerMobile>
                                <CrewImageMobile src={currentCrewInfo.images.png}/>
                        </ImageContainerMobile>
                        <CrewInfo>
                                <Role>{currentCrewInfo.role}</Role>
                                <Name>{currentCrewInfo.name}</Name>
                                <Description>{currentCrewInfo.bio}</Description>
                        </CrewInfo>
                        <BulletPoints>
                        {crewInfo.map(bullet =>
                                <Bullet onClick={e => handleCrewChange(e.target.id,crewInfo,setCrewInfo)} id={bullet.name} key={bullet.id} className={bullet.name === currentCrewInfo.name && "actual"}>
                                </Bullet>
                        )}
                        </BulletPoints>
               </InfoContainer>
               <ImageContainer>
                        <CrewImage src={currentCrewInfo.images.png}/>
               </ImageContainer>
        </MainContainer>
        </>
	);
};

const handleCrewChange = (target,crewInfo, setCrewInfo) =>{
        let newCrew = "";
        crewInfo.forEach(element => {
                if (element.name===target) {
                        newCrew=element;
                }
        });
        setCrewInfo({
                name: newCrew.name,
                images: newCrew.images,
                role: newCrew.role,
                bio: newCrew.bio
        })
}

export default Crew;