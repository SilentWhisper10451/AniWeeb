const correctUser1 = "Otaku";
        const correctPass1 = "WEEB"; 
        const correctUser2 = "JoshBayot";
        const correctPass2 = "SiKenPud";

        const form = document.querySelector('form');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        form.addEventListener('submit', function(event) {
            if (
                (usernameInput.value === correctUser1 && passwordInput.value === correctPass1) || 
                (usernameInput.value === correctUser2 && passwordInput.value === correctPass2)
            ) {
                usernameInput.setCustomValidity('');
                passwordInput.setCustomValidity('');
            } else {
                event.preventDefault();
                alert("You really a no lifer ny guy?");
                usernameInput.setCustomValidity("Incorrect");
                passwordInput.setCustomValidity("incorrect");
                usernameInput.reportValidity();
            }
        });

        usernameInput.addEventListener('input', function() {
            usernameInput.setCustomValidity('');
        });

        passwordInput.addEventListener('input', function() {
            passwordInput.setCustomValidity('');
        });

        document.getElementById('show-password').addEventListener('change', function() {
            var passwordInput = document.getElementById('password');
            if (this.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });

