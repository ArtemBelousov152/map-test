import { useAppSelector } from '../../hooks/redux';

import './error.scss';

const Error = () => {
    const {error} = useAppSelector(state => state.requestReducer)

    if (error) { 
        return (
             <h2 className='error'>Что-то пошло не так</h2>
        )
    } else {
        return (
            null
        )
    }
}

export default Error;