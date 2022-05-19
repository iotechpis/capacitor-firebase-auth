import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import { SignInOptions } from '../definitions';


export const facebookSignInWeb: (options: { providerId: string, data?: SignInOptions }) => Promise<any>
    = async () => {
        const provider = new FacebookAuthProvider();
        getAuth().useDeviceLanguage();
        const userCredential = await signInWithPopup(getAuth(), provider);
        return userCredential;
    }
