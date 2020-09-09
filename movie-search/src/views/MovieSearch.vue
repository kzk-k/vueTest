<template>
    <div class="movieSearch">
        <h1>MovieSearch</h1>
        <div class="row">
            <input v-model="inputText" type="text" />
            <button @click="onClick">submit</button>
        </div>
        <ul v-show="movies">
            <li v-for="(movie, index) in movies" :key="index">
                <p class="movieTitle">{{ movie.Title }}</p>
                <p>{{ movie.Year }}</p>
                <img :src="movie.Poster" :alt="movie.Title" />
            </li>
        </ul>
        <p v-show="notFound">「{{ inputText }}」は見つかりませんでした</p>
    </div>
</template>

<script>
// @ is an alias to /src

let baseUrl = `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_MOVIE_SEARCH_API_KEY}`;

export default {
    // components: {
    //   GetIp,
    // },
    data() {
        return {
            inputText: '',
            movies: [],
            notFound: false,
        };
    },
    methods: {
        onClick: function() {
            if (this.inputText === '') {
                return;
            }
            // 検索用のURL作成
            baseUrl = baseUrl + '&s=' + this.inputText;
            this.$axios.get(baseUrl).then(response => {
                this.movies = response.data.Search;
                // console.log(response);

                // API側で用意してくれてるやつ
                if (response.data.Response == 'False') {
                    this.notFound = true;
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../sass/home';
</style>
