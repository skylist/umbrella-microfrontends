import { useEffect, useState } from "react"

export default function useMessage() {
    const [message, setMessage] = useState()

    useEffect(() => {
        const storedMessage = localStorage.getItem('message')
        setMessage(storedMessage)
    }, [])

    return message
}