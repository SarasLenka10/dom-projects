const posts = [{title:'Post one'},{title:'Post two'}]
let lastActivitytime = new Date(); 
function createPost(post){
    const promise1 = new Promise( (resolve, reject) =>{
                posts.push(post);
                    resolve();
                })
    const promise2 = updateLastUserActivityTime();
    return Promise.all([promise1 ,promise2])

}
function updateLastUserActivityTime (){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
        lastActivitytime = new Date();
            resolve();
        },1000);
    })
}
function deletePost(){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            if(posts.length>0){
                posts.pop();
                resolve();
            }
            else{
                reject('Error:No Posts Found');
            }
        },1000)
    })
}
function printPost(){
    posts.forEach( (post) =>{
        console.log(post.title)
    })
}

createPost({title:'Post three'}).then( () =>{
    printPost()
    console.log(lastActivitytime)
    deletePost().then(() =>{
        printPost();
    })
})




