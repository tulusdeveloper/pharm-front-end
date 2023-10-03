import React from "react";
import 'adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css';
import 'adminbsb-materialdesign/css/style.css';
import 'adminbsb-materialdesign/plugins/node-waves/waves.css';
import 'adminbsb-materialdesign/plugins/animate-css/animate.css';

class Login extends React.Component {
    render() {
        return (
            <div class="login-box">
                <div class="logo">
                    <button class="btn btn-link">Admin<b>BSB</b></button>
                    <small>Admin BootStrap Based - Material Design</small>
                </div>
                <div class="card">
                    <div class="body">
                        <form id="sign_in" method="POST">
                            <div class="msg">Sign in to start your session</div>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="material-icons">person</i>
                                </span>
                                <div class="form-line">
                                    <input type="text" class="form-control" name="username" placeholder="Username" required autofocus/>
                                </div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="material-icons">lock</i>
                                </span>
                                <div class="form-line">
                                    <input type="password" class="form-control" name="password" placeholder="Password" required/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-8 p-t-5">
                                    <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-pink"/>
                                    <label for="rememberme">Remember Me</label>
                                </div>
                                <div class="col-xs-4">
                                    <button class="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                                </div>
                            </div>
                            <div class="row m-t-15 m-b--20">
                                <div class="col-xs-6">
                                    <button class="btn btn-link">Register Now!</button>
                                </div>
                                <div class="col-xs-6 align-right">
                                    <button class="btn btn-link">Forgot Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
