import React, { Component } from 'react'
import './ContainerCmp.scss';
import { Button, Modal, Form, Input } from 'antd';
import SuccessCmp from 'components/SuccessCmp';
import RequestFormCmp from 'components/RequestFormCmp';
import { emailInvitations } from 'services/api';

export default class ContainerCmp extends Component {
	formRef = React.createRef();
	state = {
		loading: false,
		visible: false,
		isForm: true,
		errorMsg: ''
	};

	showModal = () => {
		this.setState({ visible: true, isForm: true });
	};

	closeModal = () => {
		this.setState({ visible: false });
	};

	handleSubmit = (values) => {
		this.setState({ loading: true });
		emailInvitations({
			name: values.name,
			email: values.email
		}).then((res) => {
			this.setState({ loading: false, errorMsg: '', isForm: false });
		}).catch( error => {
			this.setState({ loading: false, errorMsg: error && error.response && error.response.data && error.response.data.errorMessage });
		})
	};

	render() {
		let { visible, loading, isForm, errorMsg } = this.state;
		return (
			<>
				<div className="content-wrapper">
					<p className="header">A better way <br /> to enjoy every day.</p>
					<p className="sub-title">Be the first to know when we launch.</p>
					<Button className="request-btn" onClick={this.showModal}>Request an invite</Button>
				</div>
				<Modal centered width={400} visible={visible} onCancel={this.closeModal} footer={null}>
					<div className="modal-container">
						{
							isForm ? 
							<RequestFormCmp errorMsg={errorMsg} loading={loading} handleSubmit={this.handleSubmit}></RequestFormCmp>
							:
							<SuccessCmp>
								<Button onClick={this.closeModal}>OK</Button>
							</SuccessCmp>
						}
					</div>
				</Modal>
			</>
		)
	}
} 
