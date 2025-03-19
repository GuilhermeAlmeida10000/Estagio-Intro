// Adiciona um evento de escuta para o formulário de inscrição
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    // Obtém os valores dos campos do formulário
    const newGivenName = document.getElementById('newGivenName').value;
    const newSurname = document.getElementById('newSurname').value;
    const newUsername = document.getElementById('newUsername').value;
    const newBirthDate = document.getElementById('newBirthDate').value;
    const newRG = document.getElementById('newRG').value;
    const newCPF = document.getElementById('newCPF').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const successMsg = document.getElementById('successMsg');

    // Verifica se todos os campos estão preenchidos
    if (newGivenName && newSurname && newUsername && newBirthDate && newRG && newCPF && newEmail && newPassword) {
        // Pega os usuários já cadastrados do localStorage ou inicializa um array vazio
        let users = JSON.parse(localStorage.getItem('users')) || [];

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

        // Salva os usuários no localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        // Exibe mensagem de sucesso
        successMsg.textContent = 'Usuário cadastrado com sucesso!';
        successMsg.style.color = 'green';

        // Limpa os campos após cadastro
        document.getElementById('signUpForm').reset();
    } else {
        // Exibe mensagem de erro se algum campo não estiver preenchido
        successMsg.textContent = 'Por favor, preencha todos os campos!';
        successMsg.style.color = 'red';
    }
});