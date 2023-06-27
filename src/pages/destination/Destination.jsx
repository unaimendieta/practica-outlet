import { DataTitle, DataValue, DestinationNum, DestinationTitle, DestinationTitleContainer, ImageContainer, InfoContainer, Line, MainContainer, PlanetData, PlanetDesc, PlanetImg, PlanetInfo, PlanetTitle, PlantesDataContainer, Tab, TabText, Tabs } from "./styles";

import * as DATA from "../../constants/data";
import { useState } from "react";

const Destination = () => {
        const destinationInfo = DATA.destinations;
        const [currentDestination, setCurrentDestination] = useState({
                name: destinationInfo[0].name,
                images: destinationInfo[0].images,
                desc: destinationInfo[0].description,
                distance: destinationInfo[0].distance,
                travel: destinationInfo[0].travel
        });

	return (
        <>
        <MainContainer>
                <ImageContainer>
                        <DestinationTitleContainer>
                                <DestinationNum>01</DestinationNum>
                                <DestinationTitle>Pick your destination</DestinationTitle>
                        </DestinationTitleContainer>
                        <PlanetImg src={currentDestination.images.png}/>
                     
                </ImageContainer>
                <InfoContainer>
                        <Tabs>  
                        {destinationInfo.map(tab =>
                                <Tab onClick={e => handleDestinationChange(e.target.id,destinationInfo,setCurrentDestination)} id={tab.name} key={tab.id} className={tab.name === currentDestination.name && "actual"}>
                                        <TabText value={tab.name} className={tab.name === currentDestination.name && "actual"}>{tab.name}</TabText>
                                </Tab>
                        )}
                        </Tabs>
                        <PlanetInfo>
                                <PlanetTitle>{currentDestination.name}</PlanetTitle>
                                <PlanetDesc>{currentDestination.desc}</PlanetDesc>
                        </PlanetInfo>
                        <Line></Line>
                        <PlantesDataContainer>
                                <PlanetData>
                                        <DataTitle>AVG. DISTANCE</DataTitle>
                                        <DataValue>{currentDestination.distance}</DataValue>
                                </PlanetData>
                                <PlanetData>
                                        <DataTitle>Est. travel time</DataTitle>
                                        <DataValue>{currentDestination.travel}</DataValue>
                                </PlanetData>
                        </PlantesDataContainer>
                </InfoContainer>
        </MainContainer>
        </>
	);
};

const handleDestinationChange = (target,destinationInfo, setCurrentDestination) =>{
        let newDest = "";
        destinationInfo.forEach(element => {
                if (element.name===target) {
                        newDest=element;
                }
        });
        setCurrentDestination({
                name: newDest.name,
                images: newDest.images,
                desc: newDest.description,
                distance: newDest.distance,
                travel: newDest.travel
        })
}

export default Destination;