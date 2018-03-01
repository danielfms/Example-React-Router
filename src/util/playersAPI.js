const players = [
    {
        name: "Player1",
        number: 1,
        position: "A"
    },
    {
        name: "Player2",
        number: 2,
        position: "ABC"
    },
    {
        name: "Player3",
        number: 14,
        position: "ABCD"
    }
];

export function getPlayer(index){
    if(index >= players.length){
        return null;
    }
    return players[index];
}

export function getAll(){
    return players;
}