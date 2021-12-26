import classNames from 'classnames'
import React from 'react'

const Button = ({href, className, children, variant, pill}) => {
    const variants = {
        'outline-yellow': 'border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500',
        'yellow' : 'bg-yellow-500 hover:bg-yellow-600 text-black',
        'black' : 'bg-black hover:bg-opacity-80 text-white'
    }
    const pickVariant = variants[variant]
    return (        
            <a href={href} className={classNames('transition font-semibold text-lg py-2 px-8 inline-block', 
            pill && 'rounded-full', 
            pickVariant, 
            className)}>
            {children}
            </a>
        
    )
}

export default Button
