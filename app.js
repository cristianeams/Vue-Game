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
            this.monsterHealth = this.calculateDamage(3, 10);
            if (this.checkWinner()) {
                return;
            }
            this.monsterAttacks();
            
        }, 
        specialAttack: function() {
            this.monsterHealth = this.calculateDamage(10, 20);
            if (this.checkWinner()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function() {

        }, 
        giveUp: function() {

        },
        monsterAttacks: function() {
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWinner();
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) +1, min);
        },
        checkWinner: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won!New game?')) {
                    this.startGame();
                } else {
                    this.game = false;
                }
                return true;
            }else if(this.playerHealth <= 0) {
                if (confirm('You won!New game?')) {
                    this.startGame(); 
                } else {
                    this.game = false;
                }
                return true;
            }
            return false;
        }
    }
})