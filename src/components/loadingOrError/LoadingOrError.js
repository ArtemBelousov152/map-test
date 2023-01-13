import { useAppSelector } from "../../hooks/redux"
import Error from '../error/Error';
import { Spin } from 'antd';

const LoadingOrError = () => {

    const { error, isLoading } = useAppSelector(state => state.requestReducer)
    if (error) {
        return (
            <Error />
        )
    } else {
        return (
            <Spin
                tip='Загрузка'
                size='large'
                spinning={isLoading} />
        )
    }
}

export default LoadingOrError