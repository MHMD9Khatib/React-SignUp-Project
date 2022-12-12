import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


// function Login(){
//     const onSuccess=(res) =>{
//         console.log("log success", res.profileObj);
//     }
//     const onFailure=(res) =>{
//         console.log("log Unsuccess", res);
//     }
//     return(
//         <div id='signInButton'>
//             <GoogleOAuthProvider 
                // clientId={clientId}
                // buttonText='Login'
                // onSuccess={onSuccess}
                // onFailure={onFailure}
                // cookiePolicy={'single-host_origin'}
                // isSignedIn={true}
//             />
//         </div>
//  git commit -m "signUp with validation and react oauth google"   )
// git push -u origin main }

function Login() { 
    const login = useGoogleLogin({
        onSuccess: async response => {
            try{
             const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                headers: {
                    "Authorization": `Bearer ${response.access_token}`
                }
             })
             console.log(res.data);
            } catch(err) {
                console.log("error",err);
            }
        
        }
      });
  return (

    <button className="google" onClick={login}>
    <svg width="30" height="17" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.4529 10.2118H20.7175V10.1739H12.5001V13.8261H17.6601C16.9073 15.9521 14.8845 17.4783 12.5001 17.4783C9.47469 17.4783 7.0218 15.0254 7.0218 12C7.0218 8.97463 9.47469 6.52174 12.5001 6.52174C13.8966 6.52174 15.1671 7.04857 16.1344 7.90911L18.717 5.32657C17.0863 3.80681 14.905 2.86957 12.5001 2.86957C7.45778 2.86957 3.36963 6.95772 3.36963 12C3.36963 17.0423 7.45778 21.1304 12.5001 21.1304C17.5423 21.1304 21.6305 17.0423 21.6305 12C21.6305 11.3878 21.5675 10.7902 21.4529 10.2118Z" fill="#FFC107"/>
      <path d="M4.42236 7.75024L7.42217 9.95022C8.23386 7.94061 10.1996 6.52174 12.5001 6.52174C13.8966 6.52174 15.1671 7.04857 16.1344 7.90911L18.717 5.32657C17.0863 3.80681 14.905 2.86957 12.5001 2.86957C8.99306 2.86957 5.95171 4.8495 4.42236 7.75024Z" fill="#FF3D00"/>
      <path d="M12.5 21.1304C14.8583 21.1304 17.0013 20.2279 18.6215 18.7602L15.7956 16.3689C14.8789 17.0633 13.7394 17.4783 12.5 17.4783C10.1251 17.4783 8.10867 15.964 7.34902 13.8507L4.37158 16.1448C5.88267 19.1017 8.95141 21.1304 12.5 21.1304Z" fill="#4CAF50"/>
      <path d="M21.4528 10.1739H20.7174H12.5V13.8261H17.6601C17.2985 14.8473 16.6416 15.728 15.7943 16.3694L15.7956 16.3685L18.6215 18.7597C18.4215 18.9414 21.6304 16.5652 21.6304 12C21.6304 11.3878 21.5674 10.7523 21.4528 10.1739Z" fill="#1976D2"/>
    </svg>
    Sign up with Google</button>
//     <GoogleLogin
//   onSuccess={credentialResponse => {
//     console.log(credentialResponse.credential);
//     var decoded = jwt_decode(credentialResponse.credential);
//     console.log(decoded);

//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
// />
  );
}




export default Login;