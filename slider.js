
var imgsList=Array.from(document.getElementsByClassName('img-item'));
 var mainImg=document.querySelector('.lightBox');
 var lightBox=document.querySelector('.lightBox-item');
 var next=document.getElementById('next');
 var prev=document.getElementById('prev');
 var close =document.getElementById('close');
 var currentIndex;
 
for(var i=0;i<imgsList.length;i++){
    imgsList[i].addEventListener('click',function(e){
        // mainImg.classList.remove('d-none')
        //var imgs=e.target.src
          currentIndex= imgsList.indexOf(e.target);
        var imgs=e.target.getAttribute('src');
        lightBox.style.backgroundImage=`url(${imgs})`;
         mainImg.classList.replace('d-none','d-flex');
         
     
 })
}



function nextSlide(){
    if (currentIndex === imgsList.length - 1) {
        currentIndex = 0;
       var img= imgsList[currentIndex].src;
        lightBox.style.backgroundImage=`url(${img})`;
        } else {
            currentIndex++;
          var img=  imgsList[currentIndex].src;
            lightBox.style.backgroundImage=`url(${img})`;
            }
}

next.addEventListener('click',nextSlide)

function previousSlide(){
    if (currentIndex===0) {
        currentIndex = imgsList.length - 1;
        var img= imgsList[currentIndex].src;
        lightBox.style.backgroundImage=`url(${img})`
        }else{
            currentIndex-- ;
            var img= imgsList[currentIndex].src;
            lightBox.style.backgroundImage=`url(${img})`
            }
}

prev.addEventListener('click',previousSlide)


function closeSlide(){
   // mainImg.classList.add('d-none');
   mainImg.classList.replace('d-flex','d-none');
}

close.addEventListener('click',closeSlide);


document.addEventListener('keydown',function(e){
   // console.log(e.key);
    
    
    if(e.key=='ArrowRight'){
        nextSlide();
    }
    else if(e.key=='ArrowLeft'){
        previousSlide();
    }
    else if(e.key=='Escape'){
        closeSlide();
    }
    
})