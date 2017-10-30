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
      $('.btn').on('click', function(event){
        event.preventDefault()

        let className = this.className.substr(0, this.className.length - 4)
        console.log(className)
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

     whiskeyList.push(`<div id="${data[i].id}" class="col s12 m6">
               <div class="card blue-grey darken-1">
                 <div class="card-content white-text">
                   <span class="card-title">${data[i].name}</span>
                   <p>Distiller: ${data[i].distiller.name}</p>
                 </div>
                 <div class="card-action">
                   <a onCLick="addtoFavorites(${data[i].id})"> Add to Favorites</span>
                    <a onClick="showInfo(${data[i].id})"> More info </li>
                 </div>
               </div>
             </div>
     </div>`)

    }

  $('.showList').empty()
  $('.indexList').show().empty().append(whiskeyList)

}

IndexLists.prototype.distillerList = function(data){

  let distillerList = []
    for(let i=0; i <= data.length-1; i ++){
    distillerList.push(`<li> ${data[i].name} </li>`)
    }
  $('.showList').empty()
  $('.indexList').show().empty().append(distillerList)

}

IndexLists.prototype.regionList = function(data){

  let regionList = []
    for(let i=0; i <= data.length-1; i ++){
    regionList.push(`<li> ${data[i].country} </li>`)
    }
  $
  $('.showList').empty()
  $('.indexList').show().empty().append(regionList)

}



function newWhiskeyForm(){

  $('.showList').empty()

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
