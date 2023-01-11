import { MapContainer } from 'react-leaflet';
import MapComponent from '../mapComponent/MapComponent';
import RequestTable from '../requestTable/RequestTable';
import { useAppSelector } from '../../hooks/redux';

import './App.scss';

function App() {
    const { center } = useAppSelector(state => state.requestReducer);

    return (
        <div className="App">
            <RequestTable />
            <MapContainer
                className='map__container'
                center={center}
                zoom={10}>
                <MapComponent />
            </MapContainer>

        </div>
    );
}

export default App;
