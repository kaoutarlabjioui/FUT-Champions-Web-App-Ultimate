function validateText(text) {

    if (text.value == "" || text.value.length < 5) {
      return false
    }
  
    return true;
  }
  
  function validateImg(photo) {
    // if (photo.value.protocol == "http"||photo.value.protocol == "https" )
    return true;
  }
  
  
  function validateNumber(number) {
    if (number.value == "" || number.value <= 0 && number.value > 100) {
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
      console.log(message)
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