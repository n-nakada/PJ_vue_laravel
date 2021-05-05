<template>
    <v-app>
        <v-navigation-drawer
            app
            v-model="drawer"
            clipped
        >
            <v-container>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title grey--text text--darken-2">
                            Navigation lists
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense nav>
                    <template v-for="nav_list in nav_lists">
                        <v-list-item
                            v-if="!nav_list.lists"
                            :to="nav_list.link"
                            :key="nav_list.name"
                            @click="menu_close"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ nav_list.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-group
                            v-else
                            no-action
                            :prepend-icon="nav_list.icon"
                            :key="nav_list.name"
                            v-model="nav_list.active"
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item
                                v-for="list in nav_list.lists"
                                :key="list.name"
                                :to="list.link"
                            >
                                <v-list-item-title>{{ list.name }}</v-list-item-title>
                            </v-list-item>
                        </v-list-group>
                    </template>
                </v-list>
            </v-container>
        </v-navigation-drawer>
        <v-app-bar
            color="grey darken-3"
            dark
            app
            clipped-left
        >
            <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toobar-title>Laravel＋Vue ポートフォリオ</v-toobar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-menu offset-y>
                    <template v-slot:activator="{on}">
                        <v-btn
                            v-on="on"
                            text
                        >
                            <v-icon class="mr-1">mdi-account-circle</v-icon>
                            プロファイル
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-subheader>Get help</v-subheader>
                        <v-list-item
                            v-for="support in supports"
                            :key="support.name"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ support.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ support.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
        <v-footer
            color="grey darken-3"
            dark
            app
        >
            Laravel＋Vue ポートフォリオ
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            drawer: null,
            supports: [
                { name: 'Consulting and suppourt', icon: 'mdi-vuetify' },
                { name: 'Discord community', icon: 'mdi-discord' },
                { name: 'Report a bug', icon: 'mdi-bug' },
                { name: 'Github issue board', icon: 'mdi-github' },
                { name: 'Stack overview', icon: 'mdi-stack-overflow' },
                { name: 'Logout', icon: 'mdi-logout', click: 'logout' }
            ],
            nav_lists: [{
                name: 'Dashboard',
                icon: 'mdi-view-dashboard',
                link: '/portfolio/home'
            },{
                name: 'Getting Started',
                icon: 'mdi-speedometer',
                active: false,
                link: '',
                lists: [{
                    name: 'Quick Start',
                    link: '/portfolio/register'
                },{
                    name: 'Pre-made layouts',
                    link: '/portfolio/next'
                }]
            },{
                name: 'Customization',
                icon: 'mdi-cogs',
                link: ''
            },{
                name: 'Styles & animations',
                icon: 'mdi-palette',
                link: '',
                active: false,
                lists: [{
                    name: 'Colors',
                    link: '/portfolio/home'
                },{
                    name: 'Content',
                    link: '/portfolio/next'
                },{
                    name: 'Display',
                    link: 'portfolio/register'
                }]
            },{
                name: 'UI Components',
                icon: 'mdi-view-dashboard',
                link: '/portfolio/home'
            },{
                name: 'Directives',
                icon: 'mdi-function',
                link: '/portfolio/next'
            },{
                name: 'Preminum themes',
                icon: 'mdi-vuetify',
                link: '/portfolio/register'
            }]
        }
    },
    methods: {
        menu_close() {
            this.nav_lists.forEach(nav_list => nav_list.active = false)
        }
    }
}
</script>

<style>
</style>
