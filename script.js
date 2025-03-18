document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    let users = JSON.parse(localStorage.getItem('users')) || []; // Carrega os usuários cadastrados
    
    // Adiciona usuário padrão se não existir
    const defaultUser = { username: 'admin', password: 'admin' };
    if (!users.some(user => user.username === defaultUser.username)) {
        users.push(defaultUser);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Verifica se o usuário e senha são válidos
    const validUser = users.find(user => user.username === username && user.password === password);
    
    if (validUser) {
        window.location.href = 'dashboard.html'; // Redireciona após login bem-sucedido
    } else {
        errorMsg.textContent = 'Usuário ou senha incorretos!';
    }

    
});