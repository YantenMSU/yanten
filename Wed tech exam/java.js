function changeText() {
    document.getElementById('interactive-text').innerText = 'The text has been changed!';
    alert('Text has been changed!');
}

function showPrompt() {
    const name = prompt('Enter your Name:');
    if (name) {
        document.getElementById('interactive-text').innerText = `Hello dear, ${name}!`;
    }
}