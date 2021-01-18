import React from 'react'
import { Logo } from '../logo/Logo'

export const Sidebar = () => {
    return (
        <aside className='sidebar-width h-full box-border p-4'>
            <Logo />
            <p>Aqui va el aside</p>
        </aside>
    )
}
