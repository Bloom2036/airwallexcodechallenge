import React, { Component } from 'react'
import { Button, Form, Input } from 'antd';

export default class RequestFormCmp extends Component {
    formRef = React.createRef();
    submitForm = (values) => {
        this.props.handleSubmit(values);
    };

    render() {
        return (
            <>
                <div className="modal-title">Request an invite</div>
                <div className="line"></div>
                <Form ref={this.formRef} name="basic" onFinish={this.submitForm}>
                    <div className="main-content">
                        <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name!' }, { min: 3, type: 'string', message: 'Full Name needs to be at least 3 characters!' }]}>
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item name="confirm" dependencies={['email']}
                            rules={[{ required: true, message: 'Please confirm your email!' },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('email') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two emails that you entered do not match!');
                                },
                            }),
                            ]}
                        >
                            <Input placeholder="Confirm email" />
                        </Form.Item>
                    </div>
                    <Button loading={this.props.loading} htmlType="submit">Send</Button>
                    {this.props.errorMsg && <div className="error-message">{this.props.errorMsg}</div>}
                </Form>
            </>
        )
    }
}
