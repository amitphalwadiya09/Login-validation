    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');
    const allGoodMessage = document.querySelector('.all_good');
    const submitBtn = document.querySelector('.btn');

    emailInput.addEventListener('input', checkEmail);
    passwordInput.addEventListener('input', checkPassword);
    submitBtn.addEventListener('click', submitForm);

    if (event.key === 'Enter') {
        submitForm(event);
    }

    function checkEmail() {
        const emailValue = emailInput.value.trim();

        if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
            emailError.style.display = 'none';
        } else {
            emailError.style.display = 'block';
        }

        checkAllGood();
    }

    function checkPassword() {
        const passwordValue = passwordInput.value.trim();

        if (passwordValue.length > 8) {
            passwordError.style.display = 'none';
        } else {
            passwordError.style.display = 'block';
        }

        checkAllGood();
    }

    function checkAllGood() {
        const emailErrorDisplay = emailError.style.display;
        const passwordErrorDisplay = passwordError.style.display;

        if (emailErrorDisplay === 'none' && passwordErrorDisplay === 'none') {
            allGoodMessage.style.display = 'block';
        } else {
            allGoodMessage.style.display = 'none';
        }
    }

    function submitForm(event) {
        event.preventDefault(); // Prevents the form from submitting

        if (allGoodMessage.style.display === 'block') {
            const confirmation = confirm('Are you sure you want to submit the form?');

            if (confirmation) {
                alert('Successful login!');
                // You can redirect the user or perform other actions here
            }
        } else {
            alert('Please fix the errors before submitting.');
        }
    }



