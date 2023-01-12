import { MapContainer } from "react-leaflet"
import MapComponent from "../mapComponent/MapComponent"
import { useAppSelector } from "../../hooks/redux";

import './map.scss';

const Map = () => {
    const { center } = useAppSelector(state => state.requestReducer);

    return (
        <MapContainer
            className='map__container'
            center={center}
            zoom={10}>
            <MapComponent />
        </MapContainer>
    )
}

export default Map;