<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food</title>
    <link rel="stylesheet" href="../css/all.css" />
    <link rel="stylesheet" href="../css/normaliz.css" />
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/main.css" />
</head>

<body>


    <!-- ================================= Food Page ================================= -->
    <!-- ========= Navbar ========= -->

    <nav class="navbar navbar-expand-lg ">
        <div class="container">
            <!-- Logo -->
            <a class="navbar-brand" href="index.html">
                <img src="../image/Logo/care-charity-svgrepo-com.png" alt="">
            </a>

            <!-- Button use it to display menu  -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link" href="specialists.html">specialists</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="behavior.html">Behavior</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="food.html">Food</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link" href="../games.html">Games</a>
                    </li>

                </ul>

                <!-- btn Log Out -->
                <button class="btn btn-outline-success" type="submit" id="logout">Logout</button>

            </div>
        </div>
    </nav>




    <div class="container">
        <h2>Patient Information</h2>
        <form action="report.php" method="post" style="padding-bottom:10vh">
            <div class="form-group mb-3">
                <label for="patient_name">Patient Name:</label>
                <input type="text" class="form-control" id="patient_name" name="childName" required >
            </div>

            <div class="form-group mb-3">
                <label for="date_of_birth">Date of Birth:</label>
                <input type="date" class="form-control" id="date_of_birth" name="birthDate" required>
            </div>

            <div class="form-group mb-3">
                <label for="todays_date">Today’s Date:</label>
                <input type="date" class="form-control" id="todays_date" name="date" required>
            </div>

            <div class="form-group mb-3">
                <label for="age">Age:</label>
                <input type="number" class="form-control" id="age" name="age" required>
            </div>

            <div class="form-group mb-3">
                <label for="grade">Grade:</label>
                <input type="text" class="form-control" id="grade" name="grade" required>
            </div>

            <p>Each rating should be considered in the context of what is appropriate for the age of your child.</p>
            <p></p>





            <table class="table table-bordered">
                <tr>
                    <th colspan="6">
                        Frequency Code: 0 = Never; 1 = Occasionally; 2 = ; 3 = Very Often
                    </th>
                </tr>
                <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th colspan="4">Answer</th>
                </tr>
                <?php echo $question1; ?>
            </table>

            <table class="table table-bordered">
                <tr>
                    <th colspan="6">
                        PERFORMANCE QUESTIONS :  Problematic   -  Average   -  Above Average
                    </th>
                </tr>
                <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Answer</th>
                </tr>
                <tr>
                    <td colspan="3">Academic Performance</td>
                </tr>
                <?php echo $academic; ?>
                <tr>
                    <td colspan="3">Classroom Behavior</td>
                </tr>

                <?php echo $class; ?>

            </table>


            <button type="submit" class="btn btn-primary">Submit</button>
        </form>


        <!-- ========= Footer =========  -->
        <footer class="fixed-bottom">
            <div class="icons">
                <p>
                    <i class="fa-regular fa-envelope text-danger"></i>
                    info@example.com
                </p>
            </div>
        </footer>



        <script src="../JS/bootstrap.bundle.min.js"></script>
        <script src="../JS/main.js"></script>
</body>

</html>