import React, {Component} from 'react'

import ShiwuHeader from '../../components/shiwu-header/shiwu-header'

import './login.styl'

export default class Login extends Component {
  state = {
    loginType: 0 // 0短信登录，1密码登录
  };

  isLogin = (loginType) => {
    console.log(loginType);
    this.setState({
      loginType: loginType
    })
  };

  render() {
    const {loginType} = this.state;

    return (
      <div>
        <ShiwuHeader/>
        {/*on表示显示，off表示关闭*/}
        <section className="loginContainer">
          <div className="loginInner">
            <div className="login_header">
              <div className="login_header_title">
                <a className={loginType === 0?'on':''}
                   onClick={() => this.isLogin(0)}>短信登录</a>
                <a className={loginType === 1?'on':''}
                   onClick={() => this.isLogin(1)}>密码登录</a>
              </div>
            </div>
            <div className="login_content">
              <form>
                <div style={{display: loginType === 0?'block':'none'}}>
                  <section className="login_message">
                    <input type="tel"  placeholder="手机号"/>
                    <button disabled="disabled" className="get_verification">获取验证码</button>
                  </section>
                  <section className="login_verification">
                    <input type="tel"  placeholder="验证码"/>
                  </section>
                  <section className="login_hint">
                    温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
                    <a>《用户服务协议》</a>
                  </section>
                </div>

                <div style={{display: loginType === 1?'block':'none'}}>
                  <section>
                    <section className="login_message">
                      <input type="tel" placeholder="手机/邮箱/用户名"/>
                    </section>
                    <section className="login_verification">
                      <input type="password"  placeholder="密码"/>
                    </section>
                  </section>
                </div>
                <button className="login_submit">登录</button>
              </form>
              <a className="about_us">关于我们</a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}