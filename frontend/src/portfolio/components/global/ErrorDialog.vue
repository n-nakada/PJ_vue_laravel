<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="450"
        >
            <v-card>
                <v-toolbar
                    color="error"
                    dark
                >
                    <v-icon left>
                        mdi-alert-octagram
                    </v-icon>
                    エラー
                </v-toolbar>
                <v-card-text class="pt-6">
                    <p style="white-space: pre;">{{ messages}}</p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        tile
                        @click="close"
                    >
                        <v-icon left>
                            mdi-close-circle
                        </v-icon>
                        閉じる
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    props: {
        messages: {
            type: String,
            default: 'エラーが発生しました。',
            required: true
        },
        dialog: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('result', {})
        }
    }
}
</script>

