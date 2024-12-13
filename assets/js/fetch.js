document.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.getElementById('post-container');

    fetch('https://jsonplaceholder.typicode.com/posts/37')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(post => {
            const postCard = document.createElement('div');
            postCard.classList.add('max-w-md', 'bg-white', 'rounded-lg', 'shadow-md', 'p-6', 'mx-auto', 'my-8');

            postCard.innerHTML = `
                 <div class="mb-4">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">Post ID: <span class="font-normal">${post.id}</span></h2>
                </div>
                <div class="mb-4">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">${post.title}</h2>
                </div>
                <div class="mb-4">
                    <p class="text-gray-700">${post.body}</p>
                </div>
            `;
            postContainer.appendChild(postCard);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            postContainer.innerHTML = `<p class="text-red-500 text-center">Failed to load post.</p>`;
        });
});