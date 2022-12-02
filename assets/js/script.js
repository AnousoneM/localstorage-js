window.addEventListener('click', event => {

    let parent = event.target.parentNode

    // Nous effectuons des actions selon la nature des boutons

    if (event.target.dataset.action == 'edit') {

        parent.children[0].disabled = false
        parent.children[0].select()

        parent.children[1].style.display = 'none'
        parent.children[2].style.display = 'none'

        parent.children[3].style.display = 'inline'
        parent.children[4].style.display = 'inline'
    }

    if (event.target.dataset.action == 'cancel') {

        parent.children[0].value = parent.children[0].dataset.oldValue
        parent.children[0].disabled = true

        parent.children[1].style.display = 'inline'
        parent.children[2].style.display = 'inline'

        parent.children[3].style.display = 'none'
        parent.children[4].style.display = 'none'
    }

    if (event.target.dataset.action == 'valid') {

        parent.children[0].dataset.oldValue = parent.children[0].value
        parent.children[0].disabled = true

        parent.children[1].style.display = 'inline'
        parent.children[2].style.display = 'inline'

        parent.children[3].style.display = 'none'
        parent.children[4].style.display = 'none'
    }

    if (event.target.dataset.action == 'remove') {
        parent.remove()
    }

})

document.querySelector('#add-button').addEventListener('click', (e) => {
    // pour éviter de submit le formulaire
    e.preventDefault()

    
})
