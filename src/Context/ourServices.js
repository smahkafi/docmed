import { useEffect, useState } from "react"

const ourServices = () => {
    const [ourServices, setOutSevices] = useState([])
    useEffect(() => {
        fetch('docmed.json')
            .then(res => res.json())
            .then(data => setOutSevices(data))
    }, [])
    return ourServices;
};

export default ourServices;