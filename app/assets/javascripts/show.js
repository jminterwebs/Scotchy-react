// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
//
function showInfo(id) {
  nextShowing(id)


}

  function nextShowing(id){
    $.get(`/whiskeys/${id}`, function(data){

    let whiskeyShow = `<div> <span onClick="prevInfo(${id})">Show Prev </span> <span onClick="nextInfo(${id})">Show Next </span>
      <h1>${data.name}</h1>  <h2>Distiller: ${data.distiller.name} </h2>  <h3>Region: ${data.distiller.region_name}</h3> <li onclick="addtoFavorites(${data.id})"> Add to favorites </li></div>`

    $('.indexList').hide()
    $('.showList').empty().append(whiskeyShow)


  })
}

  function nextInfo(id) {

    let ids =[]
    for(let i = 0; i < $('.indexList li').length; i++ ) {
      ids.push(parseInt($('.indexList li')[i].getAttribute("id")))
    }

    var next = ids.indexOf(id) + 1

    if (!ids[next]){
      next = 0

    }

    nextShowing(ids[next])
  }


  function prevInfo(id) {

    let ids =[]
    for(let i = 0; i < $('.indexList li').length; i++ ) {
      ids.push(parseInt($('.indexList li')[i].getAttribute("id")))
    }

    var next = ids.indexOf(id) - 1

    if (!ids[next]){
      next = ids.length -1

    }

    nextShowing(ids[next])
  }
