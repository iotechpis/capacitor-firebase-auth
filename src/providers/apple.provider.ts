import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import { SignInOptions } from '../definitions';


export const appleSignInWeb: (options: { providerId: string, data?: SignInOptions }) => Promise<any>
    = async () => {
        const provider = new OAuthProvider('apple.com');
        getAuth().useDeviceLanguage();
        const userCredential = await signInWithPopup(getAuth(), provider);
        return userCredential;
    }
