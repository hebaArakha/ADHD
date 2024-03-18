-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2024 at 05:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adhd`
--

-- --------------------------------------------------------

--
-- Table structure for table `questionoptions`
--

CREATE TABLE `questionoptions` (
  `optionID` int(11) NOT NULL,
  `FrequencyCode` enum('0','1','2','3','4','5') DEFAULT NULL,
  `optionText` varchar(10) GENERATED ALWAYS AS (case `FrequencyCode` when 0 then 'never' when 1 then 'occasionally' when 2 then 'often' when 3 then 'very often' else 'unknown' end) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questionoptions`
--

INSERT INTO `questionoptions` (`optionID`, `FrequencyCode`) VALUES
(8, '0'),
(9, '1'),
(10, '2'),
(11, '3'),
(12, '4'),
(13, '5');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `questionID` int(11) NOT NULL,
  `questionText` text NOT NULL,
  `type` enum('performance','frequency') DEFAULT NULL,
  `performancetype` enum('Academic Performance','Classroom Behavior') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`questionID`, `questionText`, `type`, `performancetype`) VALUES
(1, 'Does not pay attention to details or makes careless mistakes, such as in homework', 'frequency', NULL),
(2, 'Has difficulty sustaining attention to tasks or activities', 'frequency', NULL),
(3, 'Does not seem to listen when spoken to directly', 'frequency', NULL),
(4, 'Does not follow through on instruction and fails to finish schoolwork (not due to oppositional behavior or failure to understand)', 'frequency', NULL),
(5, 'Has difficulty organizing tasks and activities', 'frequency', NULL),
(6, 'Avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort', 'frequency', NULL),
(7, 'Loses things necessary for tasks or activities (school assignments, pencils, or books)', 'frequency', NULL),
(8, 'Is easily distracted by extraneous stimuli', 'frequency', NULL),
(9, 'Is forgetful in daily activities', 'frequency', NULL),
(10, 'Fidgets with hands or feet or squirms in seat', 'frequency', NULL),
(11, 'Leaves seat when remaining seated is expected', 'frequency', NULL),
(12, 'Runs about or climbs excessively in situations when remaining seated is expected', 'frequency', NULL),
(13, 'Has difficulty playing or engaging in leisure activities quietly', 'frequency', NULL),
(14, 'Is \"on the go\" or often acts as if \"driven by a motor\"', 'frequency', NULL),
(15, 'Talks too much', 'frequency', NULL),
(16, 'Blurts out answers before questions have been completed', 'frequency', NULL),
(17, 'Has difficulty waiting his or her turn', 'frequency', NULL),
(18, 'Interrupts or intrudes on others (butts into conversations or games)', 'frequency', NULL),
(19, 'Argues with adults', 'frequency', NULL),
(20, 'Loses temper', 'frequency', NULL),
(21, 'Actively defies or refuses to comply with adults’ requests or rules', 'frequency', NULL),
(22, 'Deliberately annoys people', 'frequency', NULL),
(23, 'Blames others for his or her mistakes or misbehaviors', 'frequency', NULL),
(24, 'Is touchy or easily annoyed by others', 'frequency', NULL),
(25, 'Is angry or resentful', 'frequency', NULL),
(26, 'Is spiteful and vindictive', 'frequency', NULL),
(27, 'Bullies, threatens, or intimidates others', 'frequency', NULL),
(28, 'Initiates physical fights', 'frequency', NULL),
(29, 'Lies to obtain goods for favors or to avoid obligations (“cons” others)', 'frequency', NULL),
(30, 'Is truant from school (skips school) without permission', 'frequency', NULL),
(31, 'Is physically cruel to people', 'frequency', NULL),
(32, 'Has stolen items of nontrivial value', 'frequency', NULL),
(33, 'Deliberately destroys others’ property', 'frequency', NULL),
(34, 'Has used a weapon that can cause serious harm (bat, knife, brick, gun)', 'frequency', NULL),
(35, 'Is physically cruel to animals', 'frequency', NULL),
(36, 'Has deliberately set fires to cause damage', 'frequency', NULL),
(37, 'Has broken into someone else’s home, business, or car', 'frequency', NULL),
(38, 'Has stayed out at night without permission', 'frequency', NULL),
(39, 'Has run away from home overnight', 'frequency', NULL),
(40, 'Has forced someone into sexual activity', 'frequency', NULL),
(41, 'Is fearful, anxious, or worried', 'frequency', NULL),
(42, 'Is afraid to try new things for fear of making mistakes', 'frequency', NULL),
(43, 'Feels worthless or inferior', 'frequency', NULL),
(44, 'Blames self for problems, feels guilty', 'frequency', NULL),
(45, 'Feels lonely, unwanted, or unloved; complains that “no one loves” him or her', 'frequency', NULL),
(46, 'Is sad, unhappy, or depressed', 'frequency', NULL),
(47, 'Is self-conscious or easily embarrassed', 'frequency', NULL),
(48, 'Reading', 'performance', 'Academic Performance'),
(49, 'Mathematics', 'performance', 'Academic Performance'),
(50, 'Written expression', 'performance', 'Academic Performance'),
(51, 'Relationships with peers', 'performance', 'Classroom Behavior'),
(52, 'Following directions/rules', 'performance', 'Classroom Behavior'),
(53, 'Disrupting class', 'performance', 'Classroom Behavior'),
(54, 'Assignment completion', 'performance', 'Classroom Behavior'),
(55, 'Organizational skills', 'performance', 'Classroom Behavior');

-- --------------------------------------------------------

--
-- Table structure for table `userresponses`
--

CREATE TABLE `userresponses` (
  `responseID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `questionID` int(11) DEFAULT NULL,
  `optionID` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `responseDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `optionText` varchar(10) GENERATED ALWAYS AS (case `rating` when 0 then 'never' when 1 then 'occasionally' when 2 then 'often' when 3 then 'very often' else 'unknown' end) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `childName` varchar(100) DEFAULT NULL,
  `BirthDate` date DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `RegistrationDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questionoptions`
--
ALTER TABLE `questionoptions`
  ADD PRIMARY KEY (`optionID`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`questionID`);

--
-- Indexes for table `userresponses`
--
ALTER TABLE `userresponses`
  ADD PRIMARY KEY (`responseID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `questionID` (`questionID`),
  ADD KEY `optionID` (`optionID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questionoptions`
--
ALTER TABLE `questionoptions`
  MODIFY `optionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `questionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `userresponses`
--
ALTER TABLE `userresponses`
  MODIFY `responseID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `userresponses`
--
ALTER TABLE `userresponses`
  ADD CONSTRAINT `userresponses_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `userresponses_ibfk_2` FOREIGN KEY (`questionID`) REFERENCES `questions` (`questionID`),
  ADD CONSTRAINT `userresponses_ibfk_3` FOREIGN KEY (`optionID`) REFERENCES `questionoptions` (`optionID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
