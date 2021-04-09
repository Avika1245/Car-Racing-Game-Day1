class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement ('h2');
        title.html("Car Racing Game");
        title.position(430,0);

        var input= createInput ('Name');
        var button = createButton('Play');
        var greeting = createElement('h3');

        input.position(430,160);
        button.position(550,200);

        button.mousePressed(function()
        {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+ name);
            greeting.position(530,160);
        })
    }
}