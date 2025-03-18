document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newGivenName = document.getElementById('newGivenName').value;
    const newSurname = document.getElementById('newSurname').value;
    const newUsername = document.getElementById('newUsername').value;
    const newBirthDate = document.getElementById('newBirthDate').value;
    const newRG = document.getElementById('newRG').value;
    const newCPF = document.getElementById('newCPF').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const successMsg = document.getElementById('successMsg');

    if (newGivenName && newSurname && newUsername && newBirthDate && newRG && newCPF && newEmail && newPassword) {
        let users = JSON.parse(localStorage.getItem('users')) || []; // Pega os usuários já cadastrados

        // Verifica se o usuário já existe
        const userExists = users.some(user => user.username === newUsername);
        if (userExists) {
            successMsg.textContent = 'Usuário já cadastrado!';
            successMsg.style.color = 'red';
            return;
        }

        // Adiciona o novo usuário ao array
        users.push({
            givenName: newGivenName,
            surname: newSurname,
            username: newUsername,
            birthDate: newBirthDate,
            rg: newRG,
            cpf: newCPF,
            email: newEmail,
            password: newPassword
        });

        // Salva os usuários no LocalStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        successMsg.textContent = 'Usuário cadastrado com sucesso!';
        successMsg.style.color = 'green';

        // Limpa os campos após cadastro
        document.getElementById('signUpForm').reset();
    } else {
        successMsg.textContent = 'Por favor, preencha todos os campos!';
        successMsg.style.color = 'red';
    }
});