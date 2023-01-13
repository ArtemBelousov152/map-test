import { Polyline } from 'react-leaflet'
import { useAppSelector } from '../../hooks/redux';

const Rout = () => {
    const {rout } = useAppSelector(state => state.requestReducer)

    if (rout === null) {
        return null;
    }
    return (
        <Polyline pathOptions={{color: 'blue'}} positions={rout}/>
        )
}

export default Rout