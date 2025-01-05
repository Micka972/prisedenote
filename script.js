document.addEventListener('DOMContentLoaded', function () {
    // Créer un conteneur global pour les notes
    const notesContainer = document.createElement('div');
    notesContainer.classList.add('notes-container');
    document.body.appendChild(notesContainer);

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const titre = document.getElementById('titre').value;
    const note = document.getElementById('note').value;
    // modification du colorSelect
    const colorSelect = document.getElementById('colorSelect');
    colorSelect.addEventListener('change', function () {
    colorSelect.style.backgroundColor = colorSelect.value;
    }); 
    const couleur = document.getElementById('colorSelect').value;

    if (titre && note) {
        // le conteneur
        const noteContainer = document.createElement('div');
        noteContainer.classList.add('note-container');

        //le contenu de la note
        const noteElement = document.createElement('div');
        noteElement.style.backgroundColor = couleur;
        const titreElement = document.createElement('h3');
        titreElement.textContent = titre;
        const noteContent = document.createElement('p');
        noteContent.textContent = note;
        const deleteButton = document.createElement('button');
        const headerElement = document.createElement('div');
        // conteneur pour titre et X
        headerElement.classList.add('note-header');
        headerElement.appendChild(titreElement);
        headerElement.appendChild(deleteButton);

        // supprimer la note
        deleteButton.textContent = "X";
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
        noteContainer.remove();
});
        // ajoute les éléments au conteneur
        noteElement.appendChild(headerElement); 
        noteElement.appendChild(noteContent);
        noteContainer.appendChild(noteElement);

        // ajoute la note à la page
        notesContainer.appendChild(noteContainer);

        document.getElementById('titre').value = "";
        document.getElementById('note').value = "";

    } else {
        alert("Veuillez remplir le champs titre et la note.")
    }
});
});