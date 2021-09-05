class Form{
    constructor(){
        
    }
    
    display(){
        var title = createElement("h1") 
        title.html("car racing game")
        title.position(140,30);

        var input = createInput("Name")
        input.position(140,130);

        var button = createButton("Start")
        button.position(140,200);

        button.mousePressed(function (){
            input.hide();
            button.hide();

            var message = createElement("h1")
            message.html("Welcome" + input.value())
            message.position(140,200);
        })
    }

}
