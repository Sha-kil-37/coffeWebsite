// let manu=document.getElementsByClassName(".hind_manu_button")
// let navbar=document.getElementsByClassName(".manu")

// manu.onclick =( ) =>{
//     manu.classList.toggle('fa-times');
// }

document.querySelectorAll(".imagesf img").forEach(images => {
    images.onclick = () =>{
        var src = images.getAttribute("src");
        document.querySelector(".main").src = src;
    }
});





$('.they_are_slid').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay:true
  
  });