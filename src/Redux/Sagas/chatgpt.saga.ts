import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import * as ActionTypes from "../ActionTypes/chatgpt.action.types.ts";
import * as ActionCreators from "../ActionCreators/chatgpt.action.creators.ts";
import { getChatGPTResponses, postChatGPTResponse } from '../Services/chatgpt.services.ts';

function* getAllPrompts({ callback }: ActionTypes.GetPromptsAction) {
    try {
        let { data } = yield call(getChatGPTResponses);
        //   yield put(ActionCreators.setPrompts(data));
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}