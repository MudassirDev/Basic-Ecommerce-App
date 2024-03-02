import React from 'react'
import { useParams } from "react-router-dom";

function User() {
    const param = useParams()
    return (
        <div>This is user: {param.username}</div>
    )
}

export default User