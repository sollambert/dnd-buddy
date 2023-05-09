import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import * as ActionTypes from "../ActionTypes/campaign.action.types";
import * as ActionCreators from "../ActionCreators/campaign.action.creators";
import { postCampaign, getCampaigns, deleteCampaign } from '../Services/campaign.services.ts';

function* addCampaign({ payload, callback }: ActionTypes.AddCampaignAction) {
    try {
        let { data } = yield call(postCampaign, payload);
        yield put(ActionCreators.setCampaign(data));
        yield put(ActionCreators.getCampaigns());
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* getAllCampaigns({ callback }: ActionTypes.GetCampaignsAction) {
    try {
        let { data } = yield call(getCampaigns);
        yield put(ActionCreators.setCampaigns(data));
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* getCampaign() { }

function* deleteCampaignById({ payload, callback }: ActionTypes.DeleteCampaignAction) {
    try {
        let { data } = yield call(deleteCampaign, payload);
        yield put(ActionCreators.getCampaigns());
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* watcherSaga() {
    yield takeLatest(ActionTypes.ADD_CAMPAIGN, addCampaign);
    yield takeLatest(ActionTypes.GET_CAMPAIGN, getCampaign);
    yield takeLatest(ActionTypes.GET_CAMPAIGNS, getAllCampaigns);
    yield takeLatest(ActionTypes.DELETE_CAMPAIGN, deleteCampaignById);
}

export default watcherSaga;