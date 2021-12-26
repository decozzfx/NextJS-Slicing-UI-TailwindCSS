import React from 'react'
import classNames from 'classnames'

const SectionParagraph = ({left, children }) => { //props left
    return (
        <h2 className={classNames('text-lg mt-2 text-gray-600',!left && 'text-center')}>{children}</h2>
    )
}

export default SectionParagraph
