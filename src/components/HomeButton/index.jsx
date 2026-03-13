import { useNavigate } from 'react-router-dom';
import { HomeButton as ContainerHomeButton } from './styles';
import { FiHome } from 'react-icons/fi';

export function HomeButton() {
    
    const navigate = useNavigate(); 

    return (
        <ContainerHomeButton onClick={() => navigate('/')}>
            <FiHome size={28} />
        </ContainerHomeButton>
    );
}