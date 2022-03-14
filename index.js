let header = document.querySelector('#page-header')
header.style.textAlign = 'left'

let dogImages = document.querySelectorAll('.dog-image')
for(let i=0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i=0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = 'rgb(230, 187, 30)'

let dogDescription = document.querySelectorAll('.dog-description')
for(let i=0; i < dogDescription.length; i++){
    dogDescription[i].style.color = 'rgb(222, 38, 136)'
}
// Select some elements...