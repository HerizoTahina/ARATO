import { useState } from "react"

const useLoader = () => {
    const [loading, setLoading] = useState(false)

    function toggleLoading() {
        setLoading(currentValue => !currentValue)
    }

    return {loading, toggleLoading}
}

export default useLoader