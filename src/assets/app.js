// const upButton=document.querySelector('.upButton');
// const downButton= document.querySelector('.downButton');


// document.getElementById('buttonCoontainer').addEventListener('click',function(){
//     var leftContainer=document.querySelector('.leftContainer');
    
// // })

// document.addEventListener('DOMContentLoaded', function(){
//     const container=document.querySelectorAll('.container');
//     let currentIndex=0;

//     container[currentIndex].classList.add('active');

//     function showContainer(index){
//         if(index <0){
//             index=container.length-1;
//         }
//         else if(index >=container.length){
//             index=0;
//         }
//         container.forEach(container=>{
//             container.classList.remove('active');
//         });
//         container[index].classList.add('active');
//         currentIndex=index;
//     }



//     const upButton=document.querySelector('.upButton');
//     upButton.addEventListener('click',function(){
//         showContainer(currentIndex -1);
//     });
//     const downButton=document.querySelector('.downButton');
//     downButton.addEventListener('click',function(){
        
//         showContainer(currentIndex +1);
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider');

    const slideRight = document.querySelector('.right');
    const slideLeft = document.querySelector('.left');

    const upButton = document.querySelector('.up');
    const downButton = document.querySelector('.down'); 

    const slidesLength = slideLeft.querySelectorAll('div').length;
 
    let activeSlideIndex = 0;
    slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;


    upButton.addEventListener('click', () => changeSlide('up'));
    downButton.addEventListener('click', () => changeSlide('down'));





    const changeSlide = (direction) => {
        const sliderHeight = sliderContainer.clientHeight;

        if (direction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0;
            }
        } else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1;
            }
        }

    


        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;  
 };
});

