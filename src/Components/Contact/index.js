import React from 'react'
import {ContacTitle,ContactSection,Span,Form,InputSub,InputSubmit,InputEmail,InputText,TextArea,FormInput} from './style.js'
import Footer from '../Footer/index.js'
const Contact = () => {
    return(
        <React.Fragment>
        <ContactSection>
        <div className="container">
            <ContacTitle><Span>Drop </Span>Me A line</ContacTitle>
            <Form action="">
                <FormInput>
                    <InputText placeholder="Your Name"/>
                    <InputEmail placeholder="Your Email"/>
                </FormInput>
                <InputSub type="text" className="sub" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"/>
                <InputSubmit type="submit" value="Send Message"/>
            </Form>
        </div>
    </ContactSection>
    <Footer />
    </React.Fragment>
    )
}

export default Contact