<template>
    <v-card width="400" class="mx-auto mt-5">
        <v-card-text>
            <v-form>
                <v-text-field
                        label="Username"
                        v-model="userName"
                        prepend-icon="mdi-account-circle"
                />
                <v-text-field
                        :type="showPassWord ? 'text':'password'"
                        label="Password"
                        v-model="passWord"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassWord? 'mdi-eye':'mdi-eye-off'"
                        @click:append="showPassWord=!showPassWord"
                />
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn color="success" class="mx-auto"  @click="$emit('signUpClick')">注册</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        //注册
        name: "signUp",
        data: () => ({
            showPassWord: false,
            userName:'',
            passWord:''
        })
    }
</script>

<style scoped>

</style>
