import { navLinks } from "./navLinks";
import Logo from '../../assets/logo.svg';
import { IoExitOutline } from "react-icons/io5";
import { Container, Footer, NavLink, NavLinkContainer } from "./styles";
import { useUser } from '../../hooks/UserContext';
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    return (
        <Container>
            <img src={Logo} alt="Hamburguer Logo DevBurguer" />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={pathname === link.path}                        
                        >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <IoExitOutline />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    );
}