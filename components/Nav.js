import React from 'react'
import NavItem from './NavItem'
import classNames from 'classnames'

const Nav = ({dir, scheme }) => {
    const dirs = {
        horizontal : 'justify-center space-x-10',
        vertical : 'flex-col space-y-10 text-center mt-20'
    }
   
    const pickedDir = dirs[dir]
    return (
        <ul className={classNames("flex", pickedDir)}>
            <NavItem scheme={scheme} href='#profile' >Profile</NavItem>
            <NavItem scheme={scheme} href='#skills'>Skills</NavItem>
            <NavItem scheme={scheme} href='#projects'>Project</NavItem>
            <NavItem scheme={scheme} href='#contacts'>Contact</NavItem>
        </ul>
    )
}

export default Nav
