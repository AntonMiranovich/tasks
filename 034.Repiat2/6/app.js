// При наведении на картинку изменять ее

document.querySelector('img').addEventListener('mouseover', function () {
    this.src = './1680546783_rgb-astronaut_preview.jpg'
})

document.querySelector('img').addEventListener('mouseout', function () {
    this.src = "./00698d785ceb3e8926b1b29fc71ef227.jpg"
})