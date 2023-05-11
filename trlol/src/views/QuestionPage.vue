<template>
    <div class="main_container">
        <div class="question_content">
            <img class="question_img" src="../assets/img/img1.png" />
        </div>
        <div class="question_container" v-if="data">
            <h2>{{ data.question }}</h2>
            <button>
                {{data.choices[0]}}
            </button>
            <button>
                {{ data.choices[1] }}
            </button>
        </div>

        <div>
        </div>

    </div>
</template>

<script>
// axios.get('http://121.147.56.131:8080/questions')
//     .then(response => {
//         console.log(response.data); // 응답 데이터 출력
//     })
//     .catch(error => {
//         console.error(error);
//     });
export default {
    name: 'QuestionPage',
    data() {
        return {
            data: null
        }
    },
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            try {
                const response = await this.$http.get('http://121.147.56.131:8080/questions/3')
                this.data = response.data
            } catch (error) {
                console.log(error)
            }
        }
    }
}


</script>

<style>
@import "../css/MainPage.css"
</style>