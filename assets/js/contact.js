document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const formElements = form.elements;
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;
        // Reset focus class before validation
        Array.from(formElements).forEach(element => {
            if(element.tagName !== "BUTTON") element.classList.remove('focus-ring');
        });


        // Validate each field
        for (const element of formElements) {
            if (element.type === "submit") continue; // Skip button
            if (!element.value.trim()) {
                isValid = false;
                element.classList.add('focus-ring')
                alert(`${element.previousElementSibling.textContent.slice(0, -1)} is required`);
                break; // Exit loop early if one error found

            }
           if (element.type === "email") {
                if (!isValidEmail(element.value)) {
                    isValid = false;
                    element.classList.add('focus-ring');
                    alert("Email is not valid.");
                    break;
                }
            }

            if (element.id === 'phoneNumber') {
                if (!isValidPhone(element.value)) {
                  isValid = false;
                    element.classList.add('focus-ring');
                   alert("Phone number must contain only numbers and have at least 10 digits.")
                    break;
                 }
            }
        }


        if(isValid) {
             alert("Form submitted succesfully");
            form.reset();
        }

    });

    //highlight form inputs on focus
    Array.from(formElements).forEach(element => {
        if(element.tagName !== "BUTTON") {
            element.addEventListener('focus', (e)=> e.target.classList.add('focus-ring'));
            element.addEventListener('blur', (e)=> e.target.classList.remove('focus-ring'));

        }

    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

     function isValidPhone(phone) {
        const phoneRegex = /^[0-9]+$/;
         return phoneRegex.test(phone) && phone.length >= 10;

    }

});