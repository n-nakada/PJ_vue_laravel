<template>
    <v-card
        width="345px"
        class="mx-auto my-5"
    >
        <v-app-bar
            dark
            color="pink"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>出没チェッカー</v-toolbar-title>
        </v-app-bar>
        <v-card-text class="pink lighten-5">
            <v-container>
                <v-row class="py-1">
                    <v-col cols="4" class="py-0 pl-0 pr-1">
                        <a href="tel:0338718578" id="member" style="text-decoration: none;">
                            <v-chip
                                color="pink"
                                label
                                text-color="white"
                            ><v-icon left>mdi-monitor-cellphone-star</v-icon>会員予約
                            </v-chip>
                        </a>
                    </v-col>
                    <v-col cols="4" class="py-0 pl-0 pr-1">
                        <a href="tel:0338767077" id="booking" style="text-decoration: none;">
                            <v-chip
                                color="blue-grey"
                                label
                                text-color="white"
                            ><v-icon left>mdi-monitor-cellphone</v-icon>一般予約
                            </v-chip>
                        </a>
                    </v-col>
                    <v-col cols="4" class="pa-0">
                        <a href="tel:0338718579" id="inquiry" style="text-decoration: none;">
                            <v-chip
                                color="blue-grey"
                                label
                                text-color="white"
                            ><v-icon left>mdi-monitor-cellphone</v-icon>お問合せ
                            </v-chip>
                        </a>
                    </v-col>
                </v-row>
                <v-row class="py-1">
                    <v-col class="px-1">
                        <v-btn
                            block
                            x-large
                            color="primary"
                            @click="start"
                        >
                            <v-icon left>mdi-timer</v-icon>
                                開始
                            </v-btn>
                        </v-btn>
                    </v-col>
                    <v-col class="px-1">
                        <v-btn
                            block
                            x-large
                            @click="stop"
                        >
                            <v-icon left>mdi-timer-off</v-icon>
                                終了
                            </v-btn>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row
                    class="fill-height"
                    align-content="center"
                    justify="center"
                    v-show="showProgress"
                >
                    <v-col cols="6">
                        <v-progress-linear
                            color="deep-purple accent-4"
                            indeterminate
                            rounded
                            height="6"
                        ></v-progress-linear>
                    </v-col>
                </v-row>
            </v-containe>
            <ErrorDialog
                :dialog="errorDialog"
                :messages="message"
                @result="errorDialogResponse"
            />
            <ConfirmDialog
                :dialog="confirmDialog"
                :messages="message"
                @result="confirmDialogResponse"
            />
        </v-card-text>
    </v-card>
</template>

<script>
import axios from "axios"
import con from "../const"
import ErrorDialog from '../components/global/ErrorDialog'
import ConfirmDialog from '../components/global/ConfirmDialog'

export default {
    name: 'Schedule',
    components: {
        ErrorDialog,
        ConfirmDialog,
    },
    data() {
        return {
            message: '',
            doing: false,
            errorDialog: false,
            confirmDialog: false,
        }
    },
    computed: {
        showProgress() {
            return this.doing
        }
    },
    methods: {
        start() {
            this.doing = true
            axios.post('schedule', {
                check: 'init',
            }).then(response => {
                if (!response.data.error) {
                    this.check()
                }
            }).catch((e) => {
                this.doing = false
                this.errorDialog = true
            })
        },
        stop() {
            this.doing = false
        },
        check() {
            if (!this.doing) return
            axios.post('schedule', {
                check: 'check',
            }).then(response => {
                if (response.status !== 200) {
                    this.doing = false
                    this.message = 'エラーが発生しました。'
                    this.errorDialog = true
                    return
                }
                if (response.data.status === 'commuting') {
                    this.doing = false
                    var a = document.getElementById('member')
                    a.click()
                } else {
                    var self = this
                    setTimeout(function() {
                        self.check()
                    }, 750)
                }
            }).catch((e) => {
                this.doing = false
                this.message = 'エラーが発生しました。'
                this.errorDialog = true
            })
        },
        errorDialogResponse() {
            this.errorDialog = false
        },
        confirmDialogResponse() {
            this.confirmDialog = false
        }
    }
}
</script>

<style>
</style>
