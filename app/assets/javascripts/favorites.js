// $(document).on('turbolinks:load', function() {
//   addtoFavorites()
// })
//



/// onClick Functions no need for document ready


function addtoFavorites(id){
  console.log(id)


  var posting = $.post(`/whiskeys/${id}/add` , id)

  posting.done(function(data){
    console.log(data)
  })
}
