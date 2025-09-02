import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

// Call this function when the user clicks on the "Login" button
export function signInWithGoogle() {
  return signInWithRedirect(auth, provider);
}

// Call this function on page load when the user is redirected back to your site
export async function handleRedirect() {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log("User signed in:", user);
      return { user, token };
    }
    return null;
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData?.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
    console.error("Sign in error:", { errorCode, errorMessage, email });
    throw error;
  }
}

// Check current authentication state
export function getCurrentUser() {
  return auth.currentUser;
}

// Sign out
export function signOut() {
  return auth.signOut();
}