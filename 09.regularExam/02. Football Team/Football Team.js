class footballTeam {
    constructor(clubName,country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers){
        footballPlayers.forEach((e)=>{
            let [name,age,playerValue] = e.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            if (name !== ''){
                this.invitedPlayers.push(footballPlayers)
            }
            return `You successfully invite ${name}. `.split(', ')
            }

        )

    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));