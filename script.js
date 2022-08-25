fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.joke;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
        console.log(jokeText);
    })

    // fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    // .then((response) => {
    //   return response.json();
    // })
    // .then((myJson) => {
    //   console.log(myJson);
    // });