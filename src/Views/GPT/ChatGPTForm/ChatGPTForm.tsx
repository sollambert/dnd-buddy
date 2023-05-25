import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendPrompt, getPrompts, getMessages } from '../../../Redux/ActionCreators/chatgpt.action.creators';
import FormInput from '../../../Components/FormInput';

import ChatGPTRequest from '../../../Classes/ChatGPT/ChatGPTRequest/ChatGPTRequest';

type Props = {
    width?: string;
};

function ChatGPTForm({width}: Props): JSX.Element {

    const [request, setRequest] = useState<ChatGPTRequest>(
        new ChatGPTRequest('', 1.0)
    );

    function handleInput(event: any, key: string) {
        const inputKey = key as keyof typeof request;
        setRequest({ ...request, [inputKey]: event.target.value });
    }

    const handleSubmit = (): void => {
        if (request.prompt !== "") {
            dispatch(sendPrompt(request, () => setRequest(new ChatGPTRequest('', 1.0))));
        } else {
            alert("Add a prompt dingus!");
        }
    };

    const dispatch = useDispatch();

    return (
        <div>
            <FormInput
                name="prompt"
                display="Prompt"
                handler={handleInput}
                value={request.prompt}
                width={width ? width : "80vw"}
            />
            <button
                onClick={() => {
                    handleSubmit();
                }}
            >
                SEND
            </button>
        </div>
    );
}

export default ChatGPTForm;