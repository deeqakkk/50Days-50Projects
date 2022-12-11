const mainContainer = document.getElementById('main-container');

fetch('data.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data.projects[0]);
    const dataFound = data.projects;
    dataFound.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('group');
        div.innerHTML = `
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden border rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"> 
            <img src="${item.projectImageLink}" alt="projectImage" class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <div class="flex  justify-between mt-5 align-middle">
            <div class="align-middle">
            <a href="${item.projectLink}" class="flex text-gray-700 hover:text-gray-800">
                <span class="block text-sm font-medium">${item.projectName}</span>
            </a>
            </div>
            <div class="ml-6">
            <a href="${item.sourceCode}" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
                </svg>
            </a>
        </div>
        </div>
                `;
        mainContainer.appendChild(div);
    })

}).catch(err => {
    return err;
});