
const a = document.querySelector(".SB")
const b = document.querySelector(".in")
const c=document.querySelector(".con")

function m(){
   
let sh=b.value.trim();
if(b.value != ""){
    getmeal(sh);
   let ml='';
   c.innerHTML=ml;
}
else{
    document.querySelector(".warn1").innerHTML='<h1><i class="fa-solid fa-typewriter"></i>Enter any incredents.....</h1>' ;
}
}

function getmeal(s){
   

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i="+s)
.then(res =>
    res.json()
).then(data => {
    
    mealm(data)
}
)
.catch((err) => 
document.querySelector(".warn1").innerHTML='<div class="warn2"><h1><i class="fa-solid fa-typewriter"></i>OOPS... Something went wrong :(</h1></div>'
)
}

 function mealm(data){
    document.querySelector(".warn1").innerHTML='<h1 class="warn3"><i class="fa-solid fa-pan-frying"></i>Your search results...</h1>'
    let ml=''
    let a=50
    if(data){
        data.meals.forEach(dat => {
       ml+=
       ' <div data-aos="fade-right" data-aos-delay="'+a+'" id="'+dat.idMeal+'"class="container"><div class="col2"><img class="im" src="'+dat.strMealThumb+'" alt=""><div class="he"><h5 class="ch">'+dat.strMeal+'</h5></div> <a href="#res" ><button class="bc" type="button" onclick="res('+dat.idMeal+')" >Get Recipe</button> </a> </div></div>'
      c.innerHTML=ml
        a=a+50;
        });
       
    }
    else{
        document.querySelector(".warn1").innerHTML='<div class="warn2"><h1><i class="fa-solid fa-typewriter"></i>Enter Correct Word</h1></div>'
    }
 
    
    
    
    
    
   
}
function res(d){
   
    document.querySelector(".ci").innerHTML='<div style="display:flex;" class="co"></div>'
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+d)
    .then(re =>
        re.json()
    ).then(da => {
       
        reiss(da)
       
    }
    )
   

    }
    function reiss(da){
        let jl=''
        da.meals.forEach(dat =>{
          
            jl+='<div data-aos="fade-up" data-aos-duration:"1200" id="res"><main class="rcon"><a onclick="rem()" class="bak"><i class="fa-solid fa-house"></i></a><h1 class="rn">'+dat.strMeal+'</h1><img class="mm" src="'+dat.strMealThumb+'" alt=""><h3 class="int">Instruction</h3><p class="par">'+dat.strInstructions+'</p><a target="_blank" class="ac" href="'+dat.strYoutube+'"><i class="fa-brands fa-youtube"></i> Watch Now</a></main></div>'
            
            document.querySelector(".co").innerHTML=jl;
            
        })
    }
    function rem(){
      
      
        document.querySelector(".ci").innerHTML='<div style="display: none;" class="co"></div>'
        
    }

   

