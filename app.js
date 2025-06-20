const gallery1 = document.querySelector('.box1');
const btnlft1 =  document.querySelector('.button-arrow1');
const btnrght1 =  document.querySelector('.button-arrow2');

gallery1.addEventListener('wheel',(evt)=>
{
    evt.preventDefault();
     gallery1.scrollLeft+=evt.deltaY;
});

btnlft1.addEventListener('click',() =>
{
    gallery1.scrollLeft -= 190;
}
);
btnrght1.addEventListener('click',()=>
{
    gallery1.scrollLeft += 190;
});
//recent added

const gallery11 = document.querySelector('.box11');
const btnlft11 =  document.querySelector('.button-arrow11');
const btnrght11 =  document.querySelector('.button-arrow21');

gallery11.addEventListener('wheel',(evt)=>
{
    evt.preventDefault();
     gallery11.scrollLeft+=evt.deltaY;
});

btnlft11.addEventListener('click',() =>
{
    gallery11.scrollLeft -= 190;
}
);
btnrght11.addEventListener('click',()=>
{
    gallery11.scrollLeft += 190;
});

//web series

const gallery1w = document.querySelector('.box1w');
const btnlft1w =  document.querySelector('.button-arrow1w');
const btnrght1w =  document.querySelector('.button-arrow2w');

gallery1w.addEventListener('wheel',(evt)=>
{
    evt.preventDefault();
     gallery1w.scrollLeft+=evt.deltaY;
});

btnlft1w.addEventListener('click',() =>
{
    gallery1w.scrollLeft -= 190;
}
);
btnrght1w.addEventListener('click',()=>
{
    gallery1w.scrollLeft += 190;
});


//box container 2

const gallery2 = document.querySelector('.box2');
const btnlft2 =  document.querySelector('.button-arrow3');
const btnrght2 =  document.querySelector('.button-arrow4');

gallery2.addEventListener('wheel',(evt1)=>
{
    evt1.preventDefault();
    gallery2.scrollLeft+=evt1.deltaY;
})
btnlft2.addEventListener('click',()=>
{
    gallery2.scrollLeft -= 190;
})
btnrght2.addEventListener('click',()=>
{
    gallery2.scrollLeft += 190;
})

//box container 3

const gallery3 = document.querySelector('.box3');
const btnlft3 =  document.querySelector('.button-arrow5');
const btnrght3 =  document.querySelector('.button-arrow6');

gallery3.addEventListener('wheel',(evt1)=>
{
    evt1.preventDefault();
    gallery3.scrollLeft+=evt1.deltaY;
})
btnlft3.addEventListener('click',()=>
{
    gallery3.scrollLeft -= 190;
})
btnrght3.addEventListener('click',()=>
{
    gallery3.scrollLeft += 190;
})

//box container 4

const gallery4 = document.querySelector('.box4');
const btnlft4 =  document.querySelector('.button-arrow7');
const btnrght4 =  document.querySelector('.button-arrow8');

gallery4.addEventListener('wheel',(evt1)=>
{
    evt1.preventDefault();
    gallery4.scrollLeft+=evt1.deltaY;
})
btnlft4.addEventListener('click',()=>
{
    gallery4.scrollLeft -= 190;
})
btnrght4.addEventListener('click',()=>
{
    gallery4.scrollLeft += 190;
})


//mobile scroll

let startX1 = 0;
let scrollLeft1 = 0;
let isDown1 = false;

gallery1.addEventListener('touchstart', (e) => {
    isDown1 = true;
    startX1 = e.touches[0].pageX - gallery1.offsetLeft;
    scrollLeft1 = gallery1.scrollLeft;
});

gallery1.addEventListener('touchmove', (e) => {
    if (!isDown1) return;
    e.preventDefault();
    const x = e.touches[0].pageX - gallery1.offsetLeft;
    const walk = (startX1 - x);
    gallery1.scrollLeft = scrollLeft1 + walk;
});

gallery1.addEventListener('touchend', () => {
    isDown1 = false;
});

//recent added

gallery11.addEventListener('touchstart', (e) => {
    isDown1 = true;
    startX1 = e.touches[0].pageX - gallery11.offsetLeft;
    scrollLeft1 = gallery11.scrollLeft;
});

gallery11.addEventListener('touchmove', (e) => {
    if (!isDown1) return;
    e.preventDefault();
    const x = e.touches[0].pageX - gallery11.offsetLeft;
    const walk = (startX1 - x);
    gallery11.scrollLeft = scrollLeft1 + walk;
});

gallery11.addEventListener('touchend', () => {
    isDown1 = false;
});


//webseries

gallery1w.addEventListener('touchstart', (e) => {
    isDown1 = true;
    startX1 = e.touches[0].pageX - gallery1w.offsetLeft;
    scrollLeft1 = gallery1w.scrollLeft;
});

gallery1w.addEventListener('touchmove', (e) => {
    if (!isDown1) return;
    e.preventDefault();
    const x = e.touches[0].pageX - gallery1w.offsetLeft;
    const walk = (startX1 - x);
    gallery1w.scrollLeft = scrollLeft1 + walk;
});

gallery1w.addEventListener('touchend', () => {
    isDown1 = false;
});

//box2

gallery2.addEventListener('touchstart', (e) => {
    isDown1 = true;
    startX1 = e.touches[0].pageX - gallery2.offsetLeft;
    scrollLeft1 = gallery2.scrollLeft;
});

gallery2.addEventListener('touchmove', (e) => {
    if (!isDown1) return;
    e.preventDefault();
    const x = e.touches[0].pageX - gallery2.offsetLeft;
    const walk = (startX1 - x);
    gallery2.scrollLeft = scrollLeft1 + walk;
});

gallery2.addEventListener('touchend', () => {
    isDown1 = false;
});

//box3

gallery3.addEventListener('touchstart', (e) => {
    isDown1 = true;
    startX1 = e.touches[0].pageX - gallery3.offsetLeft;
    scrollLeft1 = gallery3.scrollLeft;
});

gallery3.addEventListener('touchmove', (e) => {
    if (!isDown1) return;
    e.preventDefault();
    const x = e.touches[0].pageX - gallery3.offsetLeft;
    const walk = (startX1 - x);
    gallery3.scrollLeft = scrollLeft1 + walk;
});

gallery3.addEventListener('touchend', () => {
    isDown1 = false;
});

//box4

gallery4.addEventListener('touchstart', (e) => {
    isDown1 = true;
    startX1 = e.touches[0].pageX - gallery4.offsetLeft;
    scrollLeft1 = gallery4.scrollLeft;
});

gallery4.addEventListener('touchmove', (e) => {
    if (!isDown1) return;
    e.preventDefault();
    const x = e.touches[0].pageX - gallery4.offsetLeft;
    const walk = (startX1 - x);
    gallery4.scrollLeft = scrollLeft1 + walk;
});

gallery4.addEventListener('touchend', () => {
    isDown1 = false;
});