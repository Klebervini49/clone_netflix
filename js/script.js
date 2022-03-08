function page1() {
    let page = 1,
        pageString = '.page1',
        title_page = 'Populares',
        API_KEY = '386e8e900b2b3cc4583a5b5d7317d4eb',
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=true&language=pt-BR&page=${page}`;

    document.querySelector('.title_page1 h1').innerText = title_page

    const result = (url) => fetch(url)
        .then((data) => data.json())
        .then((json) => {
            console.log(json)

            if (json['results']) {
                json.results.forEach(i => {
                    let imagem = i.backdrop_path,
                        poster = i.poster_path,
                        titulo = i.title,
                        descricacao = i.overview,
                        dataLancamento = i.release_date,
                        nota = i.vote_average,
                        html = `<div class="swiper-slide">
                                    <img src='https://image.tmdb.org/t/p/w500${imagem}'>
                                    <div class='modalSlide' style='display: none'>
                                        <div class='poster'>
                                            <img src='https://image.tmdb.org/t/p/w500${poster}'>
                                        </div>
                                        <div class='title'>Titulo: ${titulo}</div>
                                        <div class='descri'>Descrição: ${descricacao}</div>
                                        <div class='date'>Data de Lançamento: ${dataLancamento}</div>
                                        <div class='nota'>Média de votos: ${nota}</div>
                                    </div>
                                </div>`
                    document.querySelector(pageString).innerHTML += html
                });
            }
        })
    result(url)
}
page1()

// modal
setTimeout(() => {
    let filmes = document.querySelectorAll('.swiper-slide')
    filmes.forEach(i => {
        i.addEventListener('mouseenter', function (e) {
            let valorTemporario = i.querySelector('div')
            valorTemporario.style.display = 'block'
        })
        i.addEventListener('mouseleave', function (e) {
            let valorTemporario = i.querySelector('div')
            valorTemporario.style.display = 'none'
        })
    })
}, 200)