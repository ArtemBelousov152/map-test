import { Table } from 'antd';

import './App.scss';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '111',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Joasdhn',
    age: 421,
    address: '10 asdasdDowning Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function App() {
    return (
        <div className="App">
            <Table 
                rowSelection={
                    {
                        type:'radio',
                        onChange: (selectedRowKeys, selectedRows) => {
                            console.log(...selectedRows)
                        }
                    }}
                dataSource={dataSource}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (e) => {console.log(record.key)}
                    }
                }}
            />
        </div>
    );
}

export default App;
