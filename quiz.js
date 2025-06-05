document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const lightCondition = document.getElementById('light-condition').value;
    const waterFrequency = document.getElementById('water-frequency').value;
    const spaceAvailability = document.getElementById('space-availability').value;

    let resultMessage = "";

    if (!lightCondition || !waterFrequency || !spaceAvailability) {
        alert("Заполните все поля!");
        return;
    }

    // Логика выбора подходящего растения
    switch(true) {
        case lightCondition === "sunny":
            if (waterFrequency === "daily") {
                resultMessage = "Вам подойдет Орхидея Фаленопсис.";
            } else if (waterFrequency === "weekly") {
                resultMessage = "Рекомендуем Драцену Сандеру ('Счастливый бамбук') или Фикус Бенджамина.";
            } else {
                resultMessage = "Лучшее решение — Кактус Опунция.";
            }
            break;

        case lightCondition === "partial-shade":
            if (waterFrequency === "daily") {
                resultMessage = "Вам подойдут Спатифиллум Уоллиса или Антуриум Андрэ.";
            } else if (waterFrequency === "weekly") {
                resultMessage = "Рекомендуем Калатею Макоя или Филодендрон Сердцелистный.";
            } else {
                resultMessage = "Лучший выбор — Диффенбахия Пятнистая.";
            }
            break;

        case lightCondition === "shady":
            if (waterFrequency === "daily") {
                resultMessage = "Вам подойдет Сенполия Гибридная (Фиалка)";
            } else if (waterFrequency === "weekly") {
                resultMessage = "Предлагаем рассмотреть Нефролепис Возвышенный (Бостонский папоротник).";
            } else {
                resultMessage = "Лучшие варианты — Замиокулькас Замиелистный или Плющ Обыкновенный.";
            }
            break;
    }

    // Показываем результат
    document.getElementById('result').innerText = resultMessage;
});