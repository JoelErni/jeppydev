const delay = ms => new Promise(res => setTimeout(res, ms));

const show_name = async () => {
    var name = 'Joel Pascal Erni';
    var wrongName = 'Joeöl Pascal Wrni';
    var NAMEELEMENT = document.getElementById('intro-name');
    for (var i = 0; i < wrongName.length + 1; i++){
        await delay(25 + 50 * Math.random());            
        NAMEELEMENT.innerText = wrongName.slice(0, i);
    }

    await delay(1500)

    for (var i = 0; i < wrongName.length - 2; i++){
                   
        NAMEELEMENT.innerText = wrongName.slice(0, -i - 1);
        await delay(25 + 50 * Math.random()); 
    }

    for (var i = 3; i < name.length + 1; i++){
        await delay(25 + 50 * Math.random());            
        NAMEELEMENT.innerText = name.slice(0, i);
    }

    await delay(500)

    document.getElementById('intro-name-title').classList = 'show'
}


function reveal() {
var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("show");
        } else if(elementTop > windowHeight) {
        reveals[i].classList.remove("show");
        }
    }
}

function showPage(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('loader').style.display = 'none';
}

window.addEventListener("load", function () {
    showPage();
});

window.addEventListener("scroll", reveal);

show_name();