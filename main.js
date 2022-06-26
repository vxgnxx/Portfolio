/* ----- Habilidades -> Código feito por Math-Vieira(Github) ----- */
const habilidade = document.querySelectorAll('.habilidades__button');
const descricao = document.querySelector('.descricao__conteudo');
const sobreHabilidade = [
                    '<h3>HTML</h3> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<h3>CSS</h3> <p>É um mecanismo para estilizar um documento web.</p> <br>',
                    '<h3>JavaScript</h3> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<h3>Git</h3> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<h3>Github</h3> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>',
                    '<h3>Visual Studio Code</h3> <p>O  VS Code é um editor de código desenvolvido pela Microsoft para Windows, Linux e macOS.</p> <br>'
]

habilidade.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `${sobreHabilidade[index1]}` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Passe o mouse em cima de uma habilidade para saber mais';
    } )
} );

/* ----- Slider ----- */

let count = 1;
document.querySelector('#radio1').checked = true;

setInterval( function() {
    nextImage()
}, 5000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 0
    }
    document.querySelector('#radio'+count).checked = true;
}