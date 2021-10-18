import { useContext } from "react";
import { allContext } from '../Context/AuthProvider';

const useProviderContext = () => {
    return useContext(allContext)
}

export default useProviderContext;