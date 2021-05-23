<template>
    <v-container
        id="users-view"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col cols="12">
                <view-intro
                    heading="アカウント一覧"
                    sub="You can edit or delete accounts."
                />
                <material-card
                    color="accent"
                    full-header
                >
                    <template #heading>
                        <div class="pa-8 white--text">
                            <div class="text-h4 font-weight-light">
                                Users State
                            </div>
                            <div class="text-caption">
                                Usersテーブル
                            </div>
                        </div>
                    </template>
                    <v-card-title>
                        <v-btn
                            color="primary"
                            to="/portfolio/register"
                        >
                            <v-icon left>mdi-account-plus</v-icon>
                            新規登録
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    <v-card-text>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :search="search"
                        >
                            <template v-slot:item.actions="{ item }">
                                <v-btn
                                    color="primary"
                                    class="mr-3"
                                    small
                                    @click="editItem(item)"
                                >
                                    <v-icon left>mdi-square-edit-outline</v-icon>
                                    変更
                                </v-btn>
                                <v-btn
                                    color="secondary"
                                    small
                                    @click="get"
                                >
                                    <v-icon left>mdi-delete-forever</v-icon>
                                    削除
                                </v-btn>
                        </v-data-table>
                    </v-card-text>
                </material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios"
import MaterialCard from '../components/global/MaterialCard'
import ViewIntro from '../components/global/ViewIntro'
export default {
    name: 'UsersView',
    components: {
        MaterialCard,
        ViewIntro
    },
    data() {
        return {
            search: '',
            headers: [{
                sortable: false,
                text: 'ID',
                value: 'id',
                class: 'blue--text darken-2',
            },{
                sortable: false,
                text: 'ユーザ名',
                value: 'name',
                class: 'blue--text darken-2',
            },{
                sortable: false,
                text: 'Email',
                value: 'email',
                class: 'blue--text darken-2',
            },{
                sortable: false,
                text: '登録日時',
                value: 'createat',
                class: 'blue--text darken-2',
            },{
                sortable: false,
                text: '更新日時',
                value: 'updateat',
                class: 'blue--text darken-2',
            },{
                sortable: false,
                text: '',
                value: 'actions',
            }],
            items: [{
                id: 1,
                name: 'ゲストユーザー',
                email: 'guest0@user.sample',
                createat: '2021-05-01 13:00:00',
                updateat: '2021-05-01 14:15:16',
            },{
                id: 2,
                name: 'テストユーザ１',
                email: 'test1@gmail.com',
                createat: '2021-05-02 10:00:00',
                updateat: '2021-05-02 11:00:00',
            },{
                id: 3,
                name: 'テストユーザ２',
                email: 'test2@yahoo.com',
                createat: '2021-05-03 8:30:45',
                updateat: '2021-05-03 8:30:45',
            },{
                id: 4,
                name: 'テストユーザ３',
                email: 'test3@outlook.jp',
                createat: '2021-05-04 23:00:00',
                updateat: '2021-05-05 00:05:55',
            },{
                id: 5,
                name: '検証 イチロー',
                email: 'ichiro@docomo.jp',
                createat: '2021-05-05 10:00:00',
                updateat: '2021-05-05 10:12:34',
            },{
                id: 6,
                name: '検証 ジロー',
                email: 'jiro0@ezweb.ne.jp',
                createat: '2021-05-06 07:00:00',
                updateat: '2021-05-06 08:09:10',
            },{
                id: 7,
                name: '検証 サブロー',
                email: 'saburo0@softbank.jp',
                createat: '2021-05-10 18:32:01',
                updateat: '2021-05-10 18:32:01',
            },{
                id: 8,
                name: '為栗メロ',
                email: 'meromero@station.com',
                createat: '2021-05-11 01:23:45',
                updateat: '2021-05-11 01:23:45',
            },{
                id: 9,
                name: '恋ヶ浜みろく',
                email: 'love-miroku@ekimemo.jp',
                createat: '2021-05-11 11:22:33',
                updateat: '2021-05-11 11:22:33',
            },{
                id: 10,
                name: '新阪ルナ',
                email: 'runa.shinsaka@dasher.or.jp',
                createat: '2021-05-11 18:00:00',
                updateat: '2021-05-12 06:00:00',
            }]
        }
    },
    methods: {
        editItem(item) {
            console.log('edit')
            console.log(item)
            this.$router.push({ path: '/portfolio/register' })
        },
        deleteItem(item) {
            console.log('delete')
            console.log(item)
        },
        get() {
            axios.post('api/accountviewer', {
            }).then(response => {
                console.log(response)
            }).catch((e) => {
                this.errorMessages = 'エラーが発生しました。'
                this.errorDialog = true
            })
        }
    }
}
</script>

