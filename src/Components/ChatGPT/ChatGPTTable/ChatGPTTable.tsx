import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMessages } from '../../../Redux/ActionCreators/chatgpt.action.creators';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { Message } from '../../../Types/ChatGPT/ChatGPTResponse/ChatGPTResponse';

function ChatGPTTable(): JSX.Element {

    const dispatch = useDispatch();
    const messages = useSelector((store: RootState) => store.messageReducer);

    useEffect(() => {
        dispatch(getMessages());
    }, []);

    return (
        <>
            {messages?.map((message: Message, i: number) => {
                // console.log(message)
                return (
                <div key={i} style={{textAlign: "left", margin: "1em"}}>
                    {message.content}
                </div>
                )
            })}
        </>
    )
}

export default ChatGPTTable;