import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword,  signInWithPopup, sendEmailVerification, signOut, onAuthStateChanged, GoogleAuthProvider, getAuth} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError("");
            })
            .catch(error => {
                setError(error.message);
            })
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

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 8) {
            console.log('Password must be at least 8 characters')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            console.log("Password must contain 2 uppercase")
            return;
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
    }

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

        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })

    }
    return{
        user,
        error,
        signInUsingGoogle,
        handleLogin,
        handleEmailChange,
        handlePasswordChange,
        handleResetPassword,
        handleRegistration,
        logOut
    }
}

export default useFirebase;