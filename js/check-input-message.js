const inputField = document.getElementById('message');

inputField.addEventListener('input', function() {
    let text = inputField.value;
    let newText = text.replace(/(^|\. *)([a-z])/g, (match, separator, char) => separator + char.toUpperCase());
    inputField.value = newText;
});