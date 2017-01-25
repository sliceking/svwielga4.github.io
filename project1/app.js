document.addEventListener('DOMContentLoaded',function(){
    new Vue({
        el:'#app',
        data:{
            showControls:false,
            log:[],
            you:{
                health:100,
                healthStyle:{
                    backgroundColor: 'green',
                    margin: 0, 
                    color: 'white',
                    width:'100'
                }
            },
            monster:{
                health:100,
                healthStyle:{
                    backgroundColor: 'green',
                    margin: 0, 
                    color: 'white',
                    width:'100'
                }
            }
        },
        computed:{
            

        },
        methods:{
            init:function(){
                this.showControls = true;
                this.you.health = 100;
                this.monster.health = 100;
                this.you.healthStyle.width = this.you.health + '%';
                this.monster.healthStyle.width = this.monster.health + '%';
            },
            attack:function(damage){
                this.youAttack(damage);
                if (this.monster.health < 1){
                    this.win();
                    return;
                }
                this.monsterAttack(damage);
                if (this.you.health < 1){
                    this.lose();
                    return;
                }
            },
            youAttack:function(damageMax){
                const youDmg = Math.floor(Math.random() * damageMax + 1);
                this.monster.health -= youDmg;
                this.log.unshift(`You hit Monster for ${youDmg}`);
                this.monster.healthStyle.width = this.monster.health + '%';
            },
            specialAttack:function(damage){
               this.attack(damage);
            },
            heal:function(){
                const heal = Math.floor(Math.random() * 30 + 1);
                this.you.health += heal;
                this.log.unshift(`You heal for ${heal}`);
                this.you.healthStyle.width = this.you.health + '%';
                this.monsterAttack(damage=20);
                if (this.you.health < 1){
                    this.lose();
                    return;
                }
            },
            monsterAttack:function(damageMax){
                const monsterDmg = Math.floor(Math.random() * damageMax + 1);
                this.you.health -= monsterDmg;
                this.log.unshift(`Monster hit You for ${monsterDmg}`);
                this.you.healthStyle.width = this.you.health + '%';

            },
            giveUp:function(){
                this.log.unshift(`Game Restarted!`);
                this.init();
            },
            win:function(){
                this.log.unshift(`You Win!`);
                this.showControls = false;
            },
            lose:function(){
                this.log.unshift(`You Lose!`);
                this.showControls = false;
            }

        },
        watch:{
            
        }
    })
})