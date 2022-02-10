let header = document.querySelector('#page-header')
header.style.textAlign = "left"



let dogImages = document.querySelectorAll('.dog-image')

for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let left = document.querySelectorAll('h1')
for(let i = 0; i < left.length; i++){
    left[i].style.textAlign = "left"
}

let descrip = document.querySelectorAll('.dog-description')
for (let i = 0; i < descrip.length; i++){
    descrip[i].style.color = 'blue'
}

let dogpic = document.querySelectorAll('.dog-image')
for (let i = 0; i < dogpic.length; i++){
    dogpic[i].style.transform = 'rotate(180deg)'
}
