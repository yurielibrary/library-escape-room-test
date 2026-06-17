function checkAnswer() {
    let input = document.getElementById('answer').value.toLowerCase().trim();
    let correctAnswers = [
        'vw820.3ach /744370',
        'vw820.3ach /597556',
        'vw820.3ach /505353'

    ];

    if (correctAnswers.includes(input)) {
        document.getElementById('feedback').innerText = '✅ Correct! Now go to Level 2 and find the next clue.';
        document.getElementById('nextLink').style.display = 'block';
    } else {
        document.getElementById('feedback').innerText = '❌ Try again. Hint: Search the SOAS library catalogue by the book title. The call number starts with VW';
    }
}
