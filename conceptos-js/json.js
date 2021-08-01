
// const url = `https://jsonplaceholder.typicode.com/posts/`

const id = prompt('id para buscar')

const getPost = async(id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const res = await fetch(url)
    const post = await res.json()
    console.log(post);
} 

const fetchPost = async() => {
        await getPost(id)
    
}

fetchPost()