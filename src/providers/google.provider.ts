import { signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth';

import { SignInOptions } from '../definitions';

export const googleSignInWeb: (options: { providerId: string, data?: SignInOptions }) => Promise<any>
    = async () => {
        const provider = new GoogleAuthProvider();
        getAuth().useDeviceLanguage();
        const userCredential = await signInWithPopup(getAuth(), provider);
        return userCredential;
    }
