import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'

import NetflixLogo from "/Users/friedrichartur/Development/frontEnd/scrimbaThings/netflix-clone/src/images/misc/logo.svg"

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo 
                    to={ROUTES.HOME} 
                    src={NetflixLogo} 
                    alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}