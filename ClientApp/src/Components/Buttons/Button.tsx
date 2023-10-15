import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    className?: string,
    onClick: VoidFunction
};

function Button(props: PropsWithChildren<Props>): JSX.Element {
    const navigate = useNavigate();
    return (
    <button 
        className={`bg-white dark:bg-black hover:bg-stone-200 dark:hover:bg-stone-700 text-gray-800 dark:text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${props.className}`}
        onClick={props.onClick}
    >
        {props.children}
    </button>);
}

export default Button;
