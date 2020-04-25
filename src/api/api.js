import axios from 'axios'
import Vue from 'vue'

Vue.use(axios);

let base = "http://localhost:8083";

//登录
export const signIn = params => {
    return axios.post(
        `${base}` + "/login",
        params,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => res.data);
};

//获取信息
export const getUserListPage = params => {
    return axios.get(`${base}/oauth/admin`, {params: params}).then(data => {
        console.log(data)
    }).catch(error => {
        console.log(error)
    });
};

//github登录
export const gitHubLogin = () => {
    //发起ajax请求会跨域
   // return axios.get(`https://github.com/login/oauth/authorize?client_id=48f53fa0dae4f1aa1387&redirect_uri=http://localhost:8083/login/oauth2/code/github`)
    //window.open不会有跨域问题
    //这个地址后台的SpringSecurity会解析到,后台会自动重定向三方认证页面
    window.open("http://localhost:8083/oauth2/authorization/github",
        "github登陆",
        "width=620,height=420,resizable,scrollbars=yes,status=1")
}
