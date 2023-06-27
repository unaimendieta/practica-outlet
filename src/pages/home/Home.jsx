import { Caption, Content, Description, ExploreButton, ExploreText, MainContainer, Title } from "./styles";

const Home = () => {
	return (
        <>
        <MainContainer>
                <Content>
                        <Caption>SO, YOU WANT TO TRAVEL TO</Caption>   
                        <Title>SPACE</Title>   
                        <Description>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Description>   
                </Content>
                <ExploreButton to="/destination">
                        <ExploreText>Explore</ExploreText>
                </ExploreButton>
        </MainContainer>
        </>
	);
};

export default Home;