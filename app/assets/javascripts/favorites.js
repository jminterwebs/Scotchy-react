$(document).on('turbolinks:load', function() {


function addtoFavorites(id){
  console.log(id)


  var posting = $.post(`/whiskeys/${id}/add` , id)

  posting.done(function(data){
    console.log(data)
  })

}})
