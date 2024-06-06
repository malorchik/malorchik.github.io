document.addEventListener('DOMContentLoaded', function() {
    // Изначально скрыть информационную безопасность и показать СБИС
    document.querySelector('.sbis-programs-full').classList.add('active');
    document.querySelector('.information-security-full').classList.remove('active');

    // Назначить обработчики событий для кнопок
    document.querySelector('[data-target="sbis-programs"]').addEventListener('click', function() {
        toggleProgramsAndSecurity('sbis-programs');
    });

    document.querySelector('[data-target="information-security"]').addEventListener('click', function() {
        toggleProgramsAndSecurity('information-security');
    });

    function toggleProgramsAndSecurity(target) {
        // Удалить класс 'active' у текущего активного блока
        document.querySelector('.sbis-programs-full.active').classList.remove('active');
        document.querySelector('.information-security-full.active').classList.remove('active');

        // Добавить класс 'active' к выбранному блоку
        document.querySelector('.' + target + '-full').classList.add('active');

        // Изменить стиль кнопок
        document.querySelectorAll('.sbis-button, .information-security-button').forEach(button => {
            if (button.dataset.target === target) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
});