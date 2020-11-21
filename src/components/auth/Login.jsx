import React from 'react';

class Login extends React.Component {
	state = {

	}

	handleSubmit=()=> {
		this.props.history.push("/home");
	}

	render() {
		return (
			<div className="container-fluid py-5">
				<div className="row">
					<div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
						<div className="card">
							<div className="card-header">Login</div>
							<div className="card-body">
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<input type="text" placeholder="username" className="form-control" />
									</div>
									<div className="form-group">
										<input type="password" placeholder="password" className="form-control" />
									</div>
									<button type="submit" className="btn btn-primary btn-block">Submit</button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
				</div>
			</div>
		);
	}
}

export default Login;