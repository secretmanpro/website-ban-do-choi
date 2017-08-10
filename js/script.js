//Ẩn, hiện chat
$(".tieudechat").click(function MinimizeChat(){
		$(".kqchat, .noidungchat").toggle();
});
$(".glyphicon-remove").click(function CloseChat(){
	var r = confirm("Bạn có muốn tắt chat trực tuyến?");
    if (r == true) {
      $(".nd").hide();
    } 
    else {
       $(".nd").show();
    }
});

//Xử lý button back to top
$('#backtotop').hide();
    window.onscroll = function () {
    if (pageYOffset >= 500) {
        $('#backtotop').show();
        $('#backtotop').click(function Backtotop(){
        	  $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
    } else {
    	$('#backtotop').hide();
    }
};

//Dropdown menu
$('nav').easyPie({
  // icon for mobile push menu
  icon: "+", 
  // nav id for ul
  navID: "nav", 
  // <a href="http://www.jqueryscript.net/tags.php?/Navigation/">Navigation</a> class
  navClass: "demo",
  // class for collapsing menu on mobile
  collapseClass: "pieCollapse", 
  // change to false if you wish to not have a scrollTo function on your menu
  slideTop: true 
});



$(function(){
    var tongsl=$("#tongsoluong");
    if(typeof(Storage)!=="undefined")            {
        if (localStorage.slg)
        {              
        localStorage.removeItem('slg');
      
    }
    //Cách 1:
    localStorage.slg=0;
    //Cách 2:
    // localStorage.setItem("slg",0);
    
    tongsl.html(localStorage.slg);
    }
    //Thêm vào giỏ hàng
    $("#btnAddToCart").click(function AddToCart(){
          

     localStorage.slg=Number(localStorage.slg)+1;
        //tong=Number(tong+1);
        //Cách 1:

         tongsl.html(localStorage.slg);
        //Cách 2  tongsl.html(localStorage.getItem("slg"));
    });
});
 
// document.addEventListener("DOMContentLoaded", function(event) {



//   // Get the modal
//   var modal = document.getElementById("myModal");
//   // Get the image and insert it inside the modal - use its "alt" text as a caption
//   var images = document.getElementsByClassName("myImg");
//   var modalImg = document.getElementById("imgModal");
//   var captionText = document.getElementById("captionModal");
//   for (var i = 0; i < images.length; i++) {
//     images[i].onclick = function(){
//       modal.style.display = "block";
//       modalImg.src = this.src;
//       captionText.innerHTML = this.alt;
//     }
//   }

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
// });
$(document).ready(function(){
      var modal = $("#myModal");
//   // Get the image and insert it inside the modal - use its "alt" text as a caption
      var images = $(".myImg");
      var modalImg = $("#imgModal");
      var captionText = $("#captionModal");
   
        images.click(function(){
            modal.css("display","block");
            modalImg.attr("src",$(this).attr("src"));
            captionText.html($(this).attr("alt"));
           
        });
    // Click nút close(x) đóng hình
      var span = $(".close:eq(0)");
      span.click(function(){
        modal.css("display","none");
      });
      //Click ra ngoài đóng hình lại
      $(window).click(function(event){
             if(!event.target.matches(".myImg")){
                 modal.hide();          
            }
      });

// Làm Log in

      var login=$("#login");
      var btnDangNhap=$("#btnDangNhap");
      var tendn=$("#tendn");
      //Log in xong hiện tên user , click vô ko hiện modal nữa
      login.click(function loginClick(e) {
        e.preventDefault();
        if(login.text()=='Đăng nhập'){
            $('#exampleModal1').modal();       
        }
    });
      
    btnDangNhap.click(function LogIn(event){
            if(tendn.val()==''){
                    alert("Bạn chưa nhập tên đăng nhập");        
            }
            else{
            localStorage.setItem("tendn",tendn.val());
            localStorage.getItem("tendn");
            event.preventDefault();

            login.html("<a style='margin-top:-5px;color:white;' href='#'>"+tendn.val()+"</a>");
            $('#exampleModal1').modal('hide');
            }
    });    
});

//Zoom hình chi tiết sản phẩm
$(".xzoom").xzoom({

  // top, left, right, bottom, inside, lens, fullscreen, #ID
  position: 'right', 

  // inside, fullscreen
  mposition: 'inside', 

  // In the HTML structure, this option gives an ability to output xzoom element, to the end of the document body or relative to the parent element of main source image.
  rootOutput: true,

  // x/y offset
  Xoffset: 0,
  Yoffset: 0,

  // Fade in effect, when zoom is opening.
  fadeIn: true,

  // Fade transition effect, when switching images by clicking on thumbnails.
  fadeTrans: true,

  // Fade out effect, when zoom is closing.
  fadeOut: false,

  // Smooth move effect of the big zoomed image in the zoom output window. 
  // The higher value will make movement smoother.
  smoothZoomMove: 3,

  // Smooth move effect of lens.
  smoothLensMove: 1,

  // Smooth move effect of scale.
  smoothScale: 6,

  // From -1 to 1, that means -100% till 100% scale
  defaultScale: 0, 

  // Scale on mouse scroll.
  scroll: true,

  // Tint color. Color must be provided in format like "#color". 
  tint: false,

  // Tint opacity from 0 to 1.
  tintOpacity: 0.5,

  // Lens color. Color must be provided in format like "#color". 
  lens: false,

  // Lens opacity from 0 to 1.
  lensOpacity: 0.5,

  // 'box', 'circle'
  lensShape: 'box', 

  // Custom width of zoom window in pixels.
  zoomWidth: 'auto',

  // Custom height of zoom window in pixels.
  zoomHeight: 'auto',

  // Class name for source "div" container.
  sourceClass: 'xzoom-source',

  // Class name for loading "div" container that appear before zoom opens, when image is still loading.
  loadingClass: 'xzoom-loading',

  // Class name for lens "div".
  lensClass: 'xzoom-lens',

  // Class name for zoom window(div).
  zoomClass: 'xzoom-preview',

  // Class name that will be added to active thumbnail image.
  activeClass: 'xactive',

  // With this option you can make a selection action on thumbnail by hover mouse point on it.
  hover: false,

  // Adaptive functionality.
  adaptive: true,

  // When selected position "inside" and this option is set to true, the lens direction of moving will be reversed.
  lensReverse: false,

  // Same as lensReverse, but only available when adaptive is true.
  adaptiveReverse: false,

  //  Output title/caption of the image, in the zoom output window.
  title: false,

  // Class name for caption "div" container.
  titleClass: 'xzoom-caption',

  // Zoom image output as background
  bg: false 
  
});
