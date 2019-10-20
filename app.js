const button = document.querySelector(".get-joke-btn");
const joke = document.querySelector(".joke");

const getJoke = event => {
   fetch("https://sv443.net/jokeapi/category/Programming")
      .then(response => response.json())
      .then(joke => {
         if (joke.type === "single") {
            joke.innerHTML = `
            <ul>
               <li>${joke.joke}</li>
            </ul>
            `;
            console.log(joke)

         } else {
            joke.innerHTML = `something went wrong, try again`;
         }
      })
}


button.addEventListener("click", getJoke);
