
export interface IRequest {
    number: string;
    inLat: number;
    inLng: number;
    outLat: number;
    outLng: number;
    key: string;
}

export interface IColumn { 
    title: string;
    dataIndex: string;
    key: string;
}