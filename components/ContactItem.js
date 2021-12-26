import React from 'react'
import classNames from 'classnames'


const ContactItem = ({label, value, item, className}) => {
    return (
        <div className={classNames('flex items-start py-4',className)}>
            <img src={item} className='w-6' />
            <div className='ml-4'>
                <div className="text-sm font-semibold mb-1">{label}</div>
                <div className="text-lg font-semibold">{value}</div>
            </div>
            
        </div>
    )
}

export default ContactItem
