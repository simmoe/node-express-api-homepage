console.log('hejsa')
let hvalDiv = document.querySelector('#hvaler')
hvalDiv.style.top = 0

document.querySelector('#hvaler h2').addEventListener('click', ()=> {
    if(hvalDiv.style.top == '90vh'){
        hvalDiv.style.top = 0;
    }else{
        hvalDiv.style.top = '90vh';
    }
})

document.querySelector('#submitH').addEventListener('click', () => {
    fetch('http://localhost:4040/api/hvaler')
        .then(res => res.json())
            .then(json => document.querySelector('#hvaler .json').innerHTML = JSON.stringify(json))
})