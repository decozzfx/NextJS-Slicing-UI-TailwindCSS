import React from 'react'
import Button from './Button'
import ContactItem from './ContactItem'
import Field from './Field'
import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'

const SectionContact = () => {
    return (
        <section className='container mx-auto' id='contacts'>
            <div className='bg-gray-100 flex rounded-lg flex-wrap'>
                <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
                    <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                    <SectionTitle left>Cantact</SectionTitle>
                    <SectionParagraph left>availabelity of social media</SectionParagraph>
                    <ContactItem label='Email' value='m.f.r.ozil@gmail.com' item='/email.svg' className='mt-5'/>
                    <ContactItem label='Phone' value='0895366923820' item='/phone.svg'/>
                    <ContactItem label='Twitter' value='@decozzfx' item='/twitter.svg'/>
                    </div>
                </div>
                <div className="md:w-6/12 w-full">
                    <form className='lg:py-16 lg:px-20 md:p-14 p-10'>
                        <div className="flex flex-wrap -mx-4">
                            <div className="lg:w-6/12 w-full px-4">
                                <Field label='Name' name='Name' type='text' />
                            </div>
                            <div className="lg:w-6/12 w-full px-4">
                                <Field label='Email' name='Email' type='text' />
                            </div>
                        </div>
                        <div className='lg:-mr-4'>
                        <Field label='Subject' name='Subject' type='text' />                        
                        </div>
                        <div className='lg:-mr-4'>
                        <Field label='Message' name='Message' type='textarea' className='h-40'/>                        
                        </div>
                        <div className='text-right 2xl:-mx-4'>
                        <Button variant='black'>Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SectionContact
