import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMessages } from '../../../Redux/ActionCreators/chatgpt.action.creators';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import ChatGPTResponse from '../../../Classes/ChatGPT/ChatGPTResponse/ChatGPTResponse';

function ChatGPTTable(): JSX.Element {

    const dispatch = useDispatch();
    const responses = useSelector((store: RootState) => store.responseReducer);

    useEffect(() => {
        dispatch(getMessages());
    }, []);

    return (
        <>
            {responses?.map((response: ChatGPTResponse, i: number) => {
                console.log(response)
                return (
                    <div key={i} style={{ textAlign: "left", margin: "1em" }}>
                        <div>
                            <p>Id: {response.id}</p>
                            <p>Prompt: {response.request.prompt}</p>
                            <p>Response: {response.choices.map((choice) => {
                                    return (choice.message.content)
                                })}
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ChatGPTTable;