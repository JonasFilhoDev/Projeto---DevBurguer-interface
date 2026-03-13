import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content, Badge } from "./styles";
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { HomeButton } from "../HomeButton";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { useCart } from '../../hooks/CartContext'

export function Header() {

    const { cartProducts } = useCart();
    const navigate = useNavigate();
    const { pathname } = useResolvedPath();
    const { logout, userInfo } = useUser();

    const cartItemsCount = cartProducts?.reduce((acc, product) => acc + product.quantity, 0) || 0;

    function logoutUser() {
        logout();
        navigate('/login');
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HomeButton to='/' $isActive={pathname === '/'}>
                            Home
                        </HomeButton>
                        <hr></hr>
                        <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <FiUser color="#fff" size={24} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <FiShoppingCart color="#fff" size={24} />
                            
                            {cartItemsCount > 0 && <Badge>{cartItemsCount}</Badge>}

                            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
                        </div>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    );
}