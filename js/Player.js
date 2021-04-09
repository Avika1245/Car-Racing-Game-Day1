class Player
{
    constructor()
    {

    }

    //read player Count from the database
    getCount()
    {
        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value", function (data){
            playerCount = data.val();
        })

    }

    //update the game state in the database
    updateCount (count)
    {
        database.ref('/').update({
            playerCount:count
        })
    }

    //update player name in the database
    update(name)
    {
        var playerIndex= "player"+playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }
}

