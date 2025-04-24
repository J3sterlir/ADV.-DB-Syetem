document.getElementById('EmployeeLogin').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('Username').value;
    const password = document.getElementById('password').value;

    if (email === 'Employee' && password === 'admin123') {
        window.location.href = '/UI/PAGES/ADVDB.html';
    } 
    else {
        alert('Invalid email or password. Please try again.');
    }
});