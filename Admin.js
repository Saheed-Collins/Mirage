
let postlists = document.getElementById('postlists')
let forBlogPost = document.querySelector('.forBlogPost')

addBlogPost.addEventListener('click', async(e)=>{
    e.preventDefault()
    forBlogPost.style.display = "block"
})

function addNewPost(e) {
    // console.log(postlists);
    // e.preventDefault()
    // forBlogPost.style.display = "block"
}