// $(function(){

//     $("#fa-baropen").on("click",function(){
//         $(".top_ul").toggleClass("open_nav");
//     });
//     $("#fa-xmark").on("click",function(){
//         $(".top_ul").toggleClass("open_nav");
//     });

//     $("#fa-chevron").on("click",function(){
//         $(".top_container").toggleClass("open_topcontainer");
//     });
//     // $(".top_ulitem_close").on("click",function(){
//     //    console.log("ttt");
//     //     // $(".top_container").toggleClass("open_topcontainer");
//     // });
// });

$(function () {
  $("#fa-baropen").on("click", function () {
    $(".top_ul").toggleClass("open_nav");
  });
  $("#fa-xmark").on("click", function () {
    $(".top_ul").toggleClass("open_nav");
  });

  $("#fa-chevron").on("click", function () {
    $(".top_container").toggleClass("open_topcontainer");
  });

  // 看不懂 vu0 先註解
  // $(".top_ulitem_close").on("click",function(){
  //    console.log("ttt");
  //     // $(".top_container").toggleClass("open_topcontainer");
  // });
});
