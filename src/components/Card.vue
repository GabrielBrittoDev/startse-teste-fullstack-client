<template>
    <v-card>
        <v-card-title>{{course.title}}</v-card-title>
        <v-card-text>
            “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Card",
        props: {
            course: Object,
        }
    }
</script>

<style scoped>

</style>