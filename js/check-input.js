document.getElementById('name').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    let regex = /^[а-яА-Яa-zA-Z\s]*$/;
    if (!regex.test(inputValue)) {
      event.target.value = inputValue.slice(0, -1);
    }
  });

  // работает (запрещает ввод цифр в name)