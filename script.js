document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des éléments de la page
    const app = document.getElementById('app');
    const selectAction = document.getElementById('actionSelect');
    const formAddContact = document.getElementById('addContactForm');
    const contentDisplay = document.getElementById('contentDisplay');

    // Liste de contacts initiale
    let contacts = [
        { nom: 'Jean Aymare', prenom: 'Jean', tel: '06 85 45 69 95' },
        { nom: 'Léa Ricault', prenom: 'Léa', tel: '06 28 32 78 65' },
        { nom: 'Mélanie Zetteaufré', prenom: 'Mélanie', tel: '07 35 78 46 22' }
    ];

    // Appliquer le style global
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#f4f4f4';
    document.body.style.margin = '0';
    document.body.style.padding = '20px';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';

    // Style de la section principale de l'application
    app.style.maxWidth = '400px';
    app.style.border =  '5px solid #000000';
    app.style.width = '100%';
    app.style.padding = '50px';
    app.style.borderRadius = '10px';
    app.style.backgroundColor = 'white';
    app.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    app.style.textAlign = 'center';

    // Création d'un titre
    const title = document.createElement('h1');
    title.innerText = 'Gestionnaire de contacts';
    title.style.color = '#d32f2f'; 
    app.insertBefore(title, selectAction);

    // Création d'un avatar
    const avatar = document.createElement('img');
    avatar.src = 'https://www.freeiconspng.com/uploads/contact-icon-png-1.png';
    avatar.alt = 'Avatar';
    avatar.style.width = '100px';
    avatar.style.margin = '20px auto';
    avatar.style.display = 'block';
    app.insertBefore(avatar, selectAction);

    // Style de la sélection des actions
    selectAction.style.width = '100%';
    selectAction.style.padding = '10px';
    selectAction.style.margin = '10px 0';
    selectAction.style.border = '1px solid #ddd';
    selectAction.style.borderRadius = '5px';
    selectAction.style.backgroundColor = '#d32f2f'; 
    selectAction.style.color = '#fff';

    // Formulaire d'ajout de contact
    formAddContact.style.display = 'none';
    formAddContact.style.backgroundColor = '#dedcdc'; 
    formAddContact.style.padding = '30px';
    formAddContact.style.borderRadius = '5px';

    // Style des champs de formulaire
    const inputs = formAddContact.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.width = '95%';
        input.style.padding = '7px';
        input.style.margin = '10px 0';
        input.style.border = '1px solid #d32f2f';
        input.style.borderRadius = '5px';
        input.style.fontSize = '16px';
        input.style.backgroundColor = '#fff'; 
    });

    // Style du bouton de soumission
    const submitButton = formAddContact.querySelector('button');
    submitButton.style.width = '78%';
    submitButton.style.padding = '10px';
    submitButton.style.margin = '10px 0';
    submitButton.style.border = 'none';
    submitButton.style.backgroundColor = '#d32f2f'; 
    submitButton.style.color = '#fff';
    submitButton.style.borderRadius = '5px';
    submitButton.style.fontSize = '16px';
    submitButton.style.cursor = 'pointer';

    // Fonction pour afficher la liste des contacts
    function renderContacts() {
        contentDisplay.innerHTML = ''; 
        const listContainer = document.createElement('div');
        listContainer.style.backgroundColor = '#f0f0f0';
        listContainer.style.padding = '20px';
        listContainer.style.borderRadius = '5px';

        const listTitle = document.createElement('h3');
        listTitle.innerText = 'Liste de vos contacts';
        listTitle.style.color = '#d32f2f';
        listContainer.appendChild(listTitle);

        const contactList = document.createElement('ul');
        contactList.style.listStyleType = 'none';
        contactList.style.padding = '0';

        contacts.forEach(contact => {
            const contactItem = document.createElement('li');
            contactItem.innerHTML = `<strong style="color: #d32f2f;">${contact.nom}</strong><br>${contact.tel}`;
            contactItem.style.marginBottom = '10px';
            contactList.appendChild(contactItem);
        });

        listContainer.appendChild(contactList);
        contentDisplay.appendChild(listContainer);
    }

    // Fonction pour afficher le formulaire d'ajout
    function renderAddContactForm() {
        contentDisplay.innerHTML = ''; 
        formAddContact.style.display = 'block';
        formAddContact.addEventListener('submit', (e) => {
            e.preventDefault();
            const nouveauContact = {
                nom: document.getElementById('inputNom').value,
                prenom: document.getElementById('inputPrenom').value,
                tel: document.getElementById('inputTel').value
            };
            contacts.push(nouveauContact);
            formAddContact.reset();
            createListContacts();
        });
    }

    // Fonction pour afficher le nombre de contacts
    function renderContactCount() {
        contentDisplay.innerHTML = '';
        const countContainer = document.createElement('div');
        countContainer.style.backgroundColor = '#f0f0f0';
        countContainer.style.padding = '20px';
        countContainer.style.borderRadius = '5px';

        const countTitle = document.createElement('h3');
        countTitle.innerHTML = `Vous avez <strong style="color: #d32f2f;">${contacts.length}</strong> contacts`;
        countContainer.appendChild(countTitle);
        contentDisplay.appendChild(countContainer);
    }

    // Gérer les actions en fonction de la sélection
    selectAction.addEventListener('change', (e) => {
        const action = e.target.value;
        formAddContact.style.display = 'none';
        if (action === 'list') {
            renderContacts();
        } else if (action === 'add') {
            renderAddContactForm();
        } else if (action === 'count') {
            renderContactCount();
        } else {
            contentDisplay.innerHTML = ''; 
        }
    });
});
