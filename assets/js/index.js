$(document).ready(function(){
    $("#carousel1").owlCarousel({
    // stagePadding: 50,
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplaySpeed:2000,
    autoplayTimeout: 4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
    });
});
$(document).ready(function(){
    $("#carousel2").owlCarousel({
    // stagePadding: 50,
    loop:true,
    margin:30,
    // nav:true,
    autoplay:true,
    autoplaySpeed:2000,
    autoplayTimeout: 6000,
    autoplayHoverPause:true,
    
    responsive:{
        0:{
            items:1
        },
        320:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    });
});




    

var seachBtn=document.querySelector('.fa-search');
var search=document.querySelector('.search');
searchCloseBtn=document.querySelector('.search__icon-bar');
// console.log(searchCloseBtn);
seachBtn.addEventListener('click',function(){
    search.classList.toggle('search__open');
})
searchCloseBtn.addEventListener('click',function(){
    search.classList.toggle('search__open');
})

// responsive moblie+768px width flatform
var popupBtn=document.querySelector('.header__menu-popup');
popupBtn.addEventListener('mouseover',function(){
    this.classList.add('change');
})
popupBtn.addEventListener('mouseout',function(){
    this.classList.remove('change');
})

// nút close trên mobile popup
var headerPopup=document.querySelector('.header__popup');
// nút mở popup trên mobile
var  headerMenuPopup=document.querySelector('.header__menu-popup');
var mobileCloseBtn=document.querySelector('.menu__top .search__icon-bar');
headerMenuPopup.addEventListener('click',function(){
    headerPopup.classList.add('open__popup');
})
mobileCloseBtn.addEventListener('click',function(){
    headerPopup.classList.remove('open__popup');
})

// nut dropdown mobile menulist
var menuSubBtn=document.querySelectorAll('.item__menu i');
// console.log(menuSubBtn);
// for(i=0;i<menuSubBtn.length;i++)
// {
//     menuSubBtn[i].addEventListener('click',function(){
//         this.classList.toggle('drop_up');
//         var a= this.parentElement;
//         var b=a.getElementsByTagName('ul');
//         for(i=0;i<b.length;i++)
//         {
//             b[i].classList.toggle('max-height350px');
//         }
//     })
// }
// var list__questionBtn2=document.querySelectorAll('.list__question-a');
// console.log(list__questionBtn2);
menuSubBtn.forEach(function(item){
    item.addEventListener('click',function(){
        // let a=this.parentElement;
        
        if(this.nextElementSibling.classList.contains('max-height350px'))
        {
            this.nextElementSibling.classList.remove('max-height350px');
            this.classList.remove('drop_up');
        }
        else{
            $('.menu__sub').removeClass('max-height350px');
            $('.item__menu i').removeClass('drop_up');
            this.nextElementSibling.classList.add('max-height350px');
            this.classList.add('drop_up');
        }
    })
})



// nut dropdown trong answer__bottom-list list__question
var list__questionBtn=document.querySelectorAll('.list__question i');

// for(i=0;i<list__questionBtn.length;i++)
// {
//     list__questionBtn[i].addEventListener('click',function(){
//         this.classList.toggle('drop_up');
//         var a= this.parentElement;
//         a.classList.toggle('open')
//         var b=a.getElementsByTagName('p');
//         for(i=0;i<b.length;i++)
//         {
//             b[i].classList.toggle('max-height350px');
//             if(b[i].style.display=='block')
//             {
//                 b[i].style.display='none';
//             }
//             else{
//                 b[i].style.display='block';
//             }
//         }
//     })
// }

var list__questionBtn2=document.querySelectorAll('.list__question-a');
// console.log(list__questionBtn2);
list__questionBtn2.forEach(function(item){
    item.addEventListener('click',function(){
        // let a=this.parentElement;
        
        if(this.nextElementSibling.classList.contains('active'))
        {
            this.nextElementSibling.classList.remove('active');
            this.querySelector('i').classList.remove('drop_up')
        }
        else{
            $('.list__question-answer').removeClass('active');
            $('.list__question i').removeClass('drop_up');
            this.nextElementSibling.classList.add('active');
            this.querySelector('i').classList.add('drop_up')
        }
    })
})



// play video COMPANY
vidCompanyBtn=document.querySelector('.photo__center-button div');
console.log(vidCompanyBtn);
vidCompanyBtn.addEventListener('click',function(){
    document.querySelector('.video').classList.toggle('video__open');
  
})
closeVideoBtn=document.querySelector('.video .search__icon-bar');
closeVideoBtn.addEventListener('click',function(){
    console.log(closeVideoBtn)
    console.log(document.querySelector('.video'));
    document.querySelector('.video').classList.toggle('video__open');
  
})

