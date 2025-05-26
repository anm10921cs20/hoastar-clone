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