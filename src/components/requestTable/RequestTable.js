import { Table } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { requestSlice } from '../../store/reducers/requestSlice';

const RequestTable = () => {
    const { columns, requests } = useAppSelector(state => state.requestReducer)
    const dispatch = useAppDispatch();
    const { setActiveRequest, getRequest } = requestSlice.actions

    const changeActiveRequest = (item) => {
        dispatch(setActiveRequest(item))
    }

    return (
        <Table
            rowSelection={
                {
                    type: 'radio',
                    onChange: (selectedRowKeys, selectedRows) => {
                        
                        changeActiveRequest(...selectedRows)
                        dispatch(getRequest(...selectedRows))
                    }
                }}
            dataSource={requests}
            columns={columns}
        />
    )

}

export default RequestTable;