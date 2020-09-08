<template>
    <div>
        <p v-text="ip">ここにIPが表示されます</p>
        <div>
            <input @click="getIp" type="button" value="IPを取得" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ip: '',
        };
    },
    methods: {
        getIp() {
            this.ip = 'IPを取得しています';
            this.$axios
                .get('https://httpbin.org/get')
                .then(response => {
                    this.ip = response.data.origin;
                    console.log(response.data);
                })
                .catch(() => {
                    this.ip = 'IPの取得に失敗しました';
                });
        },
    },
};
</script>
