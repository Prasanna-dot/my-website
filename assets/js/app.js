$(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  });//EOF Document.ready

  for (let img = 1; img < 46; img++) {
    let create = `<img src="./assets/photography/photography_1-min.jpg">`
    photos = photos + create
    document.getElementById('gallery').innerHTML = photos
}