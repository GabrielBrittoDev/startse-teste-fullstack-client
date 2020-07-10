<template>
      <v-navigation-drawer
              :color="color"
              expand-on-hover
              relative
              permanent
      >
        <v-list
                nav
                class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>StartSe</v-list-item-title>
              <v-list-item-subtitle>Teste Full-stack</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      color: '#2962ff',
      miniVariant: true,
      expandOnHover: true,
      items: [
        { title: 'Todos cursos', icon: 'mdi-book-open-variant' },
        { title: 'Adicionar curso', icon: 'mdi-plus' },
        { title: 'Github', icon: 'mdi-github' },
      ],
    }
  },
  methods: {
  }

}
</script>
