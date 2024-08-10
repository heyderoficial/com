const buttons = document.querySelectorAll('.bLugar');
const displayedImage = document.querySelector('.imgLugares');
const displayedText = document.querySelector('.descripcion');

const texts = [
    'Conectate al mundo entero desde la comodidad de tu hogar',
    'Lleva a tu empresa a un nuevo nivel con la mejor conexión',
    'Conectate con el campo y la navegación de mayor velocidad',
    'Manten conectados a todos dentro de tu institución'
];

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        buttons.forEach(button => {
            button.classList.remove('rojo');
            button.classList.add('azul');
        });
        btn.classList.remove('azul');
        btn.classList.add('rojo');

        const imageSource = `MULTIMEDIA/bodyInternet/${['uno', 'dos', 'tres', 'cuatro'][index]}.png`;
        displayedImage.src = imageSource;

        displayedText.textContent = texts[index];
    });
});

const cajaTaurus = document.querySelector('.cajaTaurus');
const cajaGolden = document.querySelector('.cajaGolden');
const cajaFull = document.querySelector('.cajaFull');
const whatsappLink = document.getElementById('WhatsAppLink');

cajaTaurus.addEventListener('click', function () {
    whatsappLink.textContent = 'Pedir plan Taurus';
    whatsappLink.href = `https://wa.me/+593996933831?text=Hola,%20quiero%20solicitar%20el%20plan%20Taurus%20de%20400%20megas%20de%20Internet`;
});

cajaGolden.addEventListener('click', function () {
    whatsappLink.textContent = 'Pedir plan Golden';
    whatsappLink.href = `https://wa.me/+593996933831?text=Hola,%20quiero%20solicitar%20el%20plan%20Golden%20de%20500%20megas%20de%20Internet`;
});

cajaFull.addEventListener('click', function () {
    whatsappLink.textContent = 'Pedir plan Full';
    whatsappLink.href = `https://wa.me/+593996933831?text=Hola,%20quiero%20solicitar%20el%20plan%20Full%20de%20600%20megas%20de%20Internet`;
});

const colors = {
    box1: '#C1272D',
    box2: '#FBB03B',
    box3: '#29ABE2'
};

const boxes = [cajaTaurus, cajaGolden, cajaFull];

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        boxes.forEach(box => {
            box.classList.remove('cajaSeleccionada');
            box.style.borderColor = '#0F0E3D';
            box.style.removeProperty('border-color');
        });

        box.classList.add('cajaSeleccionada');

        const color = colors[box.id];
        box.style.borderColor = color;
    });
});