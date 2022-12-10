const mainContainer = document.getElementById('main-container');

fetch('data.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data.projects[0]);
    const dataFound = data.projects;
    dataFound.forEach(item => {
        const div = document.createElement('div');
        console.log(item.serialNo);
        div.classList.add('group');
        div.innerHTML = `
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"> 
                        <img src="${item.projectImageLink}" alt="projectImage" class="h-full w-full object-cover object-center group-hover:opacity-75">
                    </div>
                   
                    <p class="mt-1 text-lg font-medium text-gray-900">${item.serialNo}</p>
                    <h3 class="mt-4 text-sm text-gray-700">${item.projectName}</h3>
                `;
        mainContainer.appendChild(div);
    })

}).catch(err => {
    return err;
});