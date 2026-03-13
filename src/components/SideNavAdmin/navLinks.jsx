import { GiCardboardBox } from "react-icons/gi";
import { LuClipboardList } from "react-icons/lu";
import { TbShoppingCartPlus } from "react-icons/tb";

export const navLinks = [

    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <LuClipboardList size={25} color="#ffffff"/>
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <GiCardboardBox size={25} color="#ffffff"/>
    },
    {
        id: 3,
        label: 'Adicionar Produto',
        path: '/admin/novo-produto',
        icon: <TbShoppingCartPlus size={25} color="#ffffff"/>
    },
]