import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { MainContainer } from "./styles";

const Layout = () => {
	return (
	<>
		<MainContainer>
			<Header />
			<Outlet />
		</MainContainer>
	</>
	);
};

export default Layout;