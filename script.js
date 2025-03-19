// Adiciona um evento de escuta para o formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário
    
    // Obtém os valores dos campos de nome de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Carrega os usuários cadastrados do localStorage ou inicializa um array vazio
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Adiciona um usuário padrão se não existir
    const defaultUser = { username: 'admin', password: 'admin' };
    if (!users.some(user => user.username === defaultUser.username)) {
        users.push(defaultUser);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Verifica se o usuário e senha são válidos
    const validUser = users.find(user => user.username === username && user.password === password);
    
    if (validUser) {
        // Redireciona para a página da dashboard após login bem-sucedido
        window.location.href = 'dashboard.html';
    } else {
        // Exibe uma mensagem de erro se o login falhar
        errorMsg.textContent = 'Usuário ou senha incorretos!';
    }
});