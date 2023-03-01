// //Using promises
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringsTicks = new Promise( (resolve,reject) =>{
//     setTimeout( ()=> {
//         resolve('ticket');
//     },3000)
// });
// const getPopcorn = promiseWifeBringsTicks.then( (t) =>{
//     console.log('husband: we should go in')
//     console.log('wife: no Im hungry')
//     return new Promise( (resolve,reject) =>{
//         resolve(`${t} popcorn`)
//     })
// });

// const getButter = getPopcorn.then( (t) =>{
//     console.log('husband: we should go in')
//     console.log('wife: I need butter on my popcorn')
//     return new Promise( (resolve,reject) =>{
//         resolve(`${t} butter`)
//     })
// });

// const getColdDrinks = getButter.then( (t) =>{
//     console.log('husband: we should go in')
//     console.log('wife: I need Cold Drinks')
//     return new Promise( (resolve,reject) =>{
//         resolve(`${t} Cold Drinks`)
//     })
// });
// getColdDrinks.then( (t) => console.log(t)
// )

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// // Using Async
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async() => {
//     const promiseWifeBringsTicks = new Promise( (resolve,reject) =>{
//     setTimeout( ()=> {resolve(`ticket`);},3000)
// });

// const getPopcorn = new Promise( (resolve, reject) =>{resolve(`popcorn`)});

// const addButter = new Promise( (resolve, reject) =>{resolve(`butter`)});

// const getColdDrinks = new Promise( (resolve, reject) =>{resolve(`coldDrinks`)});


// let ticket = await promiseWifeBringsTicks;
// console.log(`wife: I have the ${ticket}`);
// console.log('husband: we should go in');
// console.log('wife: no, I am hungry');

// let popcorn = await getPopcorn;
// console.log(`husband: I got you some${popcorn}`);
// console.log('wife: I need butter on my popcorn');

// let butter = await addButter;
// console.log(`husband: I got some ${butter}`);
// console.log('husband: we should get in');
// console.log('wife: I need some cold drinks');

// let coldDrinks = await getColdDrinks;
// console.log(`husband: I got ${coldDrinks} for you`);
// console.log('husband: anything else?');
// console.log('wife: No, lets get in');

// return ticket;
// }


// preMovie().then( (m) => console.log(`person3 shows ${m}.`));
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// // Using promise.all in async 
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async() => {
//     const promiseWifeBringsTicks = new Promise( (resolve,reject) =>{
//     setTimeout( ()=> {resolve(`ticket`);},3000)
// });

// const getPopcorn = new Promise( (resolve, reject) =>{resolve(`popcorn`)});

// const getCandy = new Promise( (resolve, reject) =>{resolve(`Candy`)});

// const getCoke = new Promise( (resolve, reject) =>{resolve(`Coke`)});


// let ticket = await promiseWifeBringsTicks;

// let [popcorn, candy, coke]= await Promise.all([getPopcorn, getCandy, getCoke])

// console.log(`${popcorn}, ${candy}, ${coke}`)
// return ticket;
// }


// preMovie().then( (m) => console.log(`person3 shows ${m}.`));
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// Previous task(task 12) using async await:

// const posts = [{title:'Post one'},{title:'Post two'}]
// let lastActivitytime = new Date(); 
// function createPost(post){
//     const promise1 = new Promise( (resolve, reject) =>{
//                 posts.push(post);
//                     resolve();
//                 })
//     const promise2 = updateLastUserActivityTime();
//     return Promise.all([promise1 ,promise2])

// }
// function updateLastUserActivityTime (){
//     return new Promise( (resolve, reject) =>{
//         setTimeout( ()=>{
//         lastActivitytime = new Date();
//             resolve();
//         },1000);
//     })
// }
// function deletePost(){
//     return new Promise( (resolve, reject) =>{
//         setTimeout( ()=>{
//             if(posts.length>0){
//                 posts.pop();
//                 resolve();
//             }
//             else{
//                 reject('Error:No Posts Found');
//             }
//         },1000)
//     })
// }
// function printPost(){
//     posts.forEach( (post) =>{
//         console.log(post.title)
//     })
// }

// async function  newpost(post){
//     await createPost(post);
//     printPost();
//     console.log(lastActivitytime);
//     await deletePost();
//     printPost();
// }
// newpost({title:'Post three'});

function buyaCar(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
        resolve('Bought a Car.')

    },5000)
    })
}

function planTrip(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
        resolve('Plan a Trip to Goa.')
    },3000)
    })
}

function visitBeaches(){
    return new Promise( (resolve,reject)=>{
        resolve('Goa beaches visited');
    })
}

function goClubbing(){
    return new Promise( (resolve,reject)=>{
        resolve('Had a Great Night at club.')
    })
}
function backtohome(){
    return new Promise( (resolve,reject)=>{
        reject('Met with an accident');
    })
}

async function goaTrip(){
    try{
    const msg = await buyaCar();
    console.log(msg);
    const msg1 = await planTrip();
    console.log(msg1);
    const msg2 = await visitBeaches();
    console.log(msg2);
    const msg4 = await goClubbing();
    console.log(msg4);
    const msg5 = await backtohome();
    console.log(msg5)
    }catch(err){
            console.log(err);
        }
}
goaTrip();
