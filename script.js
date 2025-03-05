document.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
      header.style.background = "#1c1c1c";
  } else {
      header.style.background = "#222";
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const privacyCheckbox = document.getElementById("privacy");
  const submitButton = document.getElementById("submit-btn");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  // Регулярное выражение для имени (только латинские буквы и пробелы)
  const namePattern = /^[A-Za-z\s]+$/;

  function validateForm() {
      let isValid = true;

      // Валидация имени
      if (!namePattern.test(nameInput.value.trim())) {
          nameError.textContent = "Only Latin letters and spaces allowed";
          nameError.style.display = "block";
          isValid = false;
      } else {
          nameError.style.display = "none";
      }

      // Валидация email
      if (!emailInput.validity.valid) {
          emailError.textContent = "Enter a valid email address";
          emailError.style.display = "block";
          isValid = false;
      } else {
          emailError.style.display = "none";
      }

      // Проверка, что чекбокс отмечен
      if (!privacyCheckbox.checked) {
          isValid = false;
      }

      // Активация кнопки отправки, если всё валидно
      submitButton.disabled = !isValid;
  }

  // Проверяем ввод при каждом изменении
  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  privacyCheckbox.addEventListener("change", validateForm);

  // Отправка формы
  form.addEventListener("submit", function(event) {
      event.preventDefault();

      alert(`Thank you, ${nameInput.value}! Your form has been submitted successfully.`);
      form.reset();
      validateForm(); // Обновляем состояние кнопки после очистки формы
  });
});

