

//    // console.log(auth);
//    const auth = getAuth(app)

/* sign up */


// let signUp = document.getElementById('signUp')
// let errorMessage = document.getElementById('error')
// let userName = document.getElementById('userName')


// signUp.addEventListener('submit', async(e)=>{
//     e.preventDefault()
//     const email = signUp.email.value
//     const password = signUp.password.value
//     const username = signUp.username.value
//     const gender = signUp.gender.value
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password)
//         addDoc(colRef, {
//             username: username,
//             email: email,
//             gender: gender,
//             password: password
//         }).then(()=>{
//             console.log('user created inside db successfully');
//         })

//         console.log('user created and logged in');
//     } catch (error) {
//         console.log(error, 'neee');
//         errorMessage.innerHTML = error.message
//     }
// })

// onAuthStateChanged(auth, (user)=>{
//     userName.innerHTML = `
//     <p>hello welcome ${user ? user.email : 'guest'}</p>
//     `
// })

// signup end


/* logout user */

let logout = document.getElementById('logout')

logout.addEventListener('click', async()=>{
   try {
    const res = await signOut(auth)
    alert('user logged out')
   } catch (error) {
    console.log(error);
   }
})


/* login */

let liveOption = document.getElementById('liveOption')
let errorLogin = document.getElementById('errorLogin')
liveOption.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const email = liveOption.email.value
    const password = liveOption.password.value

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log('user logged in success');
    } catch (error) {
        console.log(error);
        errorLogin.innerHTML = error.message
    }
})




/* upload blog */

let blog = document.querySelector('.blog')
const fileInput = document.getElementById('file-input');


const blogDB = collection(db, 'blog')

blog.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const file = fileInput.files[0];
    // console.log(file);
    const storageRef = ref(storage, 'images/' + file.name)

    await uploadBytes(storageRef, file)
    const downlownLink = await getDownloadURL(storageRef)
    console.log(downlownLink);

    addDoc(blogDB, {
        title: blog.title.value,
        description: blog.description.value,
        image: downlownLink
    }).then(()=>{
        console.log('succesfully ');
    })


    // const storageRef = ref(storage, "images/", image.name);

})

