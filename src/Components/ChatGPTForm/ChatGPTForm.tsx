import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ChatGPTRequest from '../../Types/ChatGPT/ChatGPTRequest/ChatGPTRequest';
import { sendPrompt } from '../../Redux/ActionCreators/chatgpt.action.creators';
import FormInput from '../FormInput';

function ChatGPTForm(): JSX.Element {
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