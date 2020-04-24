<script src="../../api/api.js"></script>
<template>
  <div class="login_form">
    <a class="logo-wrap" href="http://www.toutiao.com/">
      <img src="../../assets/今日头条.png" alt="" />
    </a>
    <div class="slogan-wrap">
      <img
        src="//s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/login/slogan_c6bab2f.png"
        alt=""
      />
    </div>
    <div class="form_table center">
      <div>
        <div class="login-form-frame">
          <div class="form-main" v-if="!passWordLogin">
            <div class="form-header center">手机号登录/注册</div>
            <div class="form-body">
              <div class="form-item">
                <input v-model="mobile" placeholder="手机号" />
              </div>
              <div class="form-item ">
                <div>
                  <input v-model="vertifyCode" placeholder="请输入4位验证码" />
                </div>

                <div id="mobile-code-get" class="mobile-code-get">
                  <span class="get-code">发送验证码</span>
                </div>
              </div>
            </div>
            <div class="form-login-button center">
              <Button
                style="background-color:#f85959;color: white;height: 46px;width:100%;border-radius: 5px;font-size: 18px;"
                @click="login(mobile, vertifyCode)"
              >
                确定
              </Button>
            </div>
          </div>
          <div class="form-main" v-if="passWordLogin">
            <div class="form-header center">账密登陆</div>
            <div class="form-body">
              <div class="form-item">
                <input v-model="accountOrEmail" placeholder="帐号/邮箱" />
              </div>
              <div class="form-item ">
                <div>
                  <input v-model="password" placeholder="密码" />
                </div>
              </div>
            </div>
            <div class="form-login-button center">
              <Button
                style="background-color:#f85959;color: white;height: 46px;width:100%;border-radius: 5px;font-size: 18px;"
                @click="login(accountOrEmail, password)"
              >
                确定
              </Button>
            </div>
          </div>
        </div>
        <div class="i-divider-horizontal center" id="login-divider">
          <span class="i-divider-inner-text">其他方式</span>
        </div>
        <!--其他登陆方式-->
        <div class="form-footer center-a" id="login-platform-footer">
          <div
            class="footer-login-type"
            id="login-type-account"
            v-if="!passWordLogin"
            @click="changeLoginType(loginTypeEnum.password)"
          >
            <img
              class="login-type-icon"
              src="//s3b.pstatp.com/toutiao/resource/ntoutiao_web/static/image/login/svg/icon_mail_pc_d9c3ec7.svg"
              alt=""
            />
            <span>帐密</span>
          </div>
          <div
            class="footer-login-type"
            id="login-type-mobile"
            v-if="passWordLogin"
            @click="changeLoginType(loginTypeEnum.verificationCode)"
          >
            <img
              class="login-type-icon"
              src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/login/svg/icon_phone_pc_9326f65.svg"
              alt=""
            />
            <span>手机</span>
          </div>
          <div class="footer-login-type platform-login">
            <img
              class="login-type-icon"
              src="//s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/login/svg/icon_qq_pc_5baa07b.svg"
              alt=""
            />
            <span>QQ</span>
          </div>
          <div class="footer-login-type platform-login">
            <img
              class="login-type-icon"
              src="//s3b.pstatp.com/toutiao/resource/ntoutiao_web/static/image/login/svg/icon_weixin_pc_6251f7a.svg"
              alt=""
            />
            <span>微信</span>
          </div>
        </div>
        <!--登录/注册即表示你同意 用户协议 和 隐私条款 忘记密码-->
        <div
          style="margin-top:10px;font-size:14px;color:gray;text-align: center;"
          id="more-info"
        >
          <span class="terms"
            >登录/注册即表示你同意 <a>用户协议</a> 和
            <a>隐私条款</a>
            <a style="margin-left: 40px;">忘记密码</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api/index";

export default {
  data() {
    return {
      //等价于枚举
      loginTypeEnum: {
        password: 1,
        verificationCode: 2
      },
      passWordLogin: false,
      currentLoginType: null,
      accountOrEmail: "",
      password: "",
      mobile: "",
      vertifyCode: ""
    };
  },
  methods: {
    changeLoginType(loginTypeEnum) {
      this.passWordLogin = !this.passWordLogin;
      this.currentLoginType = loginTypeEnum;
      console.log("当前登陆方式为:" + loginTypeEnum);
    },
    login(paramA, parmB) {
      if (this.currentLoginType == this.loginTypeEnum.password) {
        console.log("当前为密码方式登陆,账号为" + paramA + "密码为" + parmB);
        //push 的内容必须是在路由文件中定义好的
        //push 可以是定义在routes.js中的路由对象
        this.$router.push({ path: "/dropdown" });
        api.requestLogin().then(data => {
          console.log("接口返回值" + data);
        });
      }
      if (this.currentLoginType == this.loginTypeEnum.verificationCode) {
        console.log(
          "当前为手机验证码方式登陆,手机号码为" + paramA + "验证码为" + parmB
        );
        //push 可以是定义在routes.js中的路由字符串
        this.$router.push("/dropdown");
      }
    }
  },
  // mounted:实例被挂载后调用
  mounted: function() {
    this.currentLoginType = this.passWordLogin
      ? this.loginTypeEnum.password
      : this.loginTypeEnum.verificationCode;
  }
};
</script>

<style scoped>
.center {
  /*流式布局,且在主轴和交叉轴方向同时居中*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-a {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.mobile-code-get {
  text-align: center;
  padding: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 80%;
  cursor: pointer;
}

.login_form {
  background-image: url("../../assets/白色背景图.png");
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  font-size: 16px;
}

.login-form-frame .form-main {
  background-color: #ffffff;
  /*设置元素的外边框圆角4px*/
  border-radius: 4px;
  flex: 1;
}

.form-header {
  font-size: 16px;
  line-height: 52px;
  border-bottom: #d9d9d9 1px solid;
  color: #000000;
}

.form_table {
  /*表示相对原来的位置向上移动160px*/
  position: relative;
  top: -160px;
}

.form-main {
  padding: 0 25px 25px;
}

.form-item {
  position: relative;
  margin-bottom: 16px;
  width: 100%;
  height: 46px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.form-body {
  padding: 20px 0;
}

.logo-wrap {
  display: inline-block;
  /*元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置*/
  position: absolute;
  top: 16px;
  left: 16px;
  width: 110px;
  height: 27px;
}

.logo-wrap img {
  width: 110px;
  height: 27px;
}

.slogan-wrap img {
  width: 520px;
  height: 360px;
}

.slogan-wrap {
  position: relative;
  text-align: center;
  margin: auto;
  top: 10px;
}

.i-divider-horizontal {
  color: #898989;
  margin-top: 25px;
  margin-bottom: 20px;
  background: transparent;
}

.i-divider-horizontal::before,
.i-divider-horizontal::after {
  position: relative;
  display: table-cell;
  width: 39%;
  border-top: 1px solid #898989;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
  content: "";
  box-sizing: border-box;
}

.mobile-code-get::before {
  content: "";
  width: 1px;
  height: 50%;
  top: 50%;
  bottom: 50%;
  margin: auto;
  background-color: #e8e8e8;
}

.get-code {
  text-align: center;
  color: #000000;
  margin: 0 8px;
}
</style>
