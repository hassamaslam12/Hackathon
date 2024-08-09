import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
import { child, get, getDatabase, push, ref, remove, set } from "firebase/database";
import app from "./FirebaseConfig";

// ************* Authentication ****************

const auth = getAuth(app)



const signupUser = (email:string,password:string,name:string) =>{
    return new Promise((resolve, reject) =>{

        createUserWithEmailAndPassword(auth,email,password)
        .then((res:any)=>{
            resolve("success")
            console.log(res);
            // writeData(`users/${res.user.uid}`,{name:name,email:email})
        })
        .catch(()=>reject("error"))
    })
}
const loginUser = (email:string,password:string) =>{

    return new Promise((resolve, reject) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            resolve("success")
            console.log(res);
            
        })
        .catch((err) =>{
            console.log(err);
            
        })
    })
}

const checkUser = () =>{
    return new Promise((resolve, reject) =>{

        onAuthStateChanged(auth,(user)=>{
            if(user){
                
                resolve(user)
            }else{
                reject("not currently logged in")
            }
        })
    })  
}



/////////////////// Realtime Database ///////////////
const database = getDatabase(app);


const writeData = (location:string,data:any,list?:boolean) =>{

    return new Promise<any>((resolve,reject)=>
    {
        let dbRef = ref(database,location);
        if(list){
            dbRef = push(dbRef)
        }
        set(dbRef,data).then(()=>{
            resolve(data);
            
        })
        .catch(()=>{
            reject();
        })
    })
    
    }
    

    const getDatafromFirebase = (location: string)=>{
        const dbRef = ref(database);
    
        return new Promise((resolve, reject)=>{
    
        get(child(dbRef,location)).then((snapshot)=>{
            if(snapshot.exists()){
                console.log(snapshot);
                resolve(snapshot);
            }else{
                console.log("no data available" );
                
            }
        }
    ).catch(err => {
        console.log(err)
        reject(err);
    });
    })
    
    }
    
    const delRecord  = (nodeName:string) => {
        return new Promise((resolve, reject) =>{
          const reference = ref(database,nodeName);
          remove(reference)
          .then(() => {resolve("success");})
          .catch(()=>reject("error"))
        }
      )
      }
    


export {
    signupUser,
    loginUser,
    checkUser,
    writeData,
    getDatafromFirebase,
    delRecord
}