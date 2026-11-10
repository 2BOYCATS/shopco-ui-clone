const go2top = document.getElementById('go2top')

window.addEventListener('scroll', () => {
    go2top.classList.toggle('show', window.scrollY > 200)
})

go2top.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:"smooth"})
})