let pagePostHeropage = document.getElementById('pagePostHeropage')
let postTagline = document.getElementById('postTagline')
let postHeading = document.getElementById ('postHeading')
let postSmall = document.getElementById ('postSmall')
let authorDate = document.getElementById ('authorDate')
let postImage = document.getElementById ('postImage')
let postBody = document.getElementById ('postBody')
let searchBar = document.getElementById ('searchBar')
let eachPost = document.getElementById ('eachPost')


function lookForPost() {


searchBar.addEventListener('keyup', e => {
    eachPost.forEach(post => {
        if (post.innerText.toLowerCase().includes(
            e.target.value.toLowerCase())) {
            post.style.display = 'block';
            return post;
        }
        else {
            post.style.display = 'none';
        }
    });
});
 
}
