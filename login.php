<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link rel="stylesheet" href="../css/all.css" />
    <link rel="stylesheet" href="../css/normaliz.css" />
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/main.css" />
</head>

<body>

    <!-- ================================= Main Page ================================= -->
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
                        <a class="nav-link" href="specialists.html">specialists</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Behavior</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Food</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link" href="games.html">Games</a>
                    </li>

                </ul>

                <!-- btn Log Out -->
                <button class="btn btn-outline-success" type="submit" id="logout">Logout</button>

            </div>
        </div>
    </nav>

    <!-- ========= Start Section Login  ========= -->

    <section class="login">
        <div class="container">
            <div class="row g-3 shadow px-3 py-5 rounded-3">
                <!-- Image -->
                <div class="col-md-6">
                    <figure>
                        <img src="../image/Login/login.jpg" alt="">
                    </figure>
                </div>
                <!-- Form Contain Inputs -->
                <div class="col-md-6">
                    <span class="text-success">
                        <?php echo $signupMSG ?? ""; ?>
                    </span>
                    <form action="login.php" method="post">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Enter Your Email"
                            value="<?php echo isset ($email) ? htmlspecialchars($email) : ""; ?>" required>
                        <span class="text-danger">
                            <?php echo isset ($email_err) ? $email_err : ""; ?>
                        </span>

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter Your Password" required>
                        <span class="text-danger">
                            <?php echo isset ($password_err) ? $password_err : ""; ?>
                        </span>

                        <button type="submit">Login</button><br>
                        <span>You don't have an account? <a href="register.php">Register Now</a></span>


                    </form>

                </div>
            </div>
        </div>
    </section>
    <!-- //  ========= Start Section Login //  ========= -->


    <!-- ========= Footer ========= -->
    <footer class="fixed-bottom">
        <div class="icons">
            <p>
                <i class="fa-regular fa-envelope text-danger"></i>
                info@example.com
            </p>
        </div>
    </footer>

    <script src="JS/bootstrap.bundle.min.js"></script>
    <script src="JS/main.js"></script>
</body>

</html>