import React, { useState, useContext, createContext } from 'react'
import { Body, Title, Header, Container, Inner, Item, Frame } from "./styles/accordion"

import CloseIcon from "../../images/icons/close-slim.png"
import OpenIcon from "../../images/icons/add.png"

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false)
    
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src={CloseIcon} alt="Close" />
            ) : (
                <img src={OpenIcon} alt="Open" />
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext)
    
    return toggleShow ? <Body {...restProps}>{children}</Body> : null
}