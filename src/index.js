import axios from "axios";
// console.log(fetch('https://jsonplaceholder.typicode.com/albums')
// .then(response => {
//     if (!response.ok){
//         throw new Error ('Alles kaputt')
//     }
//     return response.json();
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))
// ); 



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



// async function fetch(){
//     try{
//         const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
//         const formatedData = response.data;
//         return formatedData;
//     } catch (error){
//     if(error.code === 'ERR_NETWORK'){
//         console.log(1);        }
//     }
// }
// fetch();
