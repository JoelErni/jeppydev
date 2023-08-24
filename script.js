const delay = ms => new Promise(res => setTimeout(res, ms));

const show_name = async () => {
    var name = 'Joel Pascal Erni';
    var wrongName = 'Joeöl Pascal Wrni';
    var NAMEELEMENT = document.getElementById('intro-name');
    for (var i = 0; i < wrongName.length + 1; i++){
        await delay(50);            
        NAMEELEMENT.innerText = wrongName.slice(0, i);
    }

    await delay(1500)

    for (var i = 0; i < wrongName.length - 3; i++){
                   
        NAMEELEMENT.innerText = wrongName.slice(0, -i);
        await delay(50); 
    }

    for (var i = 3; i < name.length + 1; i++){
        await delay(50);            
        NAMEELEMENT.innerText = name.slice(0, i);
    }

    await delay(500)

    document.getElementById('intro-name-title').classList = 'intro-show'
}

show_name();