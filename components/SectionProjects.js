import React from 'react'
import ProjectItem from './ProjectItem'
import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'

const SectionProjects = () => {
    return (
        <section className='py-28' id='projects'>
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Some my project that i have building </SectionParagraph>
            </div>
            <div className="flex -mx-4 mt-20 mr-4 flex-wrap">
                <div className="md:w-6/12 w-full px-20 mb-16">
                    <ProjectItem image='/hasten.png' name='Hasten' desc='Explorasi landing page' />
                </div>
                <div className="md:w-6/12 w-full px-20 mb-16">
                    <ProjectItem image='/resource.png' name='Resources' desc='Explorasi resource page' />
                </div>
                <div className="md:w-6/12 w-full px-20 mb-16 md:mb-0">
                    <ProjectItem image='/resource.png' name='Resources' desc='Explorasi resource page' />
                </div>
                <div className="md:w-6/12 w-full px-20 mb-16 md:mb-0">
                    <ProjectItem image='/hasten.png' name='Hasten' desc='Explorasi landing page' />
                </div>
            </div>
        </section>
    )
}

export default SectionProjects
