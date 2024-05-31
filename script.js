
fetch('https://icanhazdadjoke.com/slack').then(data => data.json())
    .then(jokedata =>{
        const joketext = jokedata.attachments[0].text;
        const jokeele = document.querySelector('#jokeelement');
        jokeele.innerHTML = joketext;
    })