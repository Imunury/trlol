<template>
    <div class="main_container">
        <div class="question_content">
            <img class="question_img" src="../assets/img/img1.png" />
        </div>
        <div class="question_container" v-if="data">

            <h2>
                {{ data.question }}
                <!-- question -->
            </h2>
            <button @click="saveData1">
                {{ data.choices[0] }}
                <!-- choice1 -->
            </button>
            <button @click="saveData2">
                {{ data.choices[1] }}
                <!-- choice2 -->
            </button>

        </div>

    </div>
</template>

<script>
// import axios from 'axios'


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
    // mounted(){
    //     sessionStorage.setItem("id", "choice")
    // },
    methods: {
        async getData() {
            try {
                const response = await this.$http.get('http://121.147.56.131:8080/questions/3')
                this.data = response.data
            } catch (error) {
                console.log(error)
            }
        },

        async saveData1() {
            sessionStorage.setItem(1, 1);

            // axios
            //     .post(URL + "/questions", data, config)
            //     .then((res) => {
            //         console.log(res.data);
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });
        },

        async saveData2() {
            sessionStorage.setItem(1, 2)
            // axios
            //     .post(URL + "/questions", data2, config)
            //     .then((res) => {
            //         console.log(res.data);
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });
        }
    }
}

// const config = {
//     headers: {
//         "Content-Type": "application/json",
//     },
// };

// const data1 = [
//     {
//         id: 1,
//         choice: 2,
//     },
    
// ];

// const data2 = [
//     {
//         id: 5,
//         choice: 5,
//     },
   
// ];

// const URL = "http://121.147.56.131:8080";

</script>


<style>
@import "../css/MainPage.css"
</style>