import React, { useState } from "react"
import { HeaderContainer } from "../containers/header"
import { Form } from "../components"
import { FooterContainer } from "../containers/footer"
import * as ROUTES from "../constants/routes"

export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    // here we need form validation
    const isInvalid = firstName === '' | emailAddress === '' | password === ''
    
    // handleSignup (pass an event)
    const handleSignup = (event) => {
        event.preventDefault()
    }
    
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} 
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign Un
                        </Form.Submit>
                        
                        <Form.Text>
                            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                        </Form.Text>    
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}