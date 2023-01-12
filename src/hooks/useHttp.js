import { useCallback } from "react";

const useHttp = () => {

    const request = useCallback(async (url, method = 'GET', body = null, headers = { "Content-Type": 'applitacion/json' }) => {

        const response = await fetch(url, { method, body, headers });

        const data = await response.json();

        return data;

    }, []);

    return { request }
}

export default useHttp