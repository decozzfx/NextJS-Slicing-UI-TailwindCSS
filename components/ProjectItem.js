import React from 'react'

const ProjectItem = ({name, desc, image}) => {
    return (
        
            <article className='text-center'>
            <img src={image} className='w-full rounded-lg'/>
            <h3 className='text-xl font-semibold mt-4 mb-1'>{name}</h3>
            <p className='text-sm text-gray-400'>{desc}</p>
            </article>
        
    )
}

export default ProjectItem
