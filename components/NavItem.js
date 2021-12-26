import React from 'react'
import classNames from 'classnames'

const NavItem = ({href, children, scheme, ref }) => {
    const schemes = {
        light : 'text-white text-opacity-60 hover:text-opacity-100',
        dark : 'text-dark text-opacity-100 hover:text-opacity-10'
    }
  

    const pickedScheme = schemes[scheme]
    return (        
            <li><a href={href}  className={classNames("transition text-lg font-semibold", pickedScheme)}>{children}</a></li>        
    )
}

export default NavItem
