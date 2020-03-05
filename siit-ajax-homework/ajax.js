const gamesUrl = 'https://games-world.herokuapp.com/games';

(async function() {
   const games = await fetch(gamesUrl).then(res => res.json());
    displayGames(games);
    attachEventListeners();
})();


function displayGames(games) {
    const fragment = document.createDocumentFragment();  

    const addButton = document.createElement('button');
    addButton.innerHTML = 'Create Game Entry';
    addButton.classList.add('js-add-button');

    for (const game of games) {
        const gameHtml = generateHTML(game);
         fragment.append(gameHtml);
    }
    document.body.append(fragment);
    document.body.prepend(addButton);
}


function generateHTML(game) {

        const wrapper = document.createElement('article');
        wrapper.setAttribute('id', game._id);
        
        const title = document.createElement('h1');
        title.innerHTML = game.title;

        const image = document.createElement('img');
        image.src = game.imageUrl;

        const description = document.createElement('p');
        description.innerHTML = game.description;

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.classList.add('js-edit-button');
        editButton.setAttribute('data-id', game._id);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('js-delete-button');
        deleteButton.setAttribute('data-id', game._id);
        wrapper.append(title, image, description, editButton, deleteButton);

        return wrapper;
}



function attachEventListeners() {
    document.addEventListener('click', handleClick);
}

function handleClick(e) {
    const gameId = e.target.getAttribute('data-id');

    if(e.target.classList.contains('js-edit-button')) {
        handleEdit(gameId);
    } else if(e.target.classList.contains('js-delete-button')) {
        handleDelete(gameId);
    } else if(e.target.classList.contains('js-add-button')) {
        handleAddGame();

    }
    window.location.reload(); 
}


function handleEdit(id) {
     fetch(`${gamesUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'title=Game of the year'
    })
    .then(res => res.json())
    .then(console.log);
}

function handleDelete(id) {
    fetch(`${gamesUrl}/${id}`, {
        method: 'DELETE'    
    })
    .then(console.log('Game has been deleted!'));
};




function handleAddGame() {
    fetch('https://games-world.herokuapp.com/games/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'title=Call of Duty®: WWII Returned&releaseDate=1333929600&genre=First Person Shooter&publisher=Activision&imageUrl=https://psmedia.playstation.com/is/image/psmedia/call-of-duty-wwii-two-column-01-ps4-eu-19apr17?$TwoColumn_Image$'
})

};