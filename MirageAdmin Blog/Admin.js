

// const display = document.querySelector("#display_post")
let displayPost = document.getElementById("display_post")
let menuOpt = document.getElementById('menuOpt')
let menuOpt2 = document.getElementById('menuOpt2')
let menuOpt3 = document.getElementById('menuOpt3')
let menuOpt4 = document.getElementById('menuOpt4')


function leftsection() {
// leftSect1.style.transitionDuration = "all 2s";
  menuOpt.style.backgroundColor = "#ee4400";
  menuOpt2.style.backgroundColor = "";
  menuOpt3.style.backgroundColor = "";
  menuOpt4.style.backgroundColor = "";

  displayPost.innerHTML = 

  `
  <div class="leftSect1 p-3 " id="leftSect1">

    <div class="leftSectContent p-3" id="leftSectContent">
         <h2 class="welcome">Published Posts</h2>
         <hr>
      
          <div class="tableWrappe p-3">
          <div class="table-wrapper-scroll-y my-custom-scrollbar">

          <table class="table table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th scope="col" class="headeeer">#</th>
                <th scope="col" class="headeeer">Thumbnail</th>
                <th scope="col" class="headeeer">Topic</th>
                <th scope="col" class="headeeer">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <th class="butomBord" scope="row"></th>
                <td class="butomBord"><img src="./Assets/Asiwaju-Bola-Tinubu-2.webp" alt=""></td>
                <td  class="spaceForTopic butomBord"> <h6> ‘It’s abuse of court’ -Tinubu </h6></td>

                <td class="butomBord"><p>The President-elect Bola Tinubu has opposed the application by his closest rival, Atiku Abub...</p></td>
              </tr>

              <tr class="">
                <th class="butomBord" scope="row"></th>
                <td class="butomBord"><img src="./Assets/CBN-e1490307285906-edited.webp" alt=""></td>
                <td  class="spaceForTopic butomBord"> <h6> CBN drives financial inclusion with SabiMONI </h6></td>

                <td class="butomBord"><p>THE Central Bank of Nigeria (CBN), has launched its Financial Literacy e-Learning Platform, called “SabiMONI” in its efforts to upscale...</p></td>
              </tr>

              <tr class="">
                <th class="butomBord" scope="row"></th>
                <td class="butomBord"><img src="./Assets/image-30.webp" alt=""></td>
                <td  class="spaceForTopic butomBord"> <h6> FG incurs N36.8trn deficit in 8yrs under Buhari </h6></td>

                <td class="butomBord"><p>The Federal Government has incurred a deficit spending of N36.8 trillion in eight years under th...</p></td>
              </tr>

              <tr class="">
                <th class="butomBord" scope="row"></th>
                <td class="butomBord"><img src="./Assets//Ooni_2-1.webp" alt=""></td>
                <td  class="spaceForTopic butomBord"> <h6> Ooni unveils sixth wife, Olori Akinmuda </h6></td>

                <td class="butomBord"><p>The Ooni of Ife, Oba Adeyeye Enitan Ogunwusi, has unveiled his his wife, Opeoluwa Elizabeth Akinmuda.
                  According to repor...</p></td>
              </tr>
            
              <tr class="">
                <th class="butomBord" scope="row"></th>
                <td class="butomBord"><img src="./Assets/Asiwaju-Bola-Tinubu-2.webp" alt=""></td>
                <td  class="spaceForTopic butomBord"> <h6> ‘It’s abuse of court’ -Tinubu </h6></td>

                <td class="butomBord"><p>The President-elect Bola Tinubu has opposed the application by his closest rival, Atiku Abub...</p></td>
              </tr>

              <tr class="">
                <th class="butomBord" scope="row"></th>
                <td class="butomBord"><img src="./Assets/CBN-e1490307285906-edited.webp" alt=""></td>
                <td  class="spaceForTopic butomBord"> <h6> CBN drives financial inclusion with SabiMONI </h6></td>

                <td class="butomBord"><p>THE Central Bank of Nigeria (CBN), has launched its Financial Literacy e-Learning Platform, called “SabiMONI” in its efforts to upscale...</p></td>
              </tr>

              <tr class="">
                <th class="butomBord" scope="row"></th>
                <td class="butomBord"><img src="./Assets/image-30.webp" alt=""></td>
                <td  class="spaceForTopic butomBord"> <h6> FG incurs N36.8trn deficit in 8yrs under Buhari </h6></td>

                <td class="butomBord"><p>The Federal Government has incurred a deficit spending of N36.8 trillion in eight years under th...</p></td>
              </tr>

              <tr class="">
                <th class="butomBord" scope="row"></th>
                <td class="butomBord"><img src="./Assets//Ooni_2-1.webp" alt=""></td>
                <td  class="spaceForTopic butomBord"> <h6> Ooni unveils sixth wife, Olori Akinmuda </h6></td>

                <td class="butomBord"><p>The Ooni of Ife, Oba Adeyeye Enitan Ogunwusi, has unveiled his his wife, Opeoluwa Elizabeth Akinmuda.
                  According to repor...</p></td>
              </tr>
              
              
            </tbody>
          </table>
        
          </div>
      </div>


    </div>

</div>
  
  `
}

function addBlog_Post() {
  menuOpt2.style.backgroundColor = "#ee4400";
  menuOpt3.style.backgroundColor = "";
  menuOpt4.style.backgroundColor = "";
  menuOpt.style.backgroundColor = ""; 

  displayPost.innerHTML =
  `
  <div class="pagePost_toPush col-12 col-md-9 col-lg-10 p-4" id="pagePost_toPush">

      <div class="leftsect p-3" id="leftsect">
        
        <h2 class="welcome">New Posts</h2>
        <hr>
        
  <div class=" p-1">
  
    <div class="row ">
         <div class="col-12 col-md-3 col-lg-3"> 
          <h6 class="">Tagline</h6>
          <input type="text" name="tagline" id="tagline">
        </div>
  
        <div class="col-12 col-md-3 col-lg-3"> 
          <h6 class="">Topic</h6>
          <input type="text" name="topic" id="topic">
          
        </div>
        <div class="col-12 col-md-3 col-lg-6"> 
          <h6 class="">Little Intro</h6>
          <textarea type="text" name="into" id="intro" spellcheck="true"> </textarea>
        </div>
  </div>
        <br>
       
        <div class=""> 
          <h6 class="">Upload Picture</h6>
         <input type="file" name="Chose Image" id="">
        </div>
  
        <br>
        <div class=""> 
          <h6 class="">Body</h6>
          <textarea type="text" name="into" id="body" spellcheck="true"> </textarea>
        </div>
  
        <br>
        <button class="p-2 px-4 Hoverbtn"><a href=""> Publish</a></button> 
        </div>
  
      </div>
  
    </div>
  `
}

function readersPost() {
  menuOpt2.style.backgroundColor = "";
  menuOpt3.style.backgroundColor = "#ee4400";
  menuOpt4.style.backgroundColor = "";
  menuOpt.style.backgroundColor = "";

  // let wholePage =  displayPost.innerHTML ;

  // wholePage.stlye.display = "none";
}

let displayDashBud = document.getElementById("displayDashBud")
let dashBud = document.getElementById("dashBud").innerHTML

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







