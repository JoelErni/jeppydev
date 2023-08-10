userMessages = 0;

function chat_send(){
    var input = document.getElementById('user-input').value.slice(0,200);
    createUerMessage(input)
    if(userMessages==0){
        botReply();
        userMessages++;
    }
}

function botReply(){
    setTimeout(() => {
        createBotMessage('Hallo')
    }, 1000);
}

function createBotMessage(input_text){
    if(input_text!=""){
        var text = document.createElement('h1');
        text.innerText = '...';
        text.id = 'botreply';

        var text_container = document.createElement('div');
        text_container.appendChild(text);

        var container = document.createElement('div');
        container.appendChild(text_container);
        container.classList = 'messages bot';

        document.getElementById('chat').appendChild(container);

        setTimeout(() => {
            var botMessage = 'Tut mir leid ich verstehe noch keine texte. die nächste nachricht wird als mail verschickt'
            document.getElementById('botreply').innerText = botMessage;
        }, 2000);

        setInterval(()=>{
            // .firstanswer, .user, #input, #user-input, #send
            const collection = document.getElementsByClassName("emailhide");
            for (let i = 0; i < collection.length; i++) {
                collection[i].style.animation = "hide 1s ease forwards";
                collection[i].style.padding = "0";
            }

            document.getElementById('input-email').style.animation = 'show 1s ease forwards'
        }, 4000)
    } 
}

function createUerMessage(input_text){
    if(input_text!="" && userMessages < 1){
        var text = document.createElement('h1');
        text.innerText = input_text;

        var text_container = document.createElement('div');
        text_container.appendChild(text);

        var container = document.createElement('div');
        container.appendChild(text_container);
        container.classList = 'messages user emailhide';

        document.getElementById('chat').appendChild(container);
        document.getElementById('user-input').value = ''
    }
}

function sendMail(){
    console.log('mail');
}