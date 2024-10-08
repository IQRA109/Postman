function editAnime(animeId) {
    let animeElement = document.getElementById(animeId);
    animeElement.disabled = false;
}


function saveAnime() {
    const anime1 = document.getElementById('anime1').value;
    const anime2 = document.getElementById('anime2').value;

    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ anime1, anime2 }),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}
