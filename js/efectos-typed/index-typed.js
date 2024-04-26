const typed = new Typed('.typed', {
    strings: [
        '<span class="titulos-inicio">Tecnología<span/>',
        '<span class="titulos-inicio">Cocina<span/>',
        '<span class="titulos-inicio">Bazar<span/>',
        '<span class="titulos-inicio">Ferretería<span/>',
        '<span class="titulos-inicio">Vehiculos<span/>',
        '<span class="titulos-inicio">¡Y mucho más!<span/>'
    ],
    stringsElement: '#cadenas-texto',
    typeSpeed: 30,
    startDelay: 1000,
    backSpeed: 30,
    smartBackspace: true,
    backDelay: 1500,
    shuffle: false,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
})