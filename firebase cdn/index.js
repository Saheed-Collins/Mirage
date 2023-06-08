// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { collection,getFirestore,getDocs, addDoc,getDoc, onSnapshot, query,where, 
    // to get one particular item i databse
    doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMwRHUannTVxavgMBPs0eUlZsaAkTlN-k",
  authDomain: "fir-learn-4356a.firebaseapp.com",
  projectId: "fir-learn-4356a",
  storageBucket: "fir-learn-4356a.appspot.com",
  messagingSenderId: "494844415846",
  appId: "1:494844415846:web:feafce8a1ec09ba38802a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const db = getFirestore(app)

const colRef = collection(db, 'BlogPosts')



/* fetch data */
let blog = []



let display = document.getElementById('displayEachPost')
onSnapshot(colRef, (collins)=>{
  
  // display.innerHTML= ''

  collins.docs.forEach((sam)=>{
    //   console.log(sam.data(), );
      display.innerHTML+=
      `
    <div class=" grid-container gap-4 d-flex flex-wrap">
          <div class=" col-lg-4 col-md-4 col-12 bg-info w-100 ">

          <div class="box">
          <!-- input image -->
          <img src="${sam.data().file}" alt="">
          </div>

          <h6 class="mt-2 smallHeading">${sam.data().tagline} </h6>

          <a href="./EducationPagePost.html"> <h3 class="pt-1">${sam.data().title}</h3></a>

          <p> ${sam.data().blogDescrip}</p>

          <button class="p-2 px-4 Hoverbtn"> <a href="./EducationPagePost.html"> View Posts</a>
          </button>

          </div>
      </div> <br>
`
  })
})
// function showBlogOne(param){
//     console.log(param);
// }


// query item 

const que = query(colRef, where("author", "==", "efe"))

getDocs(que)
.then((sam)=>{
   sam.docs.forEach((elem)=>{
    console.log(elem.data(), 'im the one efe');
   })
})



/* upload data */


const form = document.querySelector('.formBlogData')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const title = form.title.value
  const blogDescrip = form.blogDescrip.value
  const author = form.author.value
  const tagline = form.tagline.value
  // const image = form.image.file

  addDoc(colRef, {title, blogDescrip, tagline, author, isPublish: false, })
  .then(()=>{
      form.reset()
      alert('blog posted successfully')
  }).catch((error)=>{
      console.log(error.message);
  })

})


const oneDocRef = doc(db, 'BlogPosts', 'UYQtQcb9WxBUbdtx4Kxu')

getDoc(oneDocRef)
.then((sam)=>{
    console.log(sam.data(), 'i M GWTTING OLY ONE ITE');
})



{/* <div class="box">
                        <!-- input image -->
                        <img src="${sam.data().file}" alt="">
                    </div> */}




// const display = document.querySelector("#display_post")

let menuOpt = document.getElementById('menuOpt')
let menuOpt2 = document.getElementById('menuOpt2')
let menuOpt3 = document.getElementById('menuOpt3')
let menuOpt4 = document.getElementById('menuOpt4')


function scrollTopButt() {
  menuOpt2.style.backgroundColor = "#ee4400";
  menuOpt3.style.backgroundColor = "";
  menuOpt4.style.backgroundColor = "";
  menuOpt.style.backgroundColor = ""; 


}

function readersPost() {
  menuOpt2.style.backgroundColor = "";
  menuOpt3.style.backgroundColor = "#ee4400";
  menuOpt4.style.backgroundColor = "";
  menuOpt.style.backgroundColor = "";


}

// let displayDashBud = document.getElementById("displayDashBud")
// let dashBud = document.getElementById("dashBud").innerHTML

function logOutAdmin() {
dashBud.style.dislpay = "none"

  
}


// function leftsection() {

//   let leftSect1 = document.getElementById("leftSect1")

//   if (leftSect1.style.display === "none") {
   
//   }else { 
//    leftSect1.style.display = "block"
//   }
// }







