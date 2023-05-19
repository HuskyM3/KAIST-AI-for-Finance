const responses = [
  "I'm sorry, I don't understand.",
  "I'm not sure I understand.",
  "Can you say that again?",
  "Can you repeat that?",
  "Can you rephrase that?",
  "Could you say that again?",
  "Could you repeat that?",
  "Could you rephrase that?",
  "I didn't get that.",
  "I didn't get that, sorry.",
  "I don't understand.",
  "I don't understand. Could you repeat that?",
]; // ChatGPT's responses

$(document).ready(() =>{

  function sendUserInput() {
    
    const userInput = $('#hw2__input').val();

    const newUserConversation = $('<div>').addClass('user-conversation');
 
    const userIcon = $('<div>').addClass('user-icon');
    const userIconText = $('<div>').addClass('user-icon-text').text('K');
    userIcon.append(userIconText);

    const userText = $('<div>').addClass('user-text').text(userInput);


    newUserConversation.append(userIcon, userText);
    $('#hw2__chat-history').append(newUserConversation);


    $('#hw2__chat-history').scrollTop($('#hw2__chat-history')[0].scrollHeight);

    $('#hw2__input').val('');

  }

  function sendGptInput () {
    const newGptConversation = $('<div>').addClass('gpt-conversation');
 
    const random = Math.floor(Math.random()*responses.length+1)
    const gptInput = responses[random]

    const gptIcon = $('<div>').addClass('gpt-icon');
    const gptIconPic = $('<img>').attr('src', 'images/openai-icon.svg')
    gptIcon.append(gptIconPic);

    const gptText = $('<div>').addClass('gpt-text').text(gptInput);


    newGptConversation.append(gptIcon, gptText);
    $('#hw2__chat-history').append(newGptConversation);

    $('#hw2__chat-history').scrollTop($('#hw2__chat-history')[0].scrollHeight);




  }



  $('.send').click(() => {
    sendUserInput();
    setTimeout(function(){
      sendGptInput()
    }, 3000)
    
  });
  $('#hw2__input').keypress((event) => {
    if (event.which === 13) {
      sendUserInput();
      setTimeout(function(){
        sendGptInput()
      }, 3000)
      event.preventDefault(); 
    }

  });

});
