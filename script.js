function checkAnswer() {
    let input = document.getElementById('answer').value.toLowerCase().trim();
    let correctAnswers = [
        'pl8014.a1 a2 1958',
        'pl8014 a1 a2 1958',
        'pl8014.a1a2 1958'
    ];

    if (correctAnswers.includes(input)) {
        document.getElementById('feedback').innerText = '✅ Correct! Now go to Level 2 and find the next clue.';
        document.getElementById('nextLink').style.display = 'block';
    } else {
        document.getElementById('feedback').innerText = '❌ Try again. Hint: Look at the full catalogue record.';
    }
}
