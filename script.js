
// console.log(txt)


var ana = document.querySelectorAll(".items");
var position = "";
ana=Array.from(ana);

ana.forEach((item)=>{
  item.addEventListener("click",()=>{

    position=item.attributes.id.value;
  })
})



async function load() {
  try{
    const response = await fetch('players.json')
    var data = await response.json();
    AfficherData(data)
    // console.log(data)
  }catch (error){
    console.error("error fetching json file", error);
  }
}
load()
function AfficherData(data){
const listcard=document.getElementById("list");
// console.log(htmlcontent(data))
listcard.innerHTML=htmlcontent(data)
// console.log(listcard.innerHTML);

}


function htmlcontent(data){
  let html=" ";
data.players.forEach(player => {
  html += `  <div class="players-contain" >
  <div  class ="player-contain1">
     
      <div class="flex flex-">
      <div class="player_adjuster font-bold text-xl font-mono">
      <h6>`+ player.position + `</h6>
      <h4>`+ player.rating + `</h4>
      </div>
      <img src="`+ player.photo + `" alt="">
      </div>
      <div class="bg-blue-900/80 ">
    <h6 class="text-lg text-center text-yellow-500" > `+ player.name + `</h6>
    `
if (player.position == "GK") {
  html += `  <div>
      
      <span>`+ player.rating + `</span>
      <span>`+ player.diving+ `</span>
      <span>`+ player.handling + `</span>
      <span>`+ player.kicking + `</span>
      <span>`+ player.reflexes + `</span>
      <span>`+ player.speed +`</span>
      <span>`+ player.positioning+`</span>
      
  </div>`

} else {
  html += `  <div>
      
      <span>`+ player.pace + `</span>
      <span>`+ player.shooting + `</span>
      <span>`+ player.passing + `</span>
      <span>`+ player.dribbling + `</span>
      <span>`+ player.defending + `</span>
      <span>`+ player.physical + `</span>
  </div>`
}

html += ` 
</div>
<div class="">
    <p>`+ player.nationality + `</p> 
    <div style="padding-bottom: 30px;" class="flex justify-evenly">
    <img style="border-radius: 50%; width:20px; height:20px"  src="`+ player.flag + `" alt="">
    <img style="border-radius: 50%; width:20px; height:20px"  src="`+ player.logo + `" alt="">
    </div>
  </div>
</div>
 
</div>`
// console.log(html)
}) ;
return html
}











const overlay = document.getElementById("overlay");
const chose_player = document.getElementById("chose_player");


chose_player.addEventListener("click", ()=>{
  console.log("hakouna matata")
    overlay.classList.remove("hidden");    
    overlay.classList.add("flex");
})