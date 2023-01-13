import { Table } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { requestSlice } from '../../store/reducers/requestSlice';
import useHttp from '../../hooks/useHttp';
import Error from '../error/Error';

import './requestTable.scss';

const RequestTable = () => {
    const { columns, requests, urlParams, urlPath, isLoading } = useAppSelector(state => state.requestReducer)
    const dispatch = useAppDispatch();
    const { setActiveRequest, getRequest } = requestSlice.actions
    const { request } = useHttp();

    const tableSize = () => {
        const widthScreen = window.innerWidth

        if (widthScreen <= 800) {
            return 'small'
        } 
        return 'large'
    }

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
                loading={isLoading}
                dataSource={requests}
                columns={columns}
                pagination={false}
                size={tableSize()}
            />
            <Error/>
        </div>

    )

}

export default RequestTable;