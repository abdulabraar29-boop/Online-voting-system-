# Online-voting-system-
<!DOCTYPE html>
<html>
<head>
<title>Online Voting System</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Online Voting System</h1>

<a href="login.html">
<button>Login to Vote</button>
</a>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
<title>Login</title>
</head>

<body>

<h2>Voter Login</h2>

<input type="text" placeholder="Enter Voter ID">
<br><br>

<a href="vote.html">
<button>Login</button>
</a>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
<title>Vote</title>
</head>

<body>

<h2>Select Candidate</h2>

<form>
<input type="radio" name="vote"> Candidate A <br>
<input type="radio" name="vote"> Candidate B <br>
<input type="radio" name="vote"> Candidate C <br><br>

<a href="result.html">
<button type="button">Submit Vote</button>
</a>

</form>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
<title>Results</title>
</head>

<body>

<h2>Voting Result</h2>

<p>Candidate A : 10 votes</p>
<p>Candidate B : 7 votes</p>
<p>Candidate C : 3 votes</p>

</body>
</html>
body{
text-align:center;
font-family:Arial;
background:#f0f0f0;
}

button{
padding:10px;
font-size:18px;
}
