import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


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

     useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoader(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUserEP,
        logOut,
        userLogin,
        loader,

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