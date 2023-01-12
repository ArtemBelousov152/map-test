import { Table, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { requestSlice } from '../../store/reducers/requestSlice';
import useHttp from '../../hooks/useHttp';

import './requestTable.scss';

const RequestTable = () => {
    const { columns, requests, urlParams, urlPath, isLoading } = useAppSelector(state => state.requestReducer)
    const dispatch = useAppDispatch();
    const { setActiveRequest, getRequest } = requestSlice.actions
    const { request } = useHttp();

    const changeActiveRequest = (item) => {
        const { inLat, inLng, outLat, outLng } = item   

        dispatch(setActiveRequest(item))
        dispatch(getRequest(
            request(`${urlPath}${inLng},${inLat};${outLng},${outLat}?${urlParams}`)
        ))
    }

    return (
        <div className='table'>
            <Table
                rowSelection={
                    {
                        type: 'radio',
                        onChange: (selectedRowKeys, selectedRows) => {

                            changeActiveRequest(...selectedRows)

                        }
                    }}
                dataSource={requests}
                columns={columns}
                pagination={false}
            />
            <Spin 
                tip='Загрузка'
                size='large' 
                spinning={isLoading}/>
        </div>

    )

}

export default RequestTable;