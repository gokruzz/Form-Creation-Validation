// Step 1: Define the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Step 2: API URL
    const dataContainer = document.getElementById('api-data');   // Step 3: Target div

    try {
        const response = await fetch(apiUrl);   // Step 4: Fetch data from API
        const users = await response.json();    // Step 4: Convert response to JSON

        dataContainer.innerHTML = '';           // Step 5: Clear "Loading..." text

        const userList = document.createElement('ul');  // Step 6: Create UL

        users.forEach(user => {
            const listItem = document.createElement('li'); // Step 6: Create LI
            listItem.textContent = user.name;              // Set user name
            userList.appendChild(listItem);                // Add LI to UL
        });

        dataContainer.appendChild(userList);    // Add UL to the page
    } catch (error) {
        dataContainer.innerHTML = '';           // Clear content on error
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Step 7: Run the function after HTML is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
