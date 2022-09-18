const API_URL = 'https://api.github.com/users/';
// To read more: https://docs.github.com/en/rest/overview/resources-in-the-rest-api
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// function to find the user on github with username
async function getUser(username) {
    try {
        // destructuring the data from the response
        const { data } = await axios(
            API_URL + username
        );
        //  calling the function to create the user card
        createUserCard(data);
        // calling the function to get the repos
        getRepos(username);
    } catch (err) {
        // if there is an error, create an error card with the error message
        if (err.response.status == 404) {
            createErrorCard(
                'No profile with this username'
            );
        }
    }
}

// function to get the repos of the user
async function getRepos(username) {
    try {
        // destructuring the data from the response
        const { data } = await axios(
            API_URL + username + '/repos?sort=created'
        );
        // calling the function to add the repos to the card
        addReposToCard(data);
    } catch (err) {
        createErrorCard('Problem fetching repos');
    }
}
// function to create the main user card
function createUserCard(user) {
    const userID = user.name || user.login;
    const userBio = user.bio ?
        `<p>${user.bio}</p>` :
        '';
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;
    main.innerHTML = cardHTML;
}

// function to create the error card
function createErrorCard(msg) {
    // creating the error card
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;
    // adding the error card to the main div
    main.innerHTML = cardHTML;
}


// function to add the repos to the card
function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    // creating the repos list
    // slice will make sure that only first 5 repos are shown
    repos.slice(0, 5).forEach((repo) => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repos');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;
        reposEl.appendChild(repoEl);
    });
}


// event listener for the form on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if (user) {
        getUser(user);
        search.value = '';
    }
});