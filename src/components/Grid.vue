<template>
        <v-container>
            <v-row no-gutters>
                <v-col
                        v-for="item in courses"
                        :key="item.id"
                        cols="12"
                        sm="3"
                        md="3"

                >
                    <card :course="item"> </card>
                </v-col>
            </v-row>
        </v-container>

</template>

<script>
    import axios from 'axios';
    import Card from "./Card";
    export default {
        name: "Grid",
        components: {
            Card
            },
        data (){
            return {
                courses: {}
            }
        },
        methods: {

        },
        mounted() {
            axios.get('http://localhost:8000/courses')
            .then((response) => {
                this.courses = response.data.data;
            });
        }
    }
</script>

<style scoped>

</style>