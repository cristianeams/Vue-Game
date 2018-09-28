new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        game: false
    },
    methods: {
        startGame: function() {
            this.game = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {

        },
        specialAttack: function() {

        },
        heal: function() {

        }, 
        giveUp: function() {

        }
    }
})