<template>
    <v-card class="card">
        <v-card-title>
            {{course.title}}
            <span class="badge m-3" :class="[course.active ? 'badge-success' :'badge-danger']">
                {{course.active ? 'ativado' : 'desativado' }}
            </span>
        </v-card-title>
        <v-card-subtitle>
            Começou em {{course.subtitle}}
        </v-card-subtitle>
        <v-card-text class="description">
            {{filter(course.description, 600)}}
        </v-card-text>
        <v-flex class="card-bottom">
            <span class="small">{{course.startedAt}}</span>
                <v-btn class="ma-2"  @click="editCourse(course)" fab small>
                    <v-icon > mdi-clipboard-outline</v-icon>
                </v-btn>
                <v-btn class="ma-2"  @click="deleteCourse(course.id)" fab small>
                    <v-icon > mdi-trash-can</v-icon>
                </v-btn>
        </v-flex>
    </v-card>
</template>

<script>
    export default {
        name: "Card",
        props: {
            course: Object,
            deleteCourse: Function,
            editCourse: Function,
        },
        methods: {
            filter(value, size){
                    if (!value) return '';
                    value = value.toString();

                    if (value.length <= size) {
                        return value;
                    }
                    return value.substr(0, size) + '...';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        height: 335px;
        .card-bottom{
            position: absolute;
            bottom: 0;
            right: 0;
        }



    }



</style>