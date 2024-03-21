//const BASE_URL = 'https://randomfox.ca/floof/'; //(esse base-url 1A é junto com o return 1A se desomentar um tem que comentar o outro)

const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //(esse base-url 1B é junto com o return 1B se desomentar um tem que comentar o outro)



const trocaImg = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        //return json.image; // (esse return 1A é junto com o base-url 1A)
        return json.webpurl; // (esse return 1B é junto com o base-url 1B)
    } catch (e) {
        console.log(e.message)
    }
};

// esse comandoé a definição da função
const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await trocaImg();
};

loadImg(); // esse comando vai deixar a imagen exibindo antes de partir para a proxima ação (comando debaixo) que é trocar a imagem apartir do click.

const btn = document.getElementById('trocaImg');
btn.addEventListener('click', loadImg);