import { Table, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { requestSlice } from '../../store/reducers/requestSlice';
import useHttp from '../../hooks/useHttp';

import './requestTable.scss';

const RequestTable = () => {
    const { columns, requests, urlParams, urlPath, isLoading, error } = useAppSelector(state => state.requestReducer)
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

    const spinOrError = () => {
        if (error) {
            return <h2 className='table__error'>Что-то пошло не так</h2>
        }
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
                size='small'
            />
            {spinOrError()}
        </div>

    )

}

export default RequestTable;