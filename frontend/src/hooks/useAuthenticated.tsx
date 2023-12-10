import { useEffect, useState } from "react"
import { IUser } from "../types/IUser"
import { jwtDecode } from "jwt-decode"
import { useAppSelector } from "./store"

const useAuthenticated = () => {
    const {users} = useAppSelector(state => state.data)
    const [token, setToken] = useState<string | null>(null)
    const [currentUser, setCurrentUser] = useState<IUser | null>(null)

    function getToken() {
        const tokenStorage = localStorage.getItem("token")
        setToken(tokenStorage)
    }

    useEffect(() => {
        getToken()
    }, [])

    useEffect(() => {
        if (token && users) {
            const userAuth : {username : string} = jwtDecode(token)
            const userSearch =  users.find((user) => user.email === userAuth.username)

            if (userSearch) {
                setCurrentUser(userSearch)
            }
        }
    }, [token, users])

    return {token, currentUser}
}

export default useAuthenticated