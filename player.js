class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.rank=0;
    }

    getPlayerRank(){
        database.ref('carAtEnd').on("value",function(data){
            this.rank = data.val();
        })
    }
    static updatePlayerRank(rank){
        database.ref('/').update({
            carAtEnd: this.rank
        })
    }

    getPlayerCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    updatePlayerCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
    updatePlayerInfo(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static  getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",function(data){
            allPlayers = data.val();
        })
    }
    static deletePlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.remove();
    }
}