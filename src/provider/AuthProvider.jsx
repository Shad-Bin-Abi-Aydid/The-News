import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);

    // Create new user with email and password
    const createUserEP = (email, password) =>{

        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In user with email and password
    const userLogin = (email, password) =>{

        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);

    }

    // SignOut user
    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }

    // Update user profile
    const updateUserProfile = (updateData) =>{

        return updateProfile(auth.currentUser,(updateData))
    }

     useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoader(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    console.log(user)

    const authInfo = {
        user,
        setUser,
        createUserEP,
        logOut,
        userLogin,
        loader,
        updateUserProfile,

    }

    console.log(user)

   


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;