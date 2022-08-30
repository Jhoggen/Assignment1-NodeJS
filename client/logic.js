document.getElementById("getMemes").addEventListener("click", function() {
    getExternalMemes()
})

document.getElementById("getLocalMemes").addEventListener("click", function() {
    getLocalMemes()
})

document.getElementById("clearMeme").addEventListener("click", function() {
    clearMemes()
})

document.getElementById("postMeme").addEventListener("click", function() {
    postNewMeme()
})

function clearMemes() {
    document.getElementById("outputMemes").innerHTML = ""
}



async function getExternalMemes() {
    const memeList = await fetch ("http://localhost:3000/api/meme")
    const getAllMemes = await memeList.json()
    
    const element = getAllMemes.data.memes
    var listOfObject = element[Math.floor(Math.random()*element.length)];
        
        let main = document.getElementById("outputMemes")

    
        let mainContainer = document.createElement("div")
        mainContainer.classList.add("mainContainer")
    
    
        let textContainer = document.createElement("h2")
        textContainer.classList.add("textContainer")
        mainContainer.innerText = listOfObject.name
    

        let imgContainer = document.createElement("div")
        const src = listOfObject.url
        imgContainer.classList.add("imgContainer")
        let imgTag = document.createElement("img")
        imgTag.src = src


        imgContainer.append(imgTag)
        main.append(mainContainer)
        mainContainer.append(textContainer, imgContainer)

}




async function getLocalMemes() {
    const localMeme = await fetch ("http://localhost:3000/api/local")
    const getAllLocalMemes = await localMeme.json()
    console.log(getAllLocalMemes)

    var listOfObject = getAllLocalMemes[Math.floor(Math.random()*getAllLocalMemes.length)];
    

        let main = document.getElementById("outputMemes")
        main.classList.add("main")
        
        let mainContainer = document.createElement("h2")
        mainContainer.classList.add("mainContainer")
        mainContainer.innerText = listOfObject.name

        let imgContainer = document.createElement("div")
        const src = listOfObject.url
        imgContainer.classList.add("imgContainer")
        let imgTag = document.createElement("img")
        imgTag.src = src

        imgContainer.append(imgTag)
        main.append(mainContainer, imgTag)
        
}

async function postNewMeme() {
    const inputMemeName = document.getElementById("memeName").value
    const inputMemeUrl = document.getElementById("memeUrl").value
    
    const memeObj = {
        name: inputMemeName,
        url: inputMemeUrl
    }
    
    try {
        const urlFetch = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(memeObj)
        }
        const response = await fetch("http://localhost:3000/api/local", urlFetch)
        console.log(response + "New Meme added")


        let newMeme = document.getElementById("newMeme")
        newMeme.innerText = "New Meme added to the list"
        
    }catch(err) {
        console.log(err)
    }
}