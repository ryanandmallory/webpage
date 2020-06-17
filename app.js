const alertBackground = document.querySelector('.alert-background');
let degreeDifficulty = document.querySelector('.degree-difficulty');
let scoreOne = document.querySelector('#score-one');
let scoreTwo = document.querySelector('#score-two');
let scoreThree = document.querySelector('#score-three');
let scoreFour = document.querySelector('#score-four');
let scoreFive = document.querySelector('#score-five');
let total = document.querySelector('.total');

const calculateScore = function (num1, num2, num3, num4, num5) {
    const judgeScore = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5);
    const totalScore = judgeScore * parseFloat(degreeDifficulty.value);
    return totalScore;
}


document.addEventListener('click', function (event) {

	if (event.target.matches('.submit')) {
        if (scoreFour.value === '') {
            scoreFour.style.backgroundColor = 'lightgray';
            scoreFour.style.color = 'lightgray';
            scoreFive.style.backgroundColor = 'lightgray';
            scoreFive.style.color = 'lightgray';
            scoreFour.value = 0;
        }
        if (scoreFive.value === '') {
            scoreFive.style.backgroundColor = 'lightgray';
            scoreFive.style.color = 'lightgray';
            scoreFive.value = 0;
        }

        if (degreeDifficulty.value === '' || scoreOne.value === '' || scoreTwo.value === '' || scoreThree.value === ''){
            alert('Please fill in you data');
            scoreFour.style.backgroundColor = '#ffffff';
            scoreFour.value = '';
            scoreFive.style.backgroundColor = '#ffffff';
            scoreFive.value = '';
        }
        
        let finalTotal = calculateScore(scoreOne.value, scoreTwo.value, scoreThree.value, scoreFour.value, scoreFive.value);
        total.removeAttribute("disabled");
        total.value = finalTotal.toFixed(2);
	}

	if (event.target.matches('.clear')) {
        alertBackground.style.display = 'flex';
    }
    
    if (event.target.matches('.noBtn')) {
        alertBackground.style.display = 'none';
    }
    
    if (event.target.matches('.yesBtn')) {
        window.location.reload();  
	}

}, false);
