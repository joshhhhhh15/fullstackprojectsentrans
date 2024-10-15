document.addEventListener("DOMContentLoaded", function () {
    const rowsPerPage = 100; 
    let currentPage = 1;    
    let totalPages = 0;      
    let data = [];           
    let filteredData = [];   

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(fetchedData => {
            data = fetchedData;
            filteredData = data;  
            totalPages = Math.ceil(data.length / rowsPerPage); 
            displayPage(currentPage);  
            setupPagination();       
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageData = filteredData.slice(start, end); 

        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = ''; 

        pageData.forEach(comment => {
            const row = document.createElement('tr');
            row.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700');
            row.innerHTML = `
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${comment.postId}
                </th>
                <td class="px-6 py-4">${comment.id}</td>
                <td class="px-6 py-4">${comment.name}</td>
                <td class="px-6 py-4">${comment.email}</td>
                <td class="px-6 py-4">${comment.body}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    function setupPagination() {
        const paginationContainer = document.querySelector(".pagination");
        paginationContainer.innerHTML = ''; 

        const prevBtn = document.createElement('li');
        prevBtn.innerHTML = `<a href="#" class="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>`;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayPage(currentPage);
                setupPagination(); 
            }
        });
        paginationContainer.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('li');
            pageBtn.innerHTML = `<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight ${i === currentPage ? 'text-blue-600 bg-blue-50 border-gray-300' : 'text-gray-500 bg-white border-gray-300'} border hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${i}</a>`;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                displayPage(currentPage);
                setupPagination(); 
            });
            paginationContainer.appendChild(pageBtn);
        }

        const nextBtn = document.createElement('li');
        nextBtn.innerHTML = `<a href="#" class="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>`;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayPage(currentPage);
                setupPagination();
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        filteredData = data.filter(comment => comment.email.toLowerCase().includes(query)); 
        totalPages = Math.ceil(filteredData.length / rowsPerPage);
        currentPage = 1;  
        displayPage(currentPage);  
        setupPagination();   
    });
});
