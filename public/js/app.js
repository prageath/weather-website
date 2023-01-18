console.log('Client side javascript file is loaded')

const weatherFrom = document.querySelector('form')
const search = document.querySelector('input')

const msgOne = document.querySelector('#msg-1')
const msgSecond = document.querySelector('#msg-2')

weatherFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    msgOne.textContent = 'Loading...'
    msgSecond.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {

        response.json().then((data) => {

            if(data.error){
                msgOne.textContent = data.error
            }
            else{
                msgOne.textContent = data.location;
                msgSecond.textContent = data.forecast;
            }

        })

    })


})