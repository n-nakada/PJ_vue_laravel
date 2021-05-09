<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            app
            dark
            temporary
            :src="require('@/portfolio/assets/sidebar.jpg')"
            v-show="showHeaderFooter"
        >
            <template #img="props">
                <v-img
                    gradient="rgba(0,0,0,.7), rgba(0,0,0,.7)"
                    v-bind="props"
                />
            </template>
            <v-container>
                <v-list-item class="mb-0 justify-space-between pl-3">
                    <v-list-item-avatar>
                        <v-img
                            :src="require('@/portfolio/assets/vmd.svg')"
                        />
                    </v-list-item-avatar>
                    <v-list-item-content class="pl-2">
                        <v-list-item-title class="text-h5">
                            <strong class="font-weight-black pink--text text--lighten-3">Load</strong>
                            <strong class="font-weight-black light-blue--text">Asset</strong>
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
            v-show="showHeaderFooter"
        >
            <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toobar-title>
                <span class="pink--text text--lighten-3">Load</span>
                <span class="light-blue--text">Asset</span>
            </v-toobar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-menu offset-y>
                    <template v-slot:activator="{on}">
                        <v-btn
                            v-on="on"
                            text
                        >
                            <v-icon class="mr-1">mdi-account-circle</v-icon>
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-subheader>User Info</v-subheader>
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
                        <v-divider></v-divider>
                        <v-list-item @click="logout">
                            <v-list-item-icon>
                                <v-icon>mdi-logout</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-app-bar>
        <v-main>
            <router-view />
            <ErrorDialog
                :dialog="errorDialog"
                :messages="dialogMessages"
                @result="errorDialogResponse"
            />
            <ConfirmDialog
                :dialog="confirmDialog"
                :messages="dialogMessages"
                @result="confirmDialogResponse"
            />
        </v-main>
        <v-footer
            color="grey darken-3"
            dark
            app
            padless
            absolute
            v-show="showHeaderFooter"
        >
            <v-row
                justify="center"
                no-gutters
            >
                <span>©</span>
                <span class="mx-1">{{ new Date().getFullYear() }}</span>
                <span class="pink--text text--lighten-3">Load</span>
                <span class="light-blue--text">Asset</span>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
import axios from "axios"
import ErrorDialog from "@/portfolio/components/global/ErrorDialog"
import ConfirmDialog from "@/portfolio/components/global/ConfirmDialog"

export default {
    name: 'App',
    components: {
        ErrorDialog,
        ConfirmDialog
    },
    watch: {
        '$route': function(to, from) {
            if (to.path === '/portfolio') {
                this.showHeaderFooter = false
            } else {
                this.showHeaderFooter = true
            }
        }
    },
    data() {
        return {
            drawer: null,
            showHeaderFooter: (this.$route.path === '/portfolio') ? false : true,
            dialogMessages: '',
            errorDialog: false,
            confirmDialog: false,
            supports: [{
                name: 'Consulting and suppourt',
                icon: 'mdi-vuetify'
            },{
                name: 'Discord community',
                icon: 'mdi-discord'
            },{
                name: 'Report a bug',
                icon: 'mdi-bug'
            },{
                name: 'Github issue board',
                icon: 'mdi-github'
            },{
                name: 'Stack overview',
                icon: 'mdi-stack-overflow'
            }],
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
        },
        logout() {
            axios.post('/api/logout', {
                token: this.$store.getters.UserToken
            }).then(response => {
                this.$store.dispatch('init')
                this.dialogMessages = 'ログアウトしました。'
                this.confirmDialog = true
            }).catch((e) => {
                this.$store.dispatch('init')
                this.dialogMessages = 'ログイン期限切れです。'
                this.errorDialog = true
            })
        },
        errorDialogResponse() {
            this.errorDialog = false
            if (this.$route.path !== '/portfolio') {
                this.$router.push({ path: '/portfolio' })
            }
        },
        confirmDialogResponse() {
            this.confirmDialog = false
            this.$router.push({ path: '/portfolio' })
        }
    }
}
</script>

<style>
</style>
