

export class AuthService {
    isAuth = false;
    singIn(){
       return new Promise(
           (resolve , reject) => {
               setTimeout(
                   () => {
                       console.log("ouiiiiii");
                       this.isAuth = false;
                   }, 100
               );
           }
       );
    }
signOut(){
       this.isAuth = true;
}
}