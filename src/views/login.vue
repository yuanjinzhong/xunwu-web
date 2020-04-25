<template>
    <v-container>
        <v-card width="400" class="mx-auto mt-5">
            <v-tabs v-model="tab">
                <v-tabs-slider color="red"/>
                <v-tab key="#login">
                    Login
                    <v-icon>mdi-login-variant</v-icon>
                </v-tab>
                <v-spacer/>
                <v-tab key="#register">
                    Register
                    <v-icon>mdi-registered-trademark</v-icon>
                </v-tab>
                <!--以上是tabs-->
                <!--以下tabs明细-->
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <sign-in ref="signIn" @signInClick="signIn()" @gitHubLogin="gitHubLogin()"/>
                    </v-tab-item>
                    <v-tab-item>
                        <sign-up ref="signUp" @signUpClick="signUp()"/>
                    </v-tab-item>
                </v-tabs-items>
            </v-tabs>
        </v-card>
    </v-container>
</template>

<script>
    import SignIn from "@/components/login/signIn";
    import SignUp from "@/components/login/signUp";
    import {getUserListPage, gitHubLogin} from "@/api/api";

    export default {
        //聚合登陆
        name: 'login',
        components: {SignUp, SignIn},
        data: () => ({
            showPassWord: false,
            tab: null,
        }),
        methods: {
            signUp: function () {
                console.log(this.$refs.signUp.userName)
                console.log(this.$refs.signUp.passWord)
            },
            signIn: function () {
                console.log(this.$refs.signIn.userName)
                console.log(this.$refs.signIn.passWord)
                var userName = this.$refs.signIn.userName;
                var passWord = this.$refs.signIn.passWord;
                // signIn({
                //     userName,
                //     passWord
                // }).then(data=>{
                // console.log(data)
                // })
                getUserListPage({
                    userName,
                    passWord
                })
            },
            gitHubLogin: function () {
                gitHubLogin();
            }
        }
    }
</script>
