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

 })




indexMaker = () => {


      $('nav a').on('click', function(event){
        event.preventDefault()

        let className = this.className
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
      })
}


function IndexLists(data){

}

IndexLists.prototype.whiskeyList = function(data){

  let whiskeyList = []

    for( let i=0; i <= data.length-1; i ++){
    whiskeyList.push(`<li> ${data[i].name} Liked by ${data[i].user_likes}</li>`)
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
