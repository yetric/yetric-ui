import Button from "antd/lib/button";
import Checkbox from "antd/lib/checkbox";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import * as React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component<any, any> {
    public static handleSubmit(e: any) {
        e.preventDefault();
        alert("sfsdf");
    }

    public render() {
        return (
            <Form className="login-form">
                <Form.Item>
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item>
                    <Input type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                    <Link className="login-form-forgot" to="/forgot-pwd">
                        Forgot password
                    </Link>
                    <div style={{ marginTop: "16px" }}>
                        <Button htmlType="submit" className="login-form-button" style={{ marginRight: "12px" }}>
                            Log in
                        </Button>
                        Or <Link to="/signup">register now!</Link>
                    </div>
                </Form.Item>
            </Form>
        );
    }
}
