fetch("/games.json")
    .then((response) => response.json())
    .then((games) => {
        games.sort((a, b) => a.name.localeCompare(b.name));
        games.forEach((game) => {
            const gameDiv = document.createElement("div");
            gameDiv.classList.add("card");
            const imgElement = document.createElement("img");
            imgElement.src = `/books/files/${game.root}/${game.img}`;
            imgElement.alt = game.name;
            imgElement.classList.add("game-image");
            imgElement.loading = "lazy";
            const gameName = document.createElement("p");
            gameName.classList.add("game-name");
            gameName.textContent = game.name;
            gameDiv.addEventListener("click", () => {
                launch(`/books/files/${game.root}/${game.file}`);
            });
            gameDiv.appendChild(imgElement);
            gameDiv.appendChild(gameName);
            document.querySelector('.game-links').appendChild(gameDiv);
        });
    });

function launch(link) {
    location.href = link;
    parent.hideNav();
}