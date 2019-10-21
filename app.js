const button = document.querySelector('.get-joke-btn');
const displayJoke = document.querySelector('.joke');

const getJoke = event => {
	fetch('https://sv443.net/jokeapi/category/Programming')
		.then(response => response.json())
		.then(joke => {
			if (joke.type === 'single') {
				displayJoke.innerHTML = `
            <ul class="list">
               <li><h1>${joke.joke}</h1></li>
            </ul>
            `;
			} else if (joke.type == 'twopart') {
				displayJoke.innerHTML = `
            <ul class="list">
               <li><h1>Setup: ${joke.setup}</h1></li>
               <li><h1>Delivery: ${joke.delivery}</h1></li>
            </ul>
            `;
			} else {
				displayJoke.inner = '<h2>something went wrong, please try again</h2>';
			}
		});
};

button.addEventListener('click', getJoke);
