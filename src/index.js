const sssdiv = document.querySelector('#sssdiv')

function template() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then(response => {
    if (!response.ok){
        throw new Error ('Alles kaputt')
    }
    return response.json();
})
.then(res => res.map(({thumbnailUrl}) =>
console.log(sssdiv.insertAdjacentHTML("beforeend", `<img src="${thumbnailUrl}" alt="somePhoto" width='250px'>`))
))
.catch(err => console.log(err))
};
template()
