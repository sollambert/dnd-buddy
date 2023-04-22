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
        <ul>
            {messages?.map((message: Message, i: number) => {
                return (
                <li key={i}>
                    {JSON.stringify(message)}
                </li>)
            })}
        </ul>
    )
}

export default ChatGPTTable;