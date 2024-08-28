  new Promise(function(resolve,reject){
     setTimeout(function (){console.log("Asyn taask 2");resolve();},1000)
 }).then(function(){
    console.log("solved");
    
 }); 

const promise1 =  new Promise(function(resolve,reject){ //ES6
setTimeout(function(){
    let error = false;
    if(!error){
        resolve({usserName:"Parag Das", password: "123"});
    }else{
        reject("ERROR");
    }
},1000) 
 }).then(function(user){
    console.log(user);
    console.log("Printing user name only ---- ");
    return user.usserName;
 }).then(function(usserName){
    console.log(usserName);
 }).catch((err)=>console.log(err)).finally(()=>{console.log("FINALLY");
 });


  const promise2 =  new Promise(function(resolve,reject){ //ES6
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({usserName:"Parag Das", password: "123"});
        }else{
            reject("ERROR");
        }
    },1000) 
     });

async function consumedPromise(){
    try {
    const response = await promise2;
    console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumedPromise();


async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log("-----------------------------------------");
        
        console.log(data);

        console.log("-----------------------------------------");

    } catch (error) {
        console.log(error);
    }
}
getAllUser();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
const data  = response.json();
console.log(data);

})
.catch((err)=>{console.log(err);})