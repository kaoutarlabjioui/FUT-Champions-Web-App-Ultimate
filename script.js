
// var postplayer = document.querySelectorAll(".items");
// postplayer = Array.from(postplayer); //convert de node selected to arry
// var playerPost = " ";
// postplayer.forEach((item) => {

//   item.addEventListener("click", () => {

//     playerPost = item.attributes.id.value;
//     // localStorage.setItem("playerPost","playerPost")

//   })

// })
var data = [];
async function load() {
  try {
    const response = await fetch('players.json')
    data = await response.json();
    // console.log(data)
  } catch (error) {
    console.error("error fetching json file", error);
  }

}
load()

const post = document.getElementById("position");
const infoplayer = document.getElementById("info-player")
// let pace = document.querySelector(".pace");
let shooting = document.querySelector(".shooting");
// let passing = document.querySelector(".passing");
// let dribbling = document.querySelector(".dribbling");
// let defending = document.querySelector(".defending");
// let physical = document.querySelector(".physical");
post.addEventListener('change', (event) => {
  if (event.target.value === 'GK') {
 

    // pace.innerText = "Diving";
    shooting.innerText="Handling";
    // passing.innerText="Kicking";
    // dribbling.innerText="Reflexes";
    // defending.innerText="Speed";
    // physical.innerText="Positioning";

  }

  else {
    infoplayer.innerHTML = `<div class="info-player">
                <label for="pace">Pace</label>
                <input type="number"  id="pace" class="pace" placeholder="Entre your pace" required>
                <label for="shooting">Shooting</label>
                <input type="number"  id="shooting" class="shooting" placeholder="Entre your shooting " required>
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

const submitit = document.getElementById("submitButton");

function validateText(text) {
  let regex = /^[A-Za-z]+$/;
  if (text.value == "" || !regex.test(text.value)) {
    return false
  }

  return true;
}

function validateImg(photo) {
  let regex = /^(http:\/\/|https:\/\/)/;
   if (!regex.test(photo.value)){
  return false ;
}
  return true;
}


function validateNumber(number) {
  let regex = /^(?:[0-9]|[1-9][0-9])$/
  if (number.value == "" || !regex.test(number.value)) {
    return false
  }
  return true;
}
// function validateSalection(select) {
//   if(select.value==""){
// return false
//   }
//   return true;
// }



function validateForm(form) {
  let isValidate = true;

  let validateName = validateText(form.name);
  if (!validateName) {
    showNameStatus(false, "name is empty");
    isValidate = false;
  } else if (validateName) {
    showNameStatus(true, "valide");
  }

  let validatePhoto = validateImg(form.photo);
  if (!validatePhoto) {
    showPhotoStatus(false, "url is empty");
    isValidate = false;
  } else if (validatePhoto) {
    showPhotoStatus(true, "valide");
  }
  // let validatePosition = validateSalection(form.position);
  // if(!validatePosition){
  //   showPositioningStatus(false, "url is empty");
  //   isValidate = false;
  // } else if (validatePosition){
  //   showPositioningStatus(true, "valide");
  // }

  let validateNationality = validateText(form.nationality);
  if (!validateNationality) {
    showNationalityStatus(false, "Nationality is empty");
    isValidate = false;
  } else if (validateNationality) {
    showNationalityStatus(true, "valide");
  }

  let validateFlag = validateImg(form.flag);
  if (!validateFlag) {
    showFlagStatus(false, "flag is empty");
    isValidate = false;
  } else if (validateFlag) {
    showFlagStatus(true, "valide");
  }

  let validateClub = validateText(form.club);
  if (!validateClub) {
    showClubStatus(false, "club is empty")
    isValidate = false;
  } else if (validateClub) {
    showClubStatus(true, "valide");
  }

  let validateLogo = validateImg(form.logo);
  if (!validateLogo) {
    showLogoStatus(false, "logo is empty")
    isValidate = false;
  } else if (validateLogo) {
    showLogoStatus(true, "valide")
  }

  let validateRating = validateNumber(form.rating);
  if (!validateRating) {
    showRatingStatus(false, "rating is empty")
    isValidate = false;
  } else if (validateRating) {
    showRatingStatus(true, "valide")
  }
  let validatePace = validateNumber(form.pace);
  if (!validatePace) {
    showPaceStatus(false, "pace is empty")
    isValidate = false;
  } else if (validatePace) {
    showPaceStatus(true, "valide")
  }

  let validateShooting = validateNumber(form.shooting);
  if (!validateShooting) {
    showShootingStatus(false, "shooting is empty")
    isValidate = false;
  } else if (validateShooting) {
    showShootingStatus(true, "valide")
  }

  let validatePassing = validateNumber(form.passing);
  if (!validatePassing) {
    showPassingStatus(false, "passing is empty")
    isValidate = false;
  } else if (validatePassing) {
    showPassingStatus(true, "valide")
  }

  let validateDribbling = validateNumber(form.dribbling);
  if (!validateDribbling) {
    showDribblingStatus(false, "dribbling is empty")
    isValidate = false;
  } else if (validateDribbling) {
    showDribblingStatus(true, "valide")
  }

  let validateDefending = validateNumber(form.defending);
  if (!validateDefending) {
    showDefendingStatus(false, "defending is empty")
    isValidate = false;
  } else if (validateDefending) {
    showDefendingStatus(true, "valide")
  }


  let validatePhysical = validateNumber(form.physical);
  if (!validatePhysical) {
    showPhysicalStatus(false, "physical is empty")
    isValidate = false;
  } else if (validatePhysical) {
    showPhysicalStatus(true, "valide")
  }


  let validateDiving = validateNumber(form.diving);
  if (!validatePhysical) {
    showDivingStatus(false, "diving is empty")
    isValidate = false;
  } else if (validateDiving) {
    showDivingStatus(true, "valide")
  }

  let validateHandling = validateNumber(form.handling);
  if (!validateHandling) {
    showHandlingStatus(false, "handling is empty")
    isValidate = false;
  } else if (validateHandling) {
    showHandlingStatus(true, "valide")
  }

  let validateKicking = validateNumber(form.kicking);
  if (!validateKicking) {
    showKickingStatus(false, "physical is empty")
    isValidate = false;
  } else if (validateKicking) {
    showKickingStatus(true, "valide")
  }
  let validateReflexes = validateNumber(form.reflexes);
  if (!validateReflexes) {
    showReflexesStatus(false, "reflexes is empty")
    isValidate = false;
  } else if (validateReflexes) {
    showReflexesStatus(true, "valide")
  }

  let validateSpeed = validateNumber(form.speed);
  if (!validateSpeed) {
    showSpeedStatus(false, "speed is empty")
    isValidate = false;
  } else if (validateSpeed) {
    showSpeedStatus(true, "valide")
  }

  let validatePositioning = validateNumber(form.positioning);
  if (!validatePositioning) {
    showPositioningStatus(false, "positioning is empty")
    isValidate = false;
  } else if (validatePositioning) {
    showPositioningStatus(true, "valide")
  }
  return isValidate;

}

function showNameStatus(status, message) {
  const nameInput = document.getElementById("name");
  const nameErr = document.getElementById("nameErr");
  if (status) {
    nameInput.style.borderColor = "green";
    nameErr.innerText = message;
    nameErr.style.color = "green";
  } else if (!status) {
    nameInput.style.borderColor = "red";
    nameErr.innerText = message;
    // console.log(message)
    nameErr.style.color = "red";
  }
}
function showPhotoStatus(status, message) {
  const photoInput = document.getElementById("photo");
  const photoErr = document.getElementById("photoErr");
  if (status) {
    photoInput.style.borderColor = "green";
    photoErr.innerText = message;
    photoErr.style.color = "green";
  } else if (!status) {
    photoInput.style.borderColor = "red";
    photoErr.innerText = message;
    photoErr.style.color = "red";
  }
}
function showNationalityStatus(status, message) {
   const nationalityInput = document.getElementById("nationality");
   const nationalityErr = document.getElementById("nationalityErr");
  if (status) {
    nationalityInput.style.borderColor = "green";
    nationalityInput.innerText = message;
    nationalityErr.style.color = "green";
  } else if (!status) {
    nationalityInput.style.borderColor = "red";
    nationalityErr.innerText = message;
    nationalityErr.style.color = "red";
  }
}
function showFlagStatus(status, message) {
  const flagInput = document.getElementById("flag");
 const flagErr = document.getElementById("flagErr");
  if (status) {
    flagInput .style.borderColor = "green";
    flagErr.innerText = message;
    flagErr.style.color = "green";
  } else if (!status) {
    flagInput.style.borderColor = "red";
    flagErr.innerText = message;
    flagErr.style.color = "red";
  }
}
function showClubStatus(status, message) {
    const clubInput = document.getElementById("club");
    const clubErr = document.getElementById("clubErr");
  if (status) {
    clubInput.style.borderColor = "green";
    clubErr.innerText = message;
    clubErr.style.color = "green";
  } else if (!status) {
    clubInput.style.borderColor = "red";
    clubErr.innerText = message;
    clubErr.style.color = "red";
  }
}
function showLogoStatus(status, message) {
  const logoInput = document.getElementById("logo");
  const logoErr = document.getElementById("logoErr");
if (status) {
  logoInput.style.borderColor = "green";
  logoErr.innerText = message;
  logoErr.style.color = "green";
} else if (!status) {
  logoInput.style.borderColor = "red";
  logoErr.innerText = message;
  logoErr.style.color = "red";
}
}
function showRatingStatus(status, message) {
  const ratingInput = document.getElementById("rating");
  const ratingErr   = document.getElementById("ratingErr");
if (status) {
  ratingInput.style.borderColor = "green";
  ratingErr.innerText = message;
  ratingErr.style.color = "green";
} else if (!status) {
  ratingInput.style.borderColor = "red";
  ratingErr.innerText = message;
  ratingErr.style.color = "red";
}
}
function showPaceStatus(status, message) {
    const paceInput = document.getElementById("pace");
    const paceErr = document.getElementById("paceErr");
if (status) {
  paceInput .style.borderColor = "green";
  paceErr.innerText = message;
  paceErr.style.color = "green";
} else if (!status) {
  paceInput .style.borderColor = "red";
  paceErr.innerText = message;
  paceErr.style.color = "red";
}
}
function showShootingStatus(status, message) {
  const shootingInput = document.getElementById("shooting");
  const shootingErr = document.getElementById("shootingErr");
if (status) {
  shootingInput.style.borderColor = "green";
  shootingErr.innerText = message;
  shootingErr.style.color = "green";
} else if (!status) {
  shootingInput.style.borderColor = "red";
  shootingErr.innerText = message;
  shootingErr.style.color = "red";
}
}

function showPassingStatus(status, message) {
 const passingInput = document.getElementById("passing");
 const passingErr = document.getElementById("passingErr");
if (status) {
  passingInput.style.borderColor = "green";
  passingErr.innerText = message;
  passingErr.style.color = "green";
} else if (!status) {
  passingInput.style.borderColor = "red";
  passingErr.innerText = message;
  passingErr.style.color = "red";
}
}
function showDribblingStatus(status, message) {
 const dribblingInput = document.getElementById("dribbling");
 const dribblingErr = document.getElementById("dribblingErr");
if (status) {
  dribblingInput.style.borderColor = "green";
  dribblingErr.innerText = message;
  dribblingErr.style.color = "green";
} else if (!status) {
  dribblingInput.style.borderColor = "red";
  dribblingErr.innerText = message;
  dribblingErr.style.color = "red";
}
}
function showDefendingStatus(status, message) {
   const defendingInput = document.getElementById("defending");
   const defendingErr = document.getElementById("defendingErr");
if (status) {
  defendingInput.style.borderColor = "green";
  defendingErr.innerText = message;
  defendingErr.style.color = "green";
} else if (!status) {
  defendingInput.style.borderColor = "red";
  defendingErr.innerText = message;
  defendingErr.style.color = "red";
}
}
function showPhysicalStatus(status, message) {
  const physicalInput = document.getElementById("physical");
  const physicalErr = document.getElementById("physicalErr");
if (status) {
  physicalInput.style.borderColor = "green";
 physicalErr.innerText = message;
 physicalErr.style.color = "green";
} else if (!status) {
 physicalInput.style.borderColor = "red";
 physicalErr.innerText = message;
 physicalErr.style.color = "red";
}
}
function showDivingStatus(status, message) {
  const divingInput = document.getElementById("diving");
  const divingErr = document.getElementById("divingErr");
if (status) {
  divingInput.style.borderColor = "green";
  divingErr.innerText = message;
  divingErr.style.color = "green";
} else if (!status) {
  divingInput.style.borderColor = "red";
  divingErr.innerText = message;
  divingErr.style.color = "red";
}
}
function showHandlingStatus(status, message) {
  const handlingInput = document.getElementById("handling");
  const handlingErr = document.getElementById("handlingErr");
if (status) {
  handlingInput.style.borderColor = "green";
  handlingErr.innerText = message;
  handlingErr.style.color = "green";
} else if (!status) {
  handlingInput.style.borderColor = "red";
  handlingErr.innerText = message;
  handlingErr.style.color = "red";
}
}
function showKickingStatus(status, message) {
  const kickingInput = document.getElementById("kicking");
  const kickingErr = document.getElementById("kickingErr");
if (status) {
  kickingInput.style.borderColor = "green";
  kickingErr.innerText = message;
  kickingErr.style.color = "green";
} else if (!status) {
  kickingInput.style.borderColor = "red";
  kickingErr.innerText = message;
  kickingErr.style.color = "red";
}
}
function showReflexesStatus(status, message) {
  const reflexesInput = document.getElementById("reflexes");
  const reflexesErr = document.getElementById("reflexesErr");
if (status) {
  reflexesInput.style.borderColor = "green";
  reflexesErr.innerText = message;
  reflexesErr.style.color = "green";
} else if (!status) {
  reflexesInput.style.borderColor = "red";
  reflexesErr.innerText = message;
  reflexesErr.style.color = "red";
}
}
function showSpeedStatus(status, message) {
 const speedInput = document.getElementById("speed");
 const speedErr = document.getElementById("speedErr");
if (status) {
  speedInput.style.borderColor = "green";
  speedErr.innerText = message;
  speedErr.style.color = "green";
} else if (!status) {
  speedInput.style.borderColor = "red";
  speedErr.innerText = message;
  speedErr.style.color = "red";
}
}
function showPositioningStatus(status, message) {
 const positioningInput = document.getElementById("positioning");
 const positioningErr = document.getElementById("positioningErr");
 if (status) {
  positioningInput.style.borderColor = "green";
   positioningErr.innerText = message;
   positioningErr.style.color = "green";
 } else if (!status) {
  positioningInput.style.borderColor = "red";
   positioningErr.innerText = message;
   positioningErr.style.color = "red";
 }}
 const Form = document.getElementById("form");
 const PlayerName =document.getElementById("name");
 const PlayerNationality =document.getElementById("nationality");
 const PlayerPhoto = document.getElementById("photo");
 const PlayerFlag = document.getElementById("photo");
 const PlayerClub = document.getElementById("club");
 const PlayerLogo= document.getElementById("logo");
 const PlayerRating= document.getElementById("rating");
 const PlayerPace= document.getElementById("pace");
 const PlayerShooting = document.getElementById("shooting");
 const  PlayerPassing = document.getElementById("passing");
 const PlayerDribbling = document.getElementById("dribbling");
 const PlayerDefending = document.getElementById("defending");
 const PlayerPhysical = document.getElementById("physical");
submitit.addEventListener("click", () => {
  let Newplayer = {};
  const form = document.forms["player"];
  Newplayer.name = PlayerName.value;
  Newplayer.nationality = PlayerNationality.value;
  Newplayer.photo = PlayerPhoto.value;
  Newplayer.logo = PlayerLogo.value;
  Newplayer.rating = PlayerRating.value;
  Newplayer.pace = PlayerPace.value;
  Newplayer.shooting = PlayerShooting.value;
  Newplayer.dribbling = PlayerDribbling.value;
  Newplayer.defending = PlayerDefending.value;
  Newplayer.physical = PlayerPhysical.value;
  Newplayer.passing = PlayerPassing.value;
  Newplayer.position = post.value;
  // let isValidate = validateForm(form);
  // if (isValidate) {
    document.getElementById("submitPlayer").click();
    document.getElementById("closeModal").click();
    data.players.unshift(Newplayer)
    // console.log(Newplayer)
  // }
});

// Iterate over each element with the class "items"
Array.from(document.getElementsByClassName("items")).forEach((item) => {
  item.addEventListener("click", (e) => {
    // Get the "position" attribute of the clicked element
    let position = e.currentTarget.getAttribute("position");
    // console.log(position)
    // Filter the player data based on the "position"
    let html = ""
    let filteredPlayers = data.players.filter(player => player.position.toLowerCase() == position.toLowerCase());
    filteredPlayers.forEach(player => {
      html +=
        `  <div class="players-contain" >
  <div class ="player-contain1">
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

    })
    document.getElementById("list").innerHTML = html
    // Do something with the filtered players, for example, log them
    // console.log(filteredPlayers);
  });
});
