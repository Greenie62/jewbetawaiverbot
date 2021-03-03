
var page = 1;
var waiverArea = document.querySelector(".waiverArea");
var pagesDOM = document.querySelector(".page")

console.log(waiverArea)

pagesDOM.innerHTML = page


function generatePage(){
    let html=""
    for(let i=0;i<Math.random()*5 + 3 | 0;i++){
        html += `<div class='parentPolicyDiv'>
                   <div class='policy'>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo exercitationem ex soluta voluptatibus odit atque molestias, assumenda dolores aliquid.</p>
                    </div>
                <span class='signSpan'>Sign:</span><div class='checkbox'></div>
                </div>`
    }

    waiverArea.innerHTML = html

    document.querySelectorAll(".checkbox").forEach(span=>{
        span.onclick=(e)=>signWaiver(e)
    })

    setTimeout(()=>{
        console.log("botsigner started!")
    
        botSignWaivers()},2000)
} 


 generatePage()


function signWaiver(e){
    console.log('sign waiver');
    if(e.target.style.backgroundColor === "red"){
        e.target.style.backgroundColor=''
        return;
    }
    e.target.style.backgroundColor='red'

   
}


let counter=0;

function botSignWaivers(){

    let checkBoxes = document.querySelectorAll(".checkbox");


    if(counter === checkBoxes.length){
        console.log("Thats all the boxes!")
        page++
        if(page === 4){
            alert("thats all the pages, nice job you lazy bastard!");
            return;
        }
        pagesDOM.innerHTML = page;
        waiverArea.innerHTML = ""
        waiverArea.innerHTML = "LOADING NEXT PAGE"
        setTimeout(()=>{
            waiverArea.innerHTML = ""
            counter = 0;
            generatePage()},1000)
    }
    else{

        checkBoxes[counter].style.backgroundColor='red'
    
        counter++
        console.log("Counter:",counter)
        setTimeout(botSignWaivers,1000)
    }

    


}





