<template>
    <div class="main_container">
        <div class="question_content">
            <!-- <img class="question_img" src="../assets/img/img1.png" /> -->
        </div>
        <div class="question_container">
            <!-- v-if="data" -->
            <h2>
                <!-- {{ data.question }} -->
                asad
            </h2>
            <button v-on:click="check1">
                <!-- {{data.choices[0]}} -->
                asd
            </button>
            <button v-on:click="check2">
                <!-- {{ data.choices[1] }} -->
                asd
            </button>

        </div>

    </div>
</template>

<script>
import axios from 'axios'


// export default {
//     name: 'QuestionPage',
//     data() {
//         return {
//             data: null
//         }
//     },
//     created() {
//         this.getData()
//     },
//     methods: {
//         async getData() {
//             try {
//                 const response = await this.$http.get('http://121.147.56.131:8080/questions/3')
//                 this.data = response.data
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }
// }

export default {
    data: function () {
        return {
            test1: '',
            test2: '',
        }
    },
    methods: {
        check1: function () {
            console.log(this.test1, this.test2)
            var url = ""
            var data = {
                test1: 10,
                test2: 20.
            }
            axios(url, data)
                .then(function (res) {
                    console.log(res)
                })
                .catch(function (err) {
                    console.log(err)
                })
        }

    }
}

</script>

<style>
@import "../css/MainPage.css"
</style>