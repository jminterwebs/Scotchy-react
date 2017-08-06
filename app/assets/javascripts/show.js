// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
//
function showInfo(id) {
  nextShowing(id)


}

  function nextShowing(id){
    $.get(`/whiskeys/${id}`, function(data){

    let whiskeyShow = `<div> <span onClick="showprev(${id})">Show Prev </span> <span onClick="nextInfo(${id})">Show Next </span>
      <h1>${data.name}</h1>  <h2>Distiller: ${data.distiller.name} </h2>  <h3>Region: ${data.distiller.region_name}</h3> <li onclick="addtoFavorites(${data.id})"> Add to favorites </li></div>`

    $('.indexList').hide()
    $('.showList').empty().append(whiskeyShow)

    console.log(whiskeyShow)
  })
}

  function nextInfo(id) {

    let ids =[]
    for(let i = 0; i < $('.indexList li').length; i++ ) {
      ids.push(parseInt($('.indexList li')[i].getAttribute("id")))
    }

    var next = ids.indexOf(id) + 1

    console.log(id + " id")
    console.log(ids)
    console.log(next + " current Index")


    nextShowing(ids[next])
  }
