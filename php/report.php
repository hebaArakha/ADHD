<?php


$question1 = "";
$academic = "";
$class = "";

$connection = new mysqli("localhost", "root", "", "adhd");
if ($connection->connect_error) {
    die ("" . $connection->connect_error);
}
$query = "select * from questions";
$result = $connection->query($query);
$errorMessages = array(); // Array to store error messages

// Loop through each question
for ($i = 1; $i <= $result->num_rows; $i++) {
    if (!isset ($_POST["$i"])) { // Check if input is set
        $errorMessages[] = $i;
    }


}
while ($row = $result->fetch_assoc()) {
    if ($row["type"] == "frequency") {
        if (in_array($row["questionID"], $errorMessages)) {
            $errorMessage = "<div class='alert alert-danger p-1'>";
            $errorMessageClose = "</div>";
        } else {
            $errorMessage = "";
            $errorMessageClose = "";
        }
        $question1 .= "<tr>";
        $question1 .= '<td class="' . "" . '">' . $errorMessage . '' . $row['questionID'] . $errorMessageClose . ' </td>';
        $question1 .= "<td>" . $row['questionText'] . "</td>";
        $question1 .= '
            <td>
                <label for="option1_' . $row["questionID"] . '"><input type="radio" id="option1_' . $row["questionID"] . '" name="' . $row["questionID"] . '" value="0" > 0</label>
            </td>
            <td>
                <label for="option2_' . $row["questionID"] . '"><input type="radio" id="option2_' . $row["questionID"] . '" name="' . $row["questionID"] . '" value="1" checked> 1</label>
            </td>
            <td>
                <label for="option3_' . $row["questionID"] . '"><input type="radio" id="option3_' . $row["questionID"] . '" name="' . $row["questionID"] . '" value="2" > 2</label>
            </td>
            <td>
                <label for="option4_' . $row["questionID"] . '"><input type="radio" id="option4_' . $row["questionID"] . '" name="' . $row["questionID"] . '" value="3" > 3</label>
            </td>
        ';
        $question1 .= "</tr>";
    }

    if ($row["type"] == "performance" && $row["performancetype"] == "Academic Performance") {
        static $x = 1;
        $academic .= "<tr>";
        $academic .= "<td>$x</td>";
        $academic .= "<td>" . $row['questionText'] . "</td>";
        $academic .= '<td><input type="range" id="rating_' . $row['questionID'] . '" name="' . $row['questionID'] . '" min="1" max="5" step="1" value="0"></td>';
        $academic .= "</tr>";
        $x++;
    }

    if ($row["type"] == "performance" && $row["performancetype"] == "Classroom Behavior") {
        static $y = 1;
        $class .= "<tr>";
        $class .= "<td>$y</td>";
        $class .= "<td>" . $row['questionText'] . "</td>";
        $class .= '<td><input type="range" id="rating_' . $row['questionID'] . '" name="' . $row['questionID'] . '" min="1" max="5" step="1" value="0"></td>';
        $class .= "</tr>";
        $y++;
    }
}
if (empty($errorMessages)) {
    header("Location:view.php");
}

include_once '../report.php';