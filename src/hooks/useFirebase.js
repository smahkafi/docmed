import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword,  signInWithPopup, sendEmailVerification, signOut, onAuthStateChanged, GoogleAuthProvider, getAuth} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };
    

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError("");
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const getName = (e) => {
        setName(e?.target?.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setEmail(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                verifyEmail(email);
                setError("");
            })
            .catch(error => {
                setError(error.message)
            })
    

    const verifyEmail = (email) => {
        sendEmailVerification(auth.email)
            .then(result => { })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
         
    }
    return{
        isLoading,
        user,
        error,
        signInUsingGoogle,
        handleLogin,
        handleEmailChange,
        handlePasswordChange,
        handleResetPassword,
        logOut,
        setUser,
        getName
    }
}
export default useFirebase;