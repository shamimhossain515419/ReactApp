import { createContext, useEffect, useState } from "react";


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";




export const AuthContact = createContext();
const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const GoogelSing = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const updateProfilePhoto = (name, photo) => {
        return updateProfile(auth?.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubcript = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            setLoading(false)
        })
        return () => {
            unsubcript()
        }
    }, []);

    const LogOut = () => {
        return signOut(auth)
    }

    const userInfo = {
        CreateUser,
        LogOut,
        loading,
        GoogelSing,
        Login, updateProfilePhoto,
        user
    }

    return (
        <div>
            <AuthContact.Provider value={userInfo}>
                {children}
            </AuthContact.Provider>
        </div>
    );
};

export default AuthProvider;