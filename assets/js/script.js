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
    // pour éviter de submit le formulaire, nous faisons un preventDefault
    e.preventDefault()

    // nous effectuons une condition pour ne pas permettre d'enregistrer du vide
    if (document.querySelector('input[name="myNote"]').value != '') {
        // on crée un élément div avec ses classes 
        const newDiv = document.createElement('div')
        newDiv.classList.add('d-table-cell', 'align-middle', 'mb-1', 'border')

        // je récupère la couleur du checkBox
        const myColor = (document.querySelector('input[name="myColor"]:checked')).value

        // utilisation de innerHTML pour ne pas alourdir la syntaxe en raison des multiples attributs : classe, data, type, etc ... 
        newDiv.innerHTML = `
            <input data-old-value="${document.querySelector('input[name="myNote"]').value}" data-color="${myColor}" type="text" class="col-lg-4 fw-bold btn btn-${myColor} shadow p-2"
            value="${document.querySelector('input[name="myNote"]').value}" disabled>
            <i data-action="edit" class="bi bi-pencil-fill btn btn-outline-secondary"></i>
            <i data-action="remove" class="bi bi-trash-fill btn btn-outline-danger"></i>
            <i data-action="valid" class="bi bi-check-lg btn btn-outline-success" style="display:none"></i>
            <i data-action="cancel" class="bi bi bi-x-lg btn btn-outline-secondary" style="display:none"></i>
        `

        // utilisation de appendChild pour ajouter l'élément dans la div 
        document.querySelector('#allNotes').appendChild(newDiv)

        // on efface l'input
        document.querySelector('input[name="myNote"]').value = ''
    }
})


