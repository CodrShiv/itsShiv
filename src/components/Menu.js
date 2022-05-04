import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import './Menu.css';
const Menu = () => {
    const links = {intro: "/", blogs: "/blogs", work: "/work", contact: "/contact"}, linksDOM = [];
    for (let key in links) {
        linksDOM.push(<NavLink key={key} to={links[key]} className={({isActive}) => (isActive ? "active menuLink" : 'inactive menuLink')}><Button className="menuButton" variant={"contained"}><span className="menuBtnText">{key}</span></Button></NavLink>);
    }
    return <div className="menu">
        {linksDOM}
    </div>
}
    

export default Menu;