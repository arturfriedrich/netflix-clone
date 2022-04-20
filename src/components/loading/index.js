import React from "react"
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading"

import UserPicture from "../../images/users/1.png"

export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={UserPicture} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}