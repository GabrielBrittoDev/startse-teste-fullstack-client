<template>
        <v-container>
            <v-row no-gutters>
                <v-col
                        v-for="item in courses"
                        :key="item.id"
                        cols="12"
                        sm="4"
                        md="6"
                        xs="3"
                >
                    <card class="ma-5"
                          :course="item"
                          :edit-course="editCourse"
                          :delete-course="deleteCourse"
                    > </card>
                </v-col>

            </v-row>
            <v-pagination
                    v-model="page"
                    class="my-4"
                    :length="pagination.last_page"
                    @next="redirect(pagination.next_page_url)"
                    @previous="redirect(pagination.prev_page_url)"
                    @input="redirect"
            ></v-pagination>

            <v-dialog v-model="dialog" max-width="700px">
                <v-card>
                    <v-card-title>Informações do curso</v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-text-field
                                label="Titulo"
                                prepend-icon="title"
                                v-model="course.title"
                            ></v-text-field>
                            <v-text-field
                                    label="Sub-titulo"
                                    prepend-icon="title"
                                    v-model="course.subtitle"
                            ></v-text-field>
                              <v-menu
                                    ref="menu1"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                            label="Date"
                                            v-model="course.startedAt"
                                            hint="MM/DD/YYYY format"
                                            persistent-hint
                                            prepend-icon="event"
                                            v-bind="attrs"
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                  <v-date-picker v-model="course.startedAt" no-title @input="menu1 = false"></v-date-picker>
                            </v-menu>

                            <v-checkbox
                                    label="Ativo"
                                    v-model="course.active"
                            ></v-checkbox>
                            <v-textarea
                                    prepend-icon="content_paste"
                                    label="Descrição"
                                    v-model="course.description"
                            ></v-textarea>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeModal">Fechar</v-btn>
                        <v-btn color="blue darken-1" text @click="save(course)">Salvar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-container>
</template>

<script>
    import axios from 'axios';
    import Card from "./Card";
    const _ = require('lodash');

    export default {
        name: "Grid",
        components: {
            Card
            },
        data (){
            return {
                baseUrl: 'http://localhost:8000',
                dialog: true,
                page: 1,
                pagination: {},
                course: {
                    id: '',
                    title: '',
                    subtitle: '',
                    description: '',
                    startedAt: '',
                    active: 0
                },
                courses: {},
            }
        },
        methods: {
            redirect(url){
                url = !isNaN(url)? this.baseUrl + '/courses?page=' + url : url;
                axios.get(url)
                    .then((response) => {
                        this.courses = response.data.data;
                        this.pagination = response.data;
                        delete this.pagination.data;
                    });
            },
            getCourses(){
                axios.get('http://localhost:8000/courses')
                    .then((response) => {
                        this.courses = response.data.data;
                        this.pagination = response.data;
                        delete this.pagination.data;
                    });
            },
            deleteCourse(id){
                axios.delete('http://localhost:8000/courses/' + id)
                    .then(() => {
                        this.courses = this.courses.filter(function (course){
                            return course.id !== id;
                        });
                        this.$toastr.s('Curso deletado :D', 'Successo!')
                    })
                .catch((err) => this.$toastr.e(err.response.data.error));
            },
            editCourse(course){
                this.dialog = true;
                for (const [key, val] of Object.entries(course))
                    if (_.has(this.course, key)) this.course[key] = val;
            },
            save(course){
                this.closeModal();
                if (isNaN(course.id)){
                    this.updateCourse(course);
                } else {
                    this.createCourse(course);
                }
            },
            updateCourse(course){
                axios.put(this.baseUrl + '/courses/' + course.id, course)
                .then(() => {
                    this.$toastr.s('Curso atualizado com sucesso', 'Sucesso!')
                })
                .catch((err) => this.$toastr.e(err.response.data.error));
            },
            closeModal(){
                this.dialog = false;
                for (var key in this.course) {
                    delete this.course[key];
                }
            },
            createCourse(course){
                axios.post(this.baseUrl + '/courses', course)
                .then((response) => {
                    this.closeModal();
                    this.getCourses();
                    this.$toastr.s(response.message);
                })
                .catch((err) => {
                    this.$toastr.e(err.response.data.error);
                });
            },
        },
        mounted() {
            this.getCourses();
        }
    }
</script>

<style scoped>

</style>