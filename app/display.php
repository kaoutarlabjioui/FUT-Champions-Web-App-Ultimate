<?php
include 'db.php';
include 'navbar.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

    <title>cruds operations</title>
</head>
<body>
<div class="container">
<button class="btn btn-primary my-5"><a href="index.php" class="text-light text-decoration-none">add new player </a></button>
</div>
<div class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th scope="col">Nom</th>
                <th scope="col">Photo</th>
                <th scope="col">Rating</th>
                <th scope="col">Position</th>
                <th scope="col">Nationalité</th>
                <th scope="col">Équipe</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $sql = "SELECT equipes.equipe_name, nationnalites.nation_name, players.id, players.player_name, players.photo, players.rating, players.position 
                    FROM players 
                    JOIN equipes ON equipes.id = players.id_equipe
                    JOIN nationnalites ON nationnalites.id = players.id_nationnalite";
            $result = mysqli_query($db_connt, $sql);
            if ($result) {
                while ($row = mysqli_fetch_assoc($result)) { ?>
                    <tr>
                        <td><?php echo $row['player_name'] ?></td>
                        <td><img src="<?php echo $row['photo'] ?>" alt="Photo" class="img-thumbnail" style="max-width: 50px;"></td>
                        <td><?php echo $row['rating'] ?></td>
                        <td><?php echo $row['position'] ?></td>
                        <td><?php echo $row['nation_name'] ?></td>
                        <td><?php echo $row['equipe_name'] ?></td>
                        <td>
                            <a href="updateform.php?updateid=<?php echo $row['id'] ?>" class="btn btn-warning me-2">
                                <i class="fas fa-edit"></i> Modifier
                            </a>
                            <a href="delete.php?deleteid=<?php echo $row['id'] ?>" class="btn btn-danger">
                                <i class="fas fa-trash-alt"></i> Supprimer
                            </a>
                        </td>
                    </tr>
            <?php
                }
            }
            ?>
        </tbody>
    </table>
</div>


</body>
</html>
<?php 
include 'footer.php';
?>