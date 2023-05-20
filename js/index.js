// ------------------------skroll*---------------------
        window.addEventListener('scroll',function () {
            const scrollTop = window.scrollY;
            const left=document.querySelectorAll('.left')
            const right=document.querySelectorAll('.right')
            console.log(scrollTop)  ;
            left.forEach(el =>{
                if (scrollTop  > 445 && scrollTop  < 1100) {
                    el.classList.add('animate__zoomInDown')
                    console.log(scrollTop) 
                 }
                 else {
                    el.classList.remove('animate__zoomInDown')
                    console.log(scrollTop) 
                 }
            })
            right.forEach(el =>{
                if (scrollTop  > 445 && scrollTop  < 1100) {
                    el.classList.add('animate__zoomInDown')
                    console.log(scrollTop) 
                 }
                 else {
                    el.classList.remove('animate__zoomInDown')
                 }
            })
        })


// création de la fonction "dayNight"
const aboutHome = document.querySelector(".aboutHome")
const strong = document.querySelectorAll("strong")
const fa=document.querySelectorAll(".fa")
function dayNight() {
    document.body.classList.toggle('bg_black');
    
    // document.body.classList.contains('bg_black') ? (theme.innerHTML = "❂") : (theme.innerHTML = "☾");
    if (document.body.classList.contains('bg_black')) {
        theme.innerHTML = "❂";
        aboutHome.classList.add('aboutHomeNight')
        aboutHome.classList.remove('aboutHomeDay')
        document.body.classList.add('textNight');
        document.body.classList.remove('textDay')
        strong.forEach(el => {
            el.classList.add('strongNight')
            el.classList.remove('strongDay')
        });
        fa.forEach(el => {
            el.classList.add('faNight')
            el.classList.remove('faDay')
        });
    } else {
        theme.innerHTML = "☾"
        aboutHome.classList.add('aboutHomeDay')
        aboutHome.classList.remove('aboutHomeNight')
        document.body.classList.add('textDay');
        document.body.classList.remove('textNight')
        strong.forEach(el => {
            el.classList.add('strongDay')
            el.classList.remove('strongNight')
        });
        fa.forEach(el => {
            el.classList.add('faDay')
            el.classList.remove('faNight')
        });
    }
}
const theme = document.getElementById('theme');

theme.addEventListener('click', dayNight);
// ------------------------home illustration---------------------
window.addEventListener('scroll',function () {
    const scrollTop = window.scrollY;
    const left=document.querySelectorAll('.imgLeft')
    const right=document.querySelectorAll('.imgRight')
    const up=document.querySelectorAll('.imgUp')

    console.log(scrollTop)  ;

    left.forEach(el =>{
        if (scrollTop  >= 0 && scrollTop  < 220) {
            el.classList.add('imgDisplay') 
            el.classList.remove('imgIndsplay')
            el.classList.add('animate__slideInLeft')
            console.log(scrollTop) 
         }
         else {
            el.classList.remove('animate__slideInLeft')
            console.log(scrollTop) 
            el.classList.add('imgIndsplay') 
            el.classList.remove('imgDisplay')
         }
    })
    right.forEach(el =>{
        if (scrollTop  >= 0 && scrollTop  < 220) {
            el.classList.add('imgDisplay') 
            el.classList.remove('imgIndsplay')
            el.classList.add('animate__slideInDown')
            console.log(scrollTop) 
         }
         else {
            el.classList.remove('animate__slideInDown')
            el.classList.add('imgIndsplay') 
            el.classList.remove('imgDisplay')
         }
    })
    up.forEach(el =>{
        if (scrollTop  >= 0 && scrollTop  < 420) {
            el.classList.add('imgDisplay') 
            el.classList.remove('imgIndsplay')
            el.classList.add('animate__slideInUp')
            console.log(scrollTop) 
         }
         else {
            el.classList.remove('animate__slideInUp')
            el.classList.add('imgIndsplay') 
            el.classList.remove('imgDisplay')
         }
    })
})
// -------------------appfooter----------------------
