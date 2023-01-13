import { Marker, Popup, useMap } from 'react-leaflet'

import { useAppSelector } from "../../hooks/redux";

const Markers = () => {
    const { activeRequest, bound } = useAppSelector(state => state.requestReducer)
    const map = useMap();

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

export default Markers
