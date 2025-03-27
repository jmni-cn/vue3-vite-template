function updateRootFontSize() {
    const bodyElement = document.body;
    const baseWidth = bodyElement.getAttribute("base-width");
    const baseHeight = bodyElement.getAttribute("base-height");
    let fontSize;
    if (baseWidth) {
        fontSize = (document.documentElement.clientWidth / baseWidth) * 100;
    } else if (baseHeight) {
        fontSize = (document.documentElement.clientHeight / baseHeight) * 100;
    }else{
        fontSize = 16
    }
    if (fontSize) {
        fontSize = Math.min(fontSize, 71);
        document.documentElement.style.fontSize = `${fontSize}px`;
    }
}
window.addEventListener("load", updateRootFontSize);
window.addEventListener("resize", updateRootFontSize);
updateRootFontSize();
