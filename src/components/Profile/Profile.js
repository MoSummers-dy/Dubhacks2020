import React, { Component } from 'react';
import './Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "Harry the husky",
			preferredName: "Harry",
			birthday: "2000-1-1",
			phone: "123-456-7890",
			address: "472 1st Ave N",
			symptoms: "I can't sleep at night"
		}

	}

	changeName = (event) => {
		let name = prompt("Please enter new name")
		if (name == null || name == "") return
    this.setState({
			name: name
    });
	};

	changePreferredName = (event) => {
		let name = prompt("Please enter new preferred name")
		if (name == null || name == "") return
    this.setState({
			preferredName: name
    });
	};

	changeBirthday = (event) => {
		let day = prompt("Please enter new birthday")
		if (day == null || day == "") return
    this.setState({
			birthday: day
    });
	};

	changePhone = (event) => {
		let phone = prompt("Please enter new name")
		if (phone == null || phone == "") return
    this.setState({
			phone: phone
    });
	};

	changeAddress = (event) => {
		let adr = prompt("Please enter new name")
		if (adr == null || adr == "") return
    this.setState({
			address: adr
    });
	};

	changeSymptoms = (event) => {
		let description = prompt("Please enter new name")
		if (description == null || description == "") return
    this.setState({
			symptoms: description
    });
	};


	render() {
		return (
			<div>
					<h2 class="m-5" style={{
						textAlign: 'center'
				}}>User Profile</h2>
				<Container>
					<div class="row justify-content-between">
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Name</Card.Title>
								<Card.Text>
									{this.state.name}
								</Card.Text>
								<Card.Link onClick={this.changeName}>Change name</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Preferred name</Card.Title>
								<Card.Text>
									{this.state.preferredName}
								</Card.Text>
								<Card.Link onClick={this.changePreferredName}>Change nickname</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Birthday</Card.Title>
								<Card.Text>
									{this.state.birthday}
								</Card.Text>
								<Card.Link onClick={this.changeBirthday}>Change birthday</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div class="row justify-content-between">
						<h1>  </h1>
					</div>
					<div class="row justify-content-between" style={{marginTop: '10pt'}}>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Phone number</Card.Title>
								<Card.Text>
									{this.state.phone}
								</Card.Text>
								<Card.Link onClick={this.changePhone}>Change phone number</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Address</Card.Title>
								<Card.Text>
									{this.state.address}
								</Card.Text>
								<Card.Link onClick={this.changeAddress}>Change address</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Symptoms</Card.Title>
								<Card.Text>
									{this.state.symptoms}
								</Card.Text>
								<Card.Link onClick={this.changeSymptoms}>Change symptoms</Card.Link>
							</Card.Body>
						</Card>
					</div>
				</Container>
				<div class="row justify-content-between" style={{marginTop: '10pt'}}>
				</div>
				<button class="btn btn-danger" style={{marginLeft: '80%', marginTop: "40px"}}>Sign out</button>
			</div>
		)
	}
}

export default Profile