import { useState } from "react";
import { Line, MainContainer, MenuContainer, MenuHamburguer, MenuIcon, MenuItem, MenuItemMobile, MenuItemNum, MenuItemNumMobile, MenuItemText, MenuItemTextMobile, MenuItems, MobileMenu } from "./styles";

const Header = () => {
	
	const [menuOpen, setMenuOpen] = useState(false);
	return (
	<>
		<MainContainer>
			<img src="../../assets/shared/logo.svg" alt="" />
			<Line></Line>
			<MenuContainer>
				<MenuItems>
					<MenuItem to="/">
						<MenuItemNum>00</MenuItemNum>
						<MenuItemText>HOME</MenuItemText>
					</MenuItem>
					<MenuItem  to="/destination">
						<MenuItemNum>01</MenuItemNum>
						<MenuItemText>DESTINATION</MenuItemText>
					</MenuItem>
					<MenuItem  to="/crew">
						<MenuItemNum>02</MenuItemNum>
						<MenuItemText>CREW</MenuItemText>
					</MenuItem>
					<MenuItem  to="/technology">
						<MenuItemNum>03</MenuItemNum>
						<MenuItemText>TECHNOLOGY</MenuItemText>
					</MenuItem>
				</MenuItems>
			</MenuContainer>
			<MenuIcon onClick={()=>setMenuOpen(!menuOpen)}>
				<MenuHamburguer className={menuOpen && "open"}></MenuHamburguer>
				<MenuHamburguer className={menuOpen && "open"}></MenuHamburguer>
				<MenuHamburguer className={menuOpen && "open"}></MenuHamburguer>
			</MenuIcon>
			<MobileMenu className={menuOpen && "open"}>
					<MenuItemMobile onClick={()=>setMenuOpen(!menuOpen)} to="/">
						<MenuItemNumMobile>00</MenuItemNumMobile>
						<MenuItemTextMobile>HOME</MenuItemTextMobile>
					</MenuItemMobile>
					<MenuItemMobile onClick={()=>setMenuOpen(!menuOpen)} to="/destination">
						<MenuItemNumMobile>01</MenuItemNumMobile>
						<MenuItemTextMobile>DESTINATION</MenuItemTextMobile>
					</MenuItemMobile>
					<MenuItemMobile onClick={()=>setMenuOpen(!menuOpen)} to="/crew">
						<MenuItemNumMobile>02</MenuItemNumMobile>
						<MenuItemTextMobile>CREW</MenuItemTextMobile>
					</MenuItemMobile>
					<MenuItemMobile onClick={()=>setMenuOpen(!menuOpen)} to="/technology">
						<MenuItemNumMobile>03</MenuItemNumMobile>
						<MenuItemTextMobile>TECHNOLOGY</MenuItemTextMobile>
					</MenuItemMobile>
			</MobileMenu>
		</MainContainer>
	</>
	);
};
export default Header;