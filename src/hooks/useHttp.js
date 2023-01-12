import { useCallback } from "react";

const useHttp = () => {

    const request = useCallback(async (url, method = 'GET', body = null, headers = {"Content-Type": 'applitacion/json'}) => {
   
        try {
            const response = await fetch(url, {method, body, headers});

            if(!response.ok) {
                throw new Error(`Coult not fetch ${url}, status ${response.status}`);
            }

            const data = await response.json();

            return data;

        } catch(e) {
            throw e;
        }

    }, []);

    return {request}
}

export default useHttp