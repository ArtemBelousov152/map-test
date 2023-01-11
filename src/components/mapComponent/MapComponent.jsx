import './mapComponent.scss';
import { TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet'
import { useAppSelector } from '../../hooks/redux';

const MapComponent = () => {
    const { activeRequest, bound, rout } = useAppSelector(state => state.requestReducer)
    const map = useMap();

    const rendrerMarkers = () => {
        if (activeRequest === null) {
            return null;
        }
        const startData = [activeRequest.inLat, activeRequest.inLng]
        const finishData = [activeRequest.outLat, activeRequest.outLng]
        map.fitBounds(bound)

        return (
            <>
                <Marker position={startData}>
                    <Popup>
                        Точка погрузки
                    </Popup>
                </Marker>
                <Marker position={finishData}>
                    <Popup>
                        Точка выгрузки
                    </Popup>
                </Marker>
            </>
        )
    }

    const renderRout = () => {
        if (rout === null) {
            return null;
        }
        return (

            <Polyline pathOptions={{color: 'blue'}} positions={rout}/>

            )

    }

    return (

        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {rendrerMarkers()}
            {renderRout()}
        </>

    )
}

export default MapComponent;