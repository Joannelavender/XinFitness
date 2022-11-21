// $(function(){

//     $("#fa-baropen").on("click",function(){
//         $(".top_ul").toggleClass("open_nav");
//     });
//     $("#fa-xmark").on("click",function(){
//         $(".top_ul").toggleClass("open_nav");
//     });

//     $("#fa-chevron").on("click",function(){
//         $(".top_container").addClass("open_topcontainer");
//     });
// .second_div h3// });
// });

// $(function () {

// 看不懂 vu0 先註解
// $(".top_ulitem_close").on("click",function(){
//    console.log("ttt");
//     // $(".top_container").toggleClass("open_topcontainer");
// });
// });

// 寫法一
$(document).ready(function () {
  // DOM 載入完成之後
  $("#fa-baropen").on("click", function () {
    $(".top_ul").toggleClass("open_nav");
  });
  $("#fa-xmark").on("click", function () {
    $(".top_ul").toggleClass("open_nav");
  });

  $("#fa-chevron").on("click", function () {
    $(".top_container").toggleClass("open_topcontainer");
  });
});
