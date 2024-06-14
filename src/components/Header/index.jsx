// src/components/Menu.js
import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import './Header.module.css'; // Custom CSS file for additional styling

const Menu = () => {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location = '/'; }
        },
        {
            label: 'Items Perdidos',
            icon: 'pi pi-fw pi-search',
            command: () => { window.location = '/lost-items'; }
        },
        {
            label: 'Encontrar Items',
            icon: 'pi pi-fw pi-check-square',
            command: () => { window.location = '/found-items'; }
        },
        {
            label: 'Reportar',
            icon: 'pi pi-fw pi-exclamation-circle',
            items: [
                {
                    label: 'Reportar Item Perdido',
                    icon: 'pi pi-fw pi-minus-circle',
                    command: () => { window.location = '/report-lost'; }
                },
                {
                    label: 'Reportar Item Encontrado',
                    icon: 'pi pi-fw pi-plus-circle',
                    command: () => { window.location = '/report-found'; }
                }
            ]
        },
        {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            command: () => { window.location = '/profile'; }
        },
        {
            label: 'Sair',
            icon: 'pi pi-fw pi-power-off',
            command: () => {window.location = '/login'}
        }
    ];

    return (
        <div className="menu-container">
            <Menubar model={items} />
        </div>
    );
};

export default Menu;
