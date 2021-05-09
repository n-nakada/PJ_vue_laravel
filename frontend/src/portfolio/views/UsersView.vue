<template>
    <v-container
        id="users-view"
        fluid
        tag="section"
    >
        <view-intro
            heading="User Tables"
            link="components/simple-tables"
        />
        <material-card
            icon="mdi-clipboard-text"
            icon-small
            title="Simple Table"
            color="accent"
        >
            <v-simple-table>
                <thead>
                    <tr>
                        <th class="primary--text">
                            ID
                        </th>
                        <th class="primary--text">
                            Name
                        </th>
                        <th class="primary--text">
                            Email
                        </th>
                        <th class="primary--text">
                            CreateAt
                        </th>
                        <th class="text-right primary--text">
                            UpdateAt
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in items"
                        :key="item.id"
                    >
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.createat }}</td>
                        <td>{{ item.updateat }}</td>
                    </tr>
                </tbody>
            </v-simple-table>
        </material-card>
    </v-container>
</template>

<script>
import MaterialCard from '../components/global/MaterialCard'
export default {
    name: 'UsersView',
    components: {
        MaterialCard
    },
    data() {
        return {
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
    }
}
</script>

