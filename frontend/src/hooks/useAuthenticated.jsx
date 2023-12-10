import { useEffect, useState } from "react"

const useAuthenticated = () => {
    const [token, setToken] = useState(null)

    function getToken() {
        const tokenStorage = localStorage.getItem("token")
        setToken(tokenStorage)
    }

    useEffect(() => {
        getToken()
    }, [])

    return {token}
}

export default useAuthenticated