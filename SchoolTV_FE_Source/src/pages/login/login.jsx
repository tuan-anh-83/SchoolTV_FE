import { Button, Form, Input } from "antd";
import { GoogleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import "./login.scss";

function Login() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login_background">
       <div className="login_form">
        <h1>Chào Mừng Trở Lại</h1>
        <a className="login_a1">Đăng nhập để tiếp tục hình trình của bạn</a>

        <div className="login_google">
        <Button
          className="google_btn"
          type="default"
          icon={<GoogleOutlined className="google_icon" />}
        >
          Đăng nhập với Google
        </Button>
        </div>

        <div className="divider">
          <span>hoặc</span>
        </div>

        <div className="login_body">
          <Form
            name="login"
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Địa chỉ Email"
              name="email"
              rules=
              {[
                { 
                required: true, 
                message: 'Vui lòng nhập địa chỉ Email !' 
                },
                {
                  type: 'email',  
                  message: 'Email không hợp lệ!'  
                }
              ]}
            >
              <Input placeholder="Nhập email của bạn"/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules=
              {[{ 
                required: true, 
                message: 'Vui lòng nhập mật khẩu !' 
              }]}
            >
              <Input placeholder="Nhập mật khẩu của bạn"/>
            </Form.Item>

            <Form.Item>
              <Link to="/forget-password" className="login_forgot_pw">Quên mật khẩu ?</Link>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login_submit" block>
                Đăng Nhập
              </Button>
            </Form.Item> 
          </Form>
        </div>
            
        <div className="login_register">
          Bạn chưa có tài khoản ?
        </div>

        <div className="login_1">
          <Link to="/register" className="login_link1">Đăng ký ngay </Link>
        </div>     

      </div> 
    </div>
  );
}

export default Login;
