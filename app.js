let arrive= true;

if(1==1){
    arrive=false;
    
}
const ride = new Promise((resolve,reject)=>{
    if(arrive){
        resolve("driver arrived")
    }
    else{
        reject("he rejected you")
    }
});

ride
   .then((value=>{
    console.log(value)
}))
   .catch(error =>{
    console.error(error);
    
   })


