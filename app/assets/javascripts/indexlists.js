// $(function() {
//   $('li').on('click', function(event){
//     console.log(event)
//   })
//
//
//
// })

$(document).on('turbolinks:load', function() {
  indexMaker()
  newWhiskeyForm()
  addWhiskey()
 })




indexMaker = () => {
      $('nav a').on('click', function(event){
        event.preventDefault()

        let className = this.className
        if( className != "newWhiskey"){
      $.get(`/${className}`, function(data){
        let indexLists = new IndexLists()

          switch (className){

            case "whiskeys":
              indexLists.whiskeyList(data);
              break;
            case "distillers":
              indexLists.distillerList(data);
              break;
            case "regions":
              indexLists.regionList(data)
              break;
          }
      })
    }
      })

}


function IndexLists(data){

}



IndexLists.prototype.whiskeyList = function(data){

  let whiskeyList = []

    for( let i=0; i <= data.length-1; i ++){

     whiskeyList.push(`<li id="${data[i].id}"> ${data[i].name} <span onCLick="addtoFavorites(${data[i].id})"> Add to Favorites </span> <span onClick="showInfo(${data[i].id})"> More info </li>`)
    }


  $('.indexList').empty().append(whiskeyList)

}

IndexLists.prototype.distillerList = function(data){

  let distillerList = []
    for(let i=0; i <= data.length-1; i ++){
    distillerList.push(`<li> ${data[i].name} </li>`)
    }
  $('.indexList').empty().append(distillerList)

}

IndexLists.prototype.regionList = function(data){

  let regionList = []
    for(let i=0; i <= data.length-1; i ++){
    regionList.push(`<li> ${data[i].country} </li>`)
    }
  $('.indexList').empty().append(regionList)

}



function newWhiskeyForm(){



  $('.newWhiskey').on('click', function(event){
    event.preventDefault()
    $('.indexList').empty()
    $('.newWhiskeyForm').show()

  })




}

function addWhiskey(){
  $('.newWhiskeyForm').submit(function(event){
    event.preventDefault()


    var values = $(this).serialize()
    console.log(values)


    var posting = $.post('/whiskeys', values);

    posting.done(function(data){
      console.log(data)
    })
  })

}

//
// <form><input type="hidden" value="${whiskey_id}" name="whiskey_id" id="whiskey_id"/> <input type="hidden" value="${user_id}" name="user_id" id="user_id"/> <textarea id="content" name="content"></textarea><input type="submit"/></form>`
