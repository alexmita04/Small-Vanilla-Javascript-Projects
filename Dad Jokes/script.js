const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await (await fetch('https://icanhazdadjoke.com', config)).json();
  jokeEl.textContent = res.joke;
}

jokeBtn.addEventListener('click', generateJoke);
