const result = document.getElementById('result');
const filter = document.getElementById('filter');

//array to store users
const listItems = [];

// adding event listener to input and calling the function
filter.addEventListener('input', (e) => filterUsers(e.target.value));


// filter function
function filterUsers(search) {

    // traverse through the whole array
    listItems.forEach(item => {
        // if the search term is in the list item then remove the class 'hide'
        if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
            item.classList.remove('hide');
        }
        // else add the class 'hide'
        else {
            item.classList.add('hide');
        }
    });
}

async function getUsers() {

    // fetch the data from the api
    const response = await fetch('https://randomuser.me/api?results=20');
    // convert the data to json and destructuring it to only get the results
    const { results } = await response.json();
    // clear the result div intially
    result.innerHTML = '';
    // traverse through the results array
    results.forEach(user => {
        // create a li element
        const li = document.createElement('li');
        // push the li element to the listItems array
        listItems.push(li);
        // adding content to the li element
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" />
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `
            // append the li element to the result div
        result.appendChild(li);
    });
}

// calling the function to get the users
getUsers();