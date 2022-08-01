const posts = [
    {name:'Post 1', content:'Content 1'},
    {name:'Post 2', content:'Content 2'},
    {name:'Post 3', content:'Content 3'}
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.name, post.content);
    })
    console.log('*************************')
};


const addPost = (newPost) => {

    return new Promise((resolve, reject) => {
        
        if(newPost.name == null | newPost.content == null) {
            reject('Eklenecek post bulunamadı!');
        }

        posts.push(newPost);
        resolve(posts);
    });
};

async function showPosts() {
    try {
        //await addPost({});
        await addPost({name: 'Post New', content: 'Content New'});
        listPosts();    
    } catch (error) {
        console.log(error)
    }
}

showPosts();
