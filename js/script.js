function page1() {
    let page = 1,
        cod = '386e8e900b2b3cc4583a5b5d7317d4eb',
        url = `http://api.themoviedb.org/3/discover/movie?api_key=${cod}&sort_by=popularity.desc&include_adult=false&language=pt-BR&page=${page}`
    const result = url => fetch(url)
        .then(data => data.json())
        .then(json => {
            if (json['results']) {
                console.log(json)
                json.results.forEach(i => {
                    let imagem = i.backdrop_path,
                        poster = i.poster_path,
                        titulo = i.title,
                        nota = i.vote_average,
                        dataLancamento = i.release_date,
                        descricacao = i.overview,
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
                    document.querySelector('.page1').innerHTML += html
                });
            }
        })
    result(url)
}
page1()

function page2() {
    let page = 2,
        cod = '386e8e900b2b3cc4583a5b5d7317d4eb',
        url = `http://api.themoviedb.org/3/discover/movie?api_key=${cod}&sort_by=popularity.desc&include_adult=false&language=pt-BR&page=${page}`
    const result = (url) => fetch(url)
        .then((data) => data.json())
        .then((json) => {
            if (json['results']) {
                console.log(json)
                json.results.forEach(i => {
                    let imagem = i.backdrop_path,
                        poster = i.poster_path,
                        titulo = i.title,
                        nota = i.vote_average,
                        dataLancamento = i.release_date,
                        descricacao = i.overview,
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
                    document.querySelector('.page2').innerHTML += html
                });
            }
        })
    result(url)
}
page2()








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
}, 100)