document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Usuário fixo para teste (posteriormente pode ser dinâmico)
    const user = { username: 'admin', password: '1234' };

    if (username === user.username && password === user.password) {
        window.location.href = 'views/dashboard.html'; // Redireciona após login bem-sucedido
    } else {
        errorMsg.textContent = 'Usuário ou senha incorretos!';
    }

    
});