<template>
    <v-card
        width="345px"
        class="mx-auto my-5"
    >
        <v-img
            class="white--text align-end"
            height="200px"
            :src="require('@/portfolio/assets/register_header.jpg')"
        >
            <v-card-title>
                <h1 class="display-1">アカウント登録</h1>
            </v-card-title>
        </v-img>
        <v-card-text>
            <validation-observer
                ref="observer"
                v-slot="{ invalid }"
            >
                <form
                    ref="form"
                    @submit.prevent="submit"
                >
                    <validation-provider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required|max: 20"
                    >
                        <v-text-field
                            v-model="account.Name"
                            :counter="20"
                            :error-messages="errors"
                            label="Name"
                            prepend-icon="mdi-account-circle"
                        />
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email|max: 255"
                    >
                        <v-text-field
                            v-model="account.Email"
                            :error-messages="errors"
                            label="Email"
                            prepend-icon="mdi-email"
                        />
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="Password"
                        :rules="{
                            required: true,
                            min: 8,
                            regex: '^.*((?=.*[A-Za-z])(?=.*[0-9])|(?=.*[A-Za-z])(?=.*[!_.@])|(?=.*[0-9])(?=.*[!_.@])).*$'
                        }"
                    >
                        <v-text-field
                            v-model="account.Password"
                            :error-messages="errors"
                            label="Password"
                            :type="showPassword ? 'text' : 'password'"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                        />
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="ConfirmPassword"
                        rules="required|confirmed:Password"
                    >
                        <v-text-field
                            v-model="account.Password_confirmation"
                            :error-messages="errors"
                            label="Confirm Password"
                            :type="showConfirm ? 'text' : 'password'"
                            prepend-icon="mdi-checkbox-marked-circle"
                            :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showConfirm = !showConfirm"
                        />
                    </validation-provider>
                    <v-card-actions>
                        <v-btn
                            block
                            color="primary"
                            type="submit"
                            :disabled="invalid"
                        >
                            <v-icon left>mdi-database-plus</v-icon>
                            登録
                        </v-btn>
                        <ErrorDialog
                            :dialog="errorDialog"
                            :messages="validateMessages"
                            @result="errorDialogResponse"
                        />
                        <ConfirmDialog
                            :dialog="confirmDialog"
                            :messages="finishMessage"
                            @result="confirmDialogResponse"
                        />
                    </v-card-actions>
                </form>
            </validation-observer>
        </v-card-text>
    </v-card>
</template>

<script>
import axios from "axios"
import con from "../const"
import { required, email, min, max, regex, confirmed } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import ErrorDialog from '../components/global/ErrorDialog'
import ConfirmDialog from '../components/global/ConfirmDialog'

setInteractionMode('eager')
extend('required', { ...required, message: con.VALIDATE_REQUIRED })
extend('min', { ...min, message: con.VALIDATE_MIN })
extend('max', { ...max, message: con.VALIDATE_MAX })
extend('regex', { ...regex, message: con.VALIDATE_REGEX })
extend('email', { ...email, message: con.VALIDATE_EMAIL })
extend('confirmed', { ...confirmed, message: con.VALIDATE_CONFIRMED })

export default {
    name: 'Register',
    components: {
        ValidationProvider,
        ValidationObserver,
        ErrorDialog,
        ConfirmDialog
    },
    data() {
        return {
            showPassword: false,
            showConfirm: false,
            account: {},
            errorDialog: false,
            confirmDialog: false,
            validateMessages: '',
            finishMessage: ''
        }
    },
    methods: {
        submit() {
            this.$refs.observer.validate()
            axios.post('/api/auth/register', {
                Name: this.account.Name,
                Email: this.account.Email,
                Password: this.account.Password,
                Password_confirmation: this.account.Password_confirmation
            }).then(response => {
                this.finishMessage = 'Name「' + response.data.name + '」の登録が完了しました。'
                this.confirmDialog = true
                this.$refs.form.reset()
            }).catch((e) => {
                var msg = ''
                e.response.data.errorMessages.forEach(function(el) {
                    msg += el + "\n"
                })
                this.validateMessages = msg
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
