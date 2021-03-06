import React from 'react'
import { Container, Input, Button, Text } from './styles/opt-form'

import ChevronRight from "../../images/icons/chevron-right.png"

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src={ChevronRight} alt="Try Now" />
        </Button>
    )
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

