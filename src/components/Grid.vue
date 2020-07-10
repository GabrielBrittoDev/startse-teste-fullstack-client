<template>
    <v-container>

        <button @click="doa">a</button>

    </v-container>
</template>

<script>
    import Card from "./Card";
    export default {
        name: "Grid",
        components: {
            Card
            },
        data (){
            return {
                items: [
                    { message: 'Algo' },
                    { message: 'Outro' }
                ],
                courses: [
                    {
                        id: 3,
                        title: 'dw',
                    },
                    {
                        id: 4,
                        title: 'dw',
                    },
                    {
                        id: 5,
                        title: 'dw',
                    },
                    {
                        id: 6,
                        title: 'dw',
                    }
                ]
            }
        },
        methods: {
            doa(){
                  this.courses.push({'id' : this.courses.length + 82, 'title':'dopopdoaw'});
                console.log(this.courses)
            },
        },
        mounted() {
            console.log(this.courses);
        }
    }
</script>

<style scoped>

</style>