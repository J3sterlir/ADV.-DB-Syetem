document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const contentDiv = document.getElementById('content');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const contentId = this.getAttribute('data-content');
            loadContent(contentId);
        });
    });

    function loadContent(contentId) {
        let content = '';

        switch (contentId) {
            case 'employee-profile':
                content = `
                    <h1>Employee Profile</h1>
                    <p>Details about the employee will go here.</p>
                `;
                break;
            case 'tax-return':
                content = `
                    <h1>Tax Return Filing</h1>
                    <p>Tax returns will be filed directly to BIR.</p>
                `;
                break;
            case 'tasks':
                content = `
                    <h1>Tasks</h1>
                    <p>Details about tasks will go here.</p>
                `;
                break;
            case 'clients':
                content = `
                    <h1>Clients</h1>
                    <div class="search-container">
                        <input type="text" id="search-input" placeholder="Search by ID or Name" />
                        <button id="search-button">Search</button>
                    </div>
                    <div id="search-results"></div>
                `;
                break;
            case 'about':
                content = `
                    <h1>About</h1>
                    <p>Information about the company will go here.</p>
                `;
                break;
            case 'settings':
                content = `
                    <h1>Settings</h1>
                    <p>Settings options will go here.</p>
                `;
                break;
            default:
                content = `
                    <h1>Welcome to JMCYK Client Management System</h1>
                    <p>This is a property of JMCYK Bookkeeping Services.</p>
                `;
                break;
        }

        contentDiv.innerHTML = content;

        if (contentId === 'clients') {
            const clients = [
                { id: 1, name: "Jeremiah Lirag" },
                { id: 2, name: "Frances Yvonne Madera" },
                { id: 3, name: "Cisco" },
                { id: 4, name: "Ateneo de Naga University" }
            ];

            document.getElementById('search-button').addEventListener('click', function() {
                const input = document.getElementById('search-input').value.toLowerCase();
                const results = clients.filter(client => 
                    client.id.toString().includes(input) || 
                    client.name.toLowerCase().includes(input)
                );

                displayResults(results);
            });
        }

        document.querySelectorAll('.sidebar a').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.sidebar a[data-content="${contentId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    function displayResults(results) {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '';

        if (results.length > 0) {
            results.forEach(client => {
                const div = document.createElement('div');
                div.textContent = `ID: ${client.id}, Name: ${client.name}`;
                resultsContainer.appendChild(div);
            });
        } else {
            resultsContainer.textContent = 'No results found';
        }
    }
});