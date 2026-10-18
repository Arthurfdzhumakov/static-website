const button = document.getElementById("checkButton");
const status = document.getElementById("status");

button.addEventListener("click", function () {
    status.textContent = "Проверка пройдена успешно!";
    button.textContent = "Проверено ✓";
});
