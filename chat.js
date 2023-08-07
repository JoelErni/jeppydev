function chat_send(){
    var input = document.getElementById('user-input').value;

    if(input!=""){
        var text = document.createElement('h1');
        text.innerText = input;

        var text_container = document.createElement('div');
        text_container.appendChild(text);

        var container = document.createElement('div');
        container.appendChild(text_container);
        container.classList = 'messages';

        document.getElementById('chat').appendChild(container);
        document.getElementById('user-input').value = '';
    }
}