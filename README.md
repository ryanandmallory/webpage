<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Dive Calculator</title>
</head>
<body>
    <div class="alert-background">
        <div class="alert">
            <h3>Are you sure you want to clear these scores?</h3>
            <button class="yesBtn">Yes</button>
            <button class="noBtn">No</button>
        </div>
    </div>
    
    <div class="container">
        <h1>Poco Dive Calculator</h1>
        <div class="labels">
            <p>Degree <br />of Difficulty</p>
            <p>Judge 1</p>
            <p>Judge 2</p>
            <p>Judge 3</p>
            <p>Judge 4</p>
            <p>Judge 5</p>
            <p>Total</p>
        </div>
        <div class="score-wrapper">
            <div class="difficulty">
                <p class="mobile-text">Degree of Difficulty</p>
                <input class="degree-difficulty" type="number">
            </div>
            <div class="scores">
                <div class="line"></div>
                <p class="mobile-text">Judge 1</p>
                <input id="score-one" class="score" type="number">
                <p class="mobile-text">Judge 2</p>
                <input id="score-two" class="score" type="number">
                <p class="mobile-text">Judge 3</p>
                <input id="score-three" class="score" type="number">
                <p class="mobile-text">Judge 4</p>
                <input id="score-four" class="score" type="number">
                <p class="mobile-text">Judge 5</p>
                <input id="score-five" class="score" type="number">
                <div class="line"></div>
            </div>
            <div class="totals">
                <p class="mobile-text">Totals</p>
                <input class="total" type="number" disabled>
            </div>
        </div>
        <div class="submit-total">
            <button class="submit">Submit</button>
            <button class="clear">Clear</button>
        </div>
    </div>
    <script src="js/app.js"></script>
</body>
</html>
