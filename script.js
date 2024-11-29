
var postplayer = document.querySelectorAll(".items");
var position = "";
postplayer=Array.from(postplayer); //convert de node selected to arry

postplayer.forEach((item)=>{
  item.addEventListener("click",()=>{

    position=item.attributes.id.value;
    console.log(position);
    
  })
})
var data;
async function load() {
  try{
    const response = await fetch('players.json')
      data = await response.json();
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
const post =document.getElementById("position");
const infoplayer=document.getElementById("info-player")
post.addEventListener('change',(event)=>{
  if (event.target.value === 'GK') {
  infoplayer.innerHTML = `
  <div class="info-player">
  <label for="pace-diving">Diving</label>
                <input type="number"  id="diving" class="diving" placeholder="Entre your diving " required>
                <label for="Shooting-handling">Handling</label>
                <input type="number"  id="handling" class="handling" placeholder="Entre your Shooting-handling " required>
                <label for="kicking">Kicking</label>
                <input type="number"  id="kicking" class="kicking" placeholder="Entre your kicking" required>
                <label for="reflexes">Reflexes</label>
                <input type="number"  id="dribbling" class="reflexes" placeholder="Entre your reflexes" required>
                <label for="defending-speed">Speed</label>
                <input type="number"  id="speed" class="speed" placeholder="Entre your speed" required>
                <label for="positioning">Positioning</label>
                <input type="number"  id="positioning" class="positioning" placeholder="Entre your positioning" required>
                </div>`
  }
  else {
    infoplayer.innerHTML =`<div class="info-player">
                <label for="pace">Pace</label>
                <input type="number"  id="pace" class="pace" placeholder="Entre your pace" required>
                <label for="Shooting-handling">Shooting</label>
                <input type="number"  id="Shooting" class="Shooting" placeholder="Entre your Shooting " required>
                <label for="passing">Passing</label>
                <input type="number"  id="passing" class="passing" placeholder="Entre your passing" required>
                <label for="dribbling">Dribbling</label>
                <input type="number"  id="dribbling" class="dribbling" placeholder="Entre your dribbling" required>
                <label for="defending">Defending</label>
                <input type="number"  id="defending" class="defending" placeholder="Entre your defending" required>
                <label for="physical">Physical</label>
                <input type="number"  id="physical" class="physical" placeholder="Entre your physical" required>
              </div>`
  
  }

});

 const Form = document.getElementById("form");
 const PlayerName =document.getElementById("name");
 const PlayerNationality =document.getElementById("nationality");
 const PlayerPhoto = document.getElementById("photo");
 const PlayerFlag = document.getElementById("photo");
 const PlayerClub = document.getElementById("club");
 const PlayerLogo= document.getElementById("logo");
 const PlayerRating= document.getElementById("rating");
 const PlayerPace= document.getElementById("pace");
 const PlayerShooting = document.getElementById("Shooting");
 const  PlayerPassing = document.getElementById("passing");
 const PlayerDribbling = document.getElementById("dribbling");
 const PlayerDefending = document.getElementById("defending");
 const PlayerPhysical = document.getElementById("physical");
const submitit=document.getElementById("submitButton");

submitit.addEventListener("click",()=>{
e.preventDefault();/ 
let Newplayer = {};
console.log('newplayer');
const name = PlayerName.value.trim();
const nationality =PlayerNationality.value.trim();
const photo = PlayerPhoto.value.trim();
const flag =  PlayerFlag.value.trim();
const club= PlayerClub.value.trim();
const logo = PlayerLogo.value.trim();
const rating = PlayerRating.value.trim();
const pace = PlayerPace.value.trim();
const shooting= PlayerShooting .value.trim();
const dribbling = PlayerDribbling.value.trim();
const defending = PlayerDefending.value.trim();
const physical =  PlayerPhysical.value.trim();
const passing = PlayerPassing.value.trim();

let status = true;
// let child;
// if(name.length == 0){
//   child = PlayerName.nextElementSibling;
//   child.style.display = "block"
//   child.style.color= "red"
// status=false
// }
// if(nationality.length==0){
//   child= PlayerNationality.nextElementSibling;
//   child.style.display = "block"
//    child.style.color= "red"
//    status=false
// }
// if(photo.length == 0){
//   PlayerPhoto.nextElementSibling.style.display="block"
//   child.style.display = "block"
//    child.style.color= "red"
//    status=false
// }


// const nameRegex=/^[a-zA-Z\s]+$/;
// if(!nameRegex.test(name)){
//   PlayerName.nextElementSibling.style.display = "block"
// PlayerName.nextElementSibling.style.color="red"
// PlayerName.nextElementSibling.textContent="the value you enter not much the requerment"
// status=false
// }
// if (name.length < 2 || name.length > 50) {
        
//   status = false

// }
Newplayer.name = PlayerName.value;
Newplayer.nationality =PlayerNationality.value;
Newplayer.photo = PlayerPhoto.value;
 Newplayer.logo = PlayerLogo.value;
 Newplayer.rating = PlayerRating.value;
 Newplayer.pace = PlayerPace.value;
Newplayer.shooting= PlayerShooting.value;
Newplayer.dribbling = PlayerDribbling.value;
 Newplayer.defending = PlayerDefending.value;
Newplayer.physical =  PlayerPhysical.value;
Newplayer.passing = PlayerPassing.value;
Newplayer.position = post.value;

// if(status){
  data.players.unshift(Newplayer)
  AfficherData(data)
// }
// let html=" ";
// data.players.forEach(player => {
//   html += `  <div class="players-contain" >
//   <div  class ="player-contain1">
     
//       <div class="flex ">
//       <div class="player_adjuster font-bold text-xl font-mono">
//       <h6>${player.position}</h6>
//       <h4>${player.rating}</h4>
//       </div>
//       <img src="${player.photo}" alt="">
//       </div>
//       <div class="bg-blue-900/80 ">
//     <h6 class="text-lg text-center text-yellow-500 text-wrap" > ${player.name}</h6>
// </div>
// <div class=" text-center">
//       <span>${player.rating}</span>
//       <span>${player.pace || player.diving}</span>
//       <span>${player.shooting || player.handling}</span>
//       <span>${player.passing || player.kicking}</span>
//       <span>${player.dribbling || player.reflexes}</span>
//       <span>${player.defending || player.speed}</span>
//       <span>${player.physical || player.positioning}</span>
//     <p>${player.nationality}</p> 
//     <div style="padding-bottom: 50px;" class="flex justify-evenly">
//     <img style="border-radius: 50%; width:20px; height:20px"  src="${player.flag}" alt="">
//     <img style="border-radius: 50%; width:20px; height:20px"  src="${player.logo}" alt="">
//     </div>
//   </div>
// </div>
 
// </div>`

});



  






function htmlcontent(data){
  let html=" ";
data.players.forEach(player => {
  html += `  <div class="players-contain" >
  <div  class ="player-contain1">
     
      <div class="flex ">
      <div class="player_adjuster font-bold text-xl font-mono">
      <h6>${player.position}</h6>
      <h4>${player.rating}</h4>
      </div>
      <img src="${player.photo}" alt="">
      </div>
      <div class="bg-blue-900/80 ">
    <h6 class="text-lg text-center text-yellow-500 text-wrap" > ${player.name}</h6>
</div>
<div class=" text-center">
      <span>${player.rating}</span>
      <span>${player.pace || player.diving}</span>
      <span>${player.shooting || player.handling}</span>
      <span>${player.passing || player.kicking}</span>
      <span>${player.dribbling || player.reflexes}</span>
      <span>${player.defending || player.speed}</span>
      <span>${player.physical || player.positioning}</span>
    <p>${player.nationality}</p> 
    <div style="padding-bottom: 50px;" class="flex justify-evenly">
    <img style="border-radius: 50%; width:20px; height:20px"  src="${player.flag}" alt="">
    <img style="border-radius: 50%; width:20px; height:20px"  src="${player.logo}" alt="">
    </div>
  </div>
</div>
 
</div>`
// console.log(html)
}) ;
return html
}


// if (player.position == "GK") {
//   html += `  <div text-center>
      
//       <span>${player.rating}</span>
//       <span>${player.diving}</span>
//       <span>${player.handling}</span>
//       <span>${player.kicking}</span>
//       <span>${player.reflexes}</span>
//       <span>${player.speed}</span>
//       <span>${player.positioning}</span>
      
//   </div>`

// } else {
//   html += `  <div>
      
//       <span>${player.pace}</span>
//       <span>${player.shooting}</span>
//       <span>${player.passing}</span>
//       <span>${player.dribbling}</span>
//       <span>${player.defending}</span>
//       <span>${player.physical}</span>
//   </div>`
// }









// const overlay = document.getElementById("overlay");
// const chose_player = document.getElementById("chose_player");


// chose_player.addEventListener("click", ()=>{
//   console.log("hakouna matata")
//     overlay.classList.remove("hidden");    
//     overlay.classList.add("flex");
// })