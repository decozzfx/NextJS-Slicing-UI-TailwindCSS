import React from 'react'
import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'

const ProfileSection = () => {
    return (
        <section className="py-28 " id='profile'>
        <div className="container mx-auto px-10 2xl:px-0">
          <SectionTitle>Profile</SectionTitle>
          <SectionParagraph>about me in quickly</SectionParagraph>

          <div className="flex xl:w-10/12 mx-auto mt-10 lg:items-center md:items-start flex-wrap">
            <div className="md:w-4/12 w-full px-10 mb-10 md:mb-0">
              <img src="/profile.png" alt="profile" className="w-full"/>
            </div>
            <div className="md:w-8/12 w-full md:px-10 text-justify">
              <p className="text-lg leading-relaxed"> Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis condimentum ornare ante a posuere. Aliquam sem magna, sodales quis congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros. Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus ligula, id viverra mi erat at nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac aliquet eros.</p>
              <p className="text-lg leading-relaxed mt-6">Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl. Mauris ut dolor posuere augue porta lobortis nec sed lacus. Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus mollis, id vehicula nulla dictum.</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProfileSection
