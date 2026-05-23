document.addEventListener('DOMContentLoaded', () => {
    const moodTextArea = document.getElementById('mood-input');
    const searchButton = document.getElementById('search-button');

    setupEventListeners(moodTextArea, searchButton); 
});

function setupEventListeners(moodTextArea, searchButton) {
    moodTextArea.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSearch(moodTextArea, searchButton); //  passa searchButton
        }
    });

    searchButton.addEventListener('click', () => handleSearch(moodTextArea, searchButton)); // passa searchButton
}

async function handleSearch(moodTextArea, searchButton) { //  recebe searchButton
    const mood = moodTextArea.value.trim();

    if (!mood) {
        alert('Preencha o campo de humor para realizar a busca!');
        return;
    }

    //  originalText definido antes do try 
    const originalText = searchButton.innerHTML;
    searchButton.disabled = true;
    searchButton.innerHTML = '⏳ Buscando...';

    try { 
        const response = await fetch('https://wvianna97.app.n8n.cloud/webhook-test/botflix', {         
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userPrompt: mood })
        }); // 

        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

        const data = await response.json();

        if (data && Array.isArray(data.results) && data.results.length > 0) {
            const movie = data.results[0];

            let posterUrl = movie.poster_path || '';
            if (posterUrl && !/^https?:\/\//.test(posterUrl)) {
                posterUrl = `https://image.tmdb.org/t/p/w500${posterUrl}`;
            }

            const resultsDiv = document.getElementById('results');
            const moviesGrid = document.getElementById('movies-grid');

            if (resultsDiv && moviesGrid) {
                resultsDiv.style.display = 'block';
                moviesGrid.innerHTML = `
                    <div class="movie-card">
                        <div class="movie-poster">
                            ${posterUrl
                                ? `<img src="${posterUrl}" alt="${movie.title}" loading="lazy">`
                                : '<div class="no-poster">Sem imagem</div>'
                            }
                        </div>
                        <div class="movie-info">
                            <h4 class="movie-title">${movie.title ?? 'Sem título'}</h4>
                            <p class="movie-overview">${movie.overview || 'Sem descrição disponível.'}</p>
                            <p class="movie-rating">⭐ ${typeof movie.vote_average === 'number' ? movie.vote_average.toFixed(1) : 'N/A'} / 10</p>
                        </div>
                    </div>
                `;
            } else {
                alert('Não foi possível exibir o resultado. Elementos não encontrados.');
            }
        } else {
            alert('Nenhum filme encontrado para sua busca.');
        }

    } catch (error) { // ✅ catch conectado ao try
        console.error('Erro ao fazer a requisição:', error);
        alert('Erro ao buscar filmes. Tente novamente.');
    } finally { // ✅ originalText agora existe
        searchButton.disabled = false;
        searchButton.innerHTML = originalText;
    }
}