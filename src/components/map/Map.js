import { MapContainer, TileLayer } from "react-leaflet"
import { useAppSelector } from "../../hooks/redux";
import Markers from '../markers/Markers';
import Rout from '../rout/Rout';

import './map.scss';

const Map = () => {
    const { center } = useAppSelector(state => state.requestReducer);

    return (
        <MapContainer
            className='map__container'
            center={center}
            zoom={10}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers/>
            <Rout/>
        </MapContainer>
    )
}

export default Map;