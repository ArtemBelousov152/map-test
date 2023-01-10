import { Table } from 'antd';
import MapComponent from '../mapComponent/MapComponent';

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
let result;

const getData = async () => {
   await fetch('http://router.project-osrm.org/route/v1/driving/13.388860,52.517037;13.397634,52.529407;13.428555,52.523219?overview=false')
   .then(res => res.json())
   .then(res => result = res)
   console.log(result);
}

function App() {
  getData();
    return (
        <div className="App">
            {/* <Table 
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
              /> */}
              <MapComponent/>
        </div>
    );
}

export default App;
