import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
};

function BackButton({
}: Props): JSX.Element {
    const navigate = useNavigate();
    return (
    <div className={"nav-button"} onClick={() => {
        navigate(-1);
    }}
    style={{alignSelf:"center"}}>
        BACK
    </div>);
}

export default BackButton;
