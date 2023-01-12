import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColumn, IRequest } from "../../models/interfaces";
import { v4 as uuidv4 } from 'uuid';

interface requestState {
    requests: IRequest[];
    columns: IColumn[];
    isLoading: boolean;
    activeRequest: any;
    center: number[];
    bound: Array<number[]>;
    rout: Array<number[]>;
    urlPath: string;
    urlParams: string;
    error: boolean;
}

const initialState: requestState = {
    requests: [
        {
            inLat: 59.84660399,
            inLng: 30.29496392,
            outLat: 59.82934196,
            outLng: 30.42423701,
            number: "№1",
            key: uuidv4()
        },
        {
            inLat: 59.82934196,
            inLng: 30.42423701,
            outLat: 59.82761295,
            outLng: 30.41705607,
            number: "№2",
            key: uuidv4()
        },
        {
            inLat: 59.83567701,
            inLng: 30.38064206,
            outLat: 59.84660399,
            outLng: 30.29496392,
            number: "№3",
            key: uuidv4()
        },
        {
            inLat: 59.84660399,
            inLng: 30.29496392,
            outLat: 59.82761295,
            outLng: 30.41705607,
            number: "№4",
            key: uuidv4()
        },
        {
            inLat: 59.83567701,
            inLng: 30.38064206,
            outLat: 59.84660399,
            outLng: 30.29496392,
            number: "№5",
            key: uuidv4()
        },
    ],
    columns: [
        {
            title: 'Номер заявки',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Координаты ОТ lat',
            dataIndex: 'inLat',
            key: 'inLar',
        },
        {
            title: 'Координаты ОТ lng',
            dataIndex: 'inLng',
            key: 'inLng',
        },
        {
            title: 'Координаты ДО lat',
            dataIndex: 'outLat',
            key: 'outLat',
        },
        {
            title: 'Координаты ДО lng',
            dataIndex: 'outLng',
            key: 'outLng',
        },
    ],
    isLoading: false,
    activeRequest: null,
    center: [50, 51],
    bound: [],
    rout: [],
    urlParams: 'overview=false&steps=true&alternatives=true',
    urlPath: 'https://router.project-osrm.org/route/v1/driving/',
    error: false
}

export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        setPolyline: (state, action: PayloadAction<Array<number[]>>) => {
            state.rout = [[state.activeRequest.inLat, state.activeRequest.inLng], ...action.payload, [state.activeRequest.outLat, state.activeRequest.outLng]];
            state.isLoading = false
        },
        setActiveRequest: (state, action: PayloadAction<IRequest>) => {
            state.activeRequest = action.payload;
            state.bound = [[action.payload.inLat, action.payload.inLng], [action.payload.outLat, action.payload.outLng]];
        },
        setError: (state) => {
            state.error = true;
        }
    }
})

export default requestSlice.reducer;   