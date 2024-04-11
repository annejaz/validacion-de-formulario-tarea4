function emailValidation() {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const emailConfirmInput = document.getElementById('email_confirm');
  
    // Añadir evento input a los campos de correo electrónico
    emailInput.addEventListener('input', () => {
      validateEmails();
    });
  
    emailConfirmInput.addEventListener('input', () => {
      validateEmails();
    });
  
    function validateEmails() {
      const errorMessage = "Los correos electrónicos no coinciden";
      const emailErrorElement = document.getElementById('email-error');
  
      if(emailInput.value !== emailConfirmInput.value) {
        if(!emailErrorElement) {
          const element = document.createElement('p');
          element.textContent = errorMessage;
          element.id = 'email-error';
          element.classList.add("alert");
          emailConfirmInput.parentNode.appendChild(element);
          emailConfirmInput.style.backgroundColor = 'rgba(230,169,171,.5)';
        }
      } else {
        // Si los correos electrónicos coinciden, eliminar el mensaje de error y restaurar el color de fondo
        if(emailErrorElement) {
          emailErrorElement.remove();
          emailConfirmInput.style.backgroundColor = 'white';
        }
      }
    }
  }
  
  window.onload = emailValidation;
  