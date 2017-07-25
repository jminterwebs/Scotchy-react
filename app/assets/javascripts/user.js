$(document).on('turbolinks:load', function() {

$.get('/', function(data){
  console.log(data)
  favWhiskey(data)
  favDistiller(data)
})


})


function favWhiskey(data){
  $(".favWhiskey").on('click', function(event){
    event.preventDefault()
    let list = $('.whiskeyList li').length
      if(list < data.whiskeys.length){
        for(i = list; i <= data.whiskeys.length-1; i ++){
          $('.whiskeyList').append('<li>' + data.whiskeys[i].name + ' Liked by ' + data.whiskeys[i].user_likes +' <span onclick="comments(\'addComment\','+ data.whiskeys[i].id +')" class="addComment"> Add Comments</span><span onclick="comments(\'viewComments\','+ data.whiskeys[i].id +')" class="viewComments"> View Comments</span><div class="commentArea" id="'+ data.whiskeys[i].id +'"></div></li>')
        }
    }
  })
}


function favDistiller(data){
  $('.favDistiller').on('click', function(event){
    event.preventDefault()
    let list = $('.distillerList li ').length
    console.log(list)
      if(list < data.distillers.length){
        for(i= list; i <= data.distillers.length-1; i++){
          $('.distillerList').append(`<li>  Disttler: ${data.distillers[i].name} | Region  ${data.distillers[i].region_name} | <a href="#" onclick="otherWhiskeys(${data.distillers[i].id})"> Other Whiskeys </a>  <div class='distillerWhiskeyList_${data.distillers[i].id}'</div>`)
        }
      }
  })
}

function otherWhiskeys(id){
  event.preventDefault()
    $.get(`/distillers/${id}`, function(data){
      let list = $(`.distillerWhiskeyList_${id} li`).length
      if(list < data.whiskeys.length){
        for (i = list; i < data.whiskeys.length; i ++){
        $(`.distillerWhiskeyList_${id}`).append(`<li>${data.whiskeys[i].name}</li>`)
      }

    }

  })

}

function comments(className, id){
  console.log(className)
  if(className == "addComment"){

    $( `#${id}`).empty().append('<form> <textarea></textarea><input type="submit"/></form>')

  } else if (className == "viewComments") {
    $.get(`/whiskeys/${id}/comments`, function(data){
    }).then( function(data){
      let list = $(`#${id} li`).length
      console.log(list)
      for (i =list ; i < data.length; i ++){
        $(`#${id}`).append(`<li> ${data[i].content} - ${data[i].user.name}</li>`)
      }
    })

  }

}
