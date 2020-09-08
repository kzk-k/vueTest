<template>
    <div class="ip">
        <h1>GetIP</h1>
        <GetIp />
    </div>
</template>

<script>
// @ is an alias to /src
import GetIp from '@/components/GetIp.vue';

export default {
    //   name: "Ip",
    components: {
        GetIp,
    },
};
</script>
