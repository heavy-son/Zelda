const linha = document.querySelector('.linha');
const linhaText = document.querySelector('.linha-text');
const scrollContainer = document.querySelector('.inicial');

let maxTranslate = 0;

function updateMaxTranslate() {
    const availableWidth = linha.clientWidth;
    const textWidth = linhaText.getBoundingClientRect().width;
    maxTranslate = -(availableWidth - textWidth);
}

function updateLinhaPosition() {
    const scrollableWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const progress = scrollableWidth > 0
        ? scrollContainer.scrollLeft / scrollableWidth
        : 0;

    linhaText.style.transform = `translateX(${progress * maxTranslate}px)`;
}

updateMaxTranslate();
window.addEventListener('resize', updateMaxTranslate);
scrollContainer.addEventListener('scroll', updateLinhaPosition);
updateLinhaPosition();