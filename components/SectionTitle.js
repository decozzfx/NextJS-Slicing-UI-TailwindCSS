import React from 'react'

const SectionTitle = ({left, children}) => {
    return (
        <div className={`h2 text-2xl font-semibold font-mono ${!left ? 'text-center' : '' }`}>{children}</div>
    )
}

export default SectionTitle
