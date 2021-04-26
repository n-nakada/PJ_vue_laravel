<template>
    <v-card
        width="400px"
        class="mx-auto mt-5"
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
                <form @submit.prevent="submit">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required|max: 20"
                    >
                        <v-text-field
                            v-model="account.name"
                            :counter="20"
                            :error-messages="errors"
                            label="Name"
                            required
                            prepend-icon="mdi-account-circle"
                        />
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="E-Mail"
                        rules="required|email|max: 255"
                    >
                        <v-text-field
                            v-model="account.email"
                            :error-messages="errors"
                            label="E-Mail"
                            required
                            prepend-icon="mdi-email"
                        />
                    <validation-provider
                        v-slot="{ errors }"
                        name="Password"
                        :rules="{
                            required: true,
                            min: 8,
                            regex: '^.*((?=.*[A-Za-z])(?=.*[0-9])|(?=.*[A-Za-z])(?=.*[!_@])|(?=.*[0-9])(?=.*[!_@])).*$'
                        }"
                    >
                        <v-text-field
                            v-model="account.password"
                            :error-messages="errors"
                            label="Password"
                            required
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
                            v-model="account.password_confirmation"
                            :error-messages="errors"
                            label="Confirm Password"
                            required
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
                    </v-card-actions>
                </form>
            </validation-observer>
        </v-card-text>
    </v-card>
</template>

<script>
import axios from "axios"
import { required, email, min, max, regex, confirmed } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
setInteractionMode('eager')
extend('required', {
    ...required,
    message: '{_field_} は入力必須です',
})

extend('min', {
    ...min,
    message: '{_field_} は {length} 文字以上で入力してください',
})

extend('max', {
    ...max,
    message: '{_field_} は {length} 文字以内で入力してください',
})

extend('regex', {
    ...regex,
    message: '{_field_} は半角全角英字・半角数字・記号（@_!）のうち2種類以上を組み合わせて入力してください',
})

extend('email', {
    ...email,
    message: 'メールアドレス形式で入力してください',
})

extend('confirmed', {
    ...confirmed,
    message: 'パスワードと同一の値を再入力してください',
})

export default {
    name: 'Register',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            showPassword: false,
            showConfirm: false,
            account: {}
        }
    },
    methods: {
        submit() {
            this.$refs.observer.validate()
            axios.post('/api/auth/register', {
                name: this.account.name,
                email: this.account.email,
                password: this.account.password,
                password_confirmation: this.account.password_confirmation
            }).then(response => {
                console.log(response)
            })
        }
    }
};
</script>

<style>
</style>

