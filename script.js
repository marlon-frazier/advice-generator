document.getElementById('random').addEventListener('click', getAdvice)


function getAdvice(){
    const url = 'https://api.adviceslip.com/advice'

    fetch(url)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            console.log(data)
            document.getElementById('adviceNum').innerText = `# ${data.slip.id}`
            document.getElementById('advice').innerText = data.slip.advice
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
