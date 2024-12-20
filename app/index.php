<?php
include 'navbar.php';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css">
  <title>crud operation</title>
</head>
<body>
 
<div class="container mt-5">
        <form name="player" id="addPlayr" method="post" action="./ajout.php">
            <div class="bg-light p-4 rounded shadow-sm">
                <h2 class="mb-4">Add Player</h2>

                <!-- Name -->
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Enter your player name" required />
                    <!-- <div id="nameErr" class="text-danger"></div> -->
                </div>

                <!-- Photo -->
                <div class="mb-3">
                    <label for="photo" class="form-label">Photo URL</label>
                    <input type="url" name="photo" id="photo" class="form-control" placeholder="Enter your photo URL" required />
                    <!-- <div id="photoErr" class="text-danger"></div> -->
                </div>

                     <!-- Rating -->
                <div class="mb-3">
                    <label for="rating" class="form-label">Rating</label>
                    <input type="number" name="rating" id="rating" class="form-control" placeholder="Enter your rating" required />
                    <!-- <div id="ratingErr" class="text-danger"></div> -->
                </div>

                <!-- Position -->
                <div class="mb-3">
                    <label for="position" class="form-label">Position</label>
                    <select name="position" id="position" class="form-select" required>
                        <option value="0" disabled selected>Choose a position</option>
                        <option value="RW">Right Wing (RW)</option>
                        <option value="GK">Goalkeeper (GK)</option>
                        <option value="LW">Left Wing (LW)</option>
                        <option value="CM">Central Midfield (CM)</option>
                        <option value="LB">Left Back (LB)</option>
                        <option value="CB">Center Back (CB)</option>
                        <option value="ST">Striker (ST)</option>
                    </select>
                    <!-- <div id="positionErr" class="text-danger"></div> -->
                </div>
               
                <!-- Nationality -->
                <div class="mb-3">
                    <label for="nationality" class="form-label">Nationality</label>
                    <select name="nationality"  class="form-select" required>
                        <!-- <option value="0" disabled selected>Choose a position</option> -->
                        <option value="1">Argentina</option>
                        <option value="2">Portugal</option>
                        <option value="3">Belgium</option>
                        <option value="4">France</option>
                        <option value="5">Netherlands</option>
                        <option value="6">Germany</option>
                        <option value="7">Brazil</option>
                        <option value="8">Egypt</option>
                        <option value="9">Slovenia</option>
                        <option value="10">Croatia</option>
                        <option value="11">Morocco</option>
                        <option value="12">Norway</option>
                        <option value="13">Canada</option>
                        <option value="14">England</option>
                        <option value="15">Italy</option>
                      
                    </select>
                    <!-- <div id="nationalityErr" class="text-danger"></div> -->
                </div>

                <!-- Club -->
                <div class="mb-3">
                    <label for="club" class="form-label">Equipe</label>
                    <select name="equipe" class="form-select" required>
                        <!-- <option value="0" disabled selected>Choose a position</option> -->
                        <option value="1">Inter Miami</option>
                        <option value="2">Al Nassr</option>
                        <option value="3">Manchester City</option>
                        <option value="4">Real Madrid</option>
                        <option value="5">Liverpool</option>
                        <option value="6">Al-Hilal</option>
                        <option value="7">Bayern Munich</option>
                        <option value="8">Atletico Madrid</option>
                        <option value="9">Al-Ittihad</option>
                        <option value="10">Paris Saint-Germain</option>
                        <option value="11">Fenerbahçe</option>
                        <option value="12">PSV</option>
                    </select>
                    <!-- <div id="clubErr" class="text-danger"></div> -->
                </div>
                </div>
            </div>
             <input type="submit" class="btn btn-primary m-3 d-flex justify-center" name="submit">
        </form>
    </div>

</body>

</html>

<?php
include 'db.php';
include 'footer.php';
?>









