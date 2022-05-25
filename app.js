const btngenerate = document.getElementById("btn-generate")
const txtFind = document.getElementById("txt-find")
const url = "https://random.dog/woof.json"
const maincard = document.getElementById("main")

const getCharacter = () =>{
    fetch (url)
    .then(res => res.json())
    .then(data => {(data[0])


    const card = document.createElement('div')
    card.classList.add("card")
    maincard.appendChild(card)
   

    const img = document.createElement('img')
    img.classList.add("img-card")
    img.setAttribute('src',data.url);
    img.setAttribute = ('alt',data.url);
    card.appendChild(img)
    

    const title = document.createElement('p')
    title.classList.add("randomTitle")
    title.textContent = data.title
    card.appendChild(title)

})
}
btngenerate.addEventListener('click',getCharacter)

