
import { SignInOptions } from '../definitions';

import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';

export const twitterSignInWeb: (options: { providerId: string, data?: SignInOptions }) => Promise<any>
    = async () => {
        const provider = new TwitterAuthProvider();
        getAuth().useDeviceLanguage();
        const userCredential = await signInWithPopup(getAuth(), provider);
        return userCredential;
    }
