'use client'

import fetcher from "lib/fetcher";
import { Views } from "lib/types";
import { useEffect } from "react";
import useSWR from "swr"

export default function ViewCounter({ slug }) {
    const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
    const views = new Number(data?.total)

    useEffect(() => {
        const registerView = () =>
            fetcher(`/api/views/${slug}`, {
                method: 'POST'
            })

        registerView()
    }, [slug])

    return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>
}