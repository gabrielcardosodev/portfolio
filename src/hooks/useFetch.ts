import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<Data = unknown>(url: string) {
    const [data, setData] = useState<Data | null>(null)

    useEffect(() => {
        axios.get(url).
        then(response => {
            setData(response.data)
        }).
        catch(error => {
            console.log(error)
        })
    }, [])

    return {data}
}
