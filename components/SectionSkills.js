import React from 'react'
import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'

const SectionSkills = () => {
    return (
        <section className='py-28 bg-gray-100' id='skills'>
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Some skills and the level</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-4/12 w-full px-4 pb-8">                        
                        <SkillCard name='Javascript' level='Menengah' image='/javascript.svg' imageClassName='h-16 w-16 rounded-full'/>
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">                        
                        <SkillCard name='HTML' level='Dasar' image='/html-5.svg' imageClassName='h-16 w-16' />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">                        
                        <SkillCard name='Tailwind CSS' level='Dasar' image='/tailwindcss-icon.svg' imageClassName='h-16 w-16' />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">                        
                        <SkillCard name='Node JS' level='Dasar' image='/nodejs-icon.svg' imageClassName='h-16 w-16' />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">                        
                        <SkillCard name='Next JS' level='Dasar' image='/nextjs-icon.svg' imageClassName='h-16 w-16' />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">                        
                        <SkillCard name='React' level='Dasar' image='/react.svg' imageClassName='h-16 w-16' />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">                        
                        <SkillCard name='MongoDB' level='Dasar' image='/mongodb.svg' imageClassName='h-16 w-16' />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">                        
                        <SkillCard name='Mysql' level='Dasar' image='/mysql-icon.svg' imageClassName='h-16 w-16'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSkills
