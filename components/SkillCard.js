import React from 'react'
import classNames from 'classnames'


const SkillCard = ({name, level, image, imageClassName}) => {
    return (
        <div className="bg-white shadow-skills rounded-lg p-6 flex">
            <img src={image} className={classNames('mr-6 ',imageClassName)} />
                <div>
                <h4 className='text-lg font-semibold'>{name}</h4>
                <p className='text-sm font-semibold text-gray-400'>{level}</p>
             </div>
        </div>
    )
}

export default SkillCard
