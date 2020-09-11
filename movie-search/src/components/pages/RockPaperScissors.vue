<template>
    <div class="rockPaperScissors">
        <h1>じゃんけんゲーム</h1>
        <h2>{{ result }}</h2>
        <div class="">
            <img :src="enemyHandImage" height="300" />
        </div>

        <div class="">
            <button @click="fight('goo')">ぐー</button>
            <button @click="fight('choki')">ちょき</button>
            <button @click="fight('paa')">ぱー</button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import GetIp from '@/components/GetIp.vue';

export default {
    //   name: "Ip",
    // components: {
    // GetIp,
    // },
    data() {
        return {
            hand: ['goo', 'choki', 'paa'],
            enemyHand: '',
            enemyHandImage: '',
            result: '勝負！',
        };
    },
    methods: {
        fight: function(myHand) {
            // 敵の手をランダムで決める
            // 0 1 2 のどれかの数字をランダムに生成する
            var index = Math.floor(Math.random() * Math.floor(3));
            this.enemyHand = this.hand[index];

            if (this.enemyHand === 'goo') {
                this.enemyHandImage = 'goo.jpeg';
            } else if (this.enemyHand === 'choki') {
                this.enemyHandImage = 'choki.jpeg';
            } else if (this.enemyHand === 'paa') {
                this.enemyHandImage = 'paa.jpeg';
            }

            // 自分の手と敵の手を比較する
            console.log('敵の手:' + this.enemyHand);
            console.log('自分の手:' + myHand);

            // 引き分け
            if (myHand === this.enemyHand) {
                this.result = '引き分け';
            }

            // 勝ち
            if (this.enemyHand === 'goo' && myHand === 'paa') {
                this.result = '勝ち！！！';
            }
            if (this.enemyHand === 'choki' && myHand === 'goo') {
                this.result = '勝ち！！！';
            }
            if (this.enemyHand === 'paa' && myHand === 'choki') {
                this.result = '勝ち！！！';
            }

            // 負け
            if (this.enemyHand === 'goo' && myHand === 'choki') {
                this.result = '負け・・・';
            }
            if (this.enemyHand === 'choki' && myHand === 'paa') {
                this.result = '負け・・・';
            }
            if (this.enemyHand === 'paa' && myHand === 'goo') {
                this.result = '負け・・・';
            }
        },
    },
};
</script>
