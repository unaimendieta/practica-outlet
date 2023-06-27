import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.nav`
    position: absolute;
    top: 40px;
    height: 96px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 55px;
    @media screen and (max-width: 1200px) {
        padding-left: 40px;
        top: 0;
        justify-content: space-between;
    }
`;
const Line = styled.div`
    width: 473px;
    height: 1px;
    opacity: 0.2514851987361908;
    background: #FFF;
    margin-left: 64px;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;
const MenuContainer = styled.div`
    margin-left: -30px;
    width: 100%;
    height: 96px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    @media screen and (max-width: 1200px) {
        width: fit-content;
    }
    @media screen and (max-width: 800px) {
        display:none;
    }
`;
const MenuItems = styled.div`
    padding:0 120px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 1200px) {
        gap: 40px;
    }
`;
const MenuItem = styled(NavLink)`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 11px;
    text-decoration: none;
    transition: all 0.1s ease-in-out;
    :hover{
        transition: all 0.1s ease-in-out;
        border-bottom: 3px solid rgba(255, 255, 255, 0.3);
    }
    &.active{
        border-bottom: 3px solid white;
    }
    
`;
const MenuItemNum = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    letter-spacing: 2.7px;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;
const MenuItemText = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7px;
`;
const MenuIcon = styled.div`
display: none;
    @media screen and (max-width: 800px) {
        z-index: 20;
        padding-right: 40px;
        width: 24px;
        height: 21px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    
`;
const MenuHamburguer = styled.div`
     display: none;
     @media screen and (max-width: 800px) {
        display: block;
        width: 24px;
        height: 3px;
        background-color: #D0D6F9;
        
        transition: all 0.3s ease-in-out;
        &.open{
        transition: all 0.3s ease-in-out;
            :first-child{
                transform: rotate(45deg);
                margin-top: 10px;
            }
            :last-child{
                transform: rotate(-45deg);
                margin-bottom: 10px;
            }
            :nth-child(2){
                display: none;
            }
        }
    }
`;
const MobileMenu = styled.div`
display: none;
     @media screen and (max-width: 800px) {
        z-index: 10;
        display: flex;
        flex-direction: column;
        width: 60%;
        height: 100vh;
        position: fixed;
        padding-left: 38px;
        padding-top: 138px;
        gap: 32px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.774227142333984px);
        right: -100%;
        top: 0;
        transition: all 0.3s ease-in-out;
        &.open{
        transition: all 0.3s ease-in-out;
            right: 0;
        }
    }
`;
const MenuItemMobile = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 11px;
    text-decoration: none;
    
    
    
`;
const MenuItemNumMobile = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    letter-spacing: 2.7px;
    
`;
const MenuItemTextMobile = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7px;
`;
export {MainContainer,Line,MenuContainer,MenuItems,MenuItem,MenuItemNum,MenuItemText,MenuHamburguer,MenuIcon,MobileMenu,MenuItemMobile,MenuItemNumMobile,MenuItemTextMobile};