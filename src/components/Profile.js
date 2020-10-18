import React, { Component } from 'react';
import '../components/Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
				name: null,
				age: null,
				birthday: null,
				symptoms: null
		}
		this.fetchData()
	}

	fetchData() {
		// support static data only at phase 1
		this.state.name = "Husky"
		this.state.age = 20
		this.state.birthday = "2000-1-1"
		this.state.symptoms = "Insomnia"
	}

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
									Harry the Husky
								</Card.Text>
								<Card.Link href="#">Change name</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Preferred name</Card.Title>
								<Card.Text>
									Harry
								</Card.Text>
								<Card.Link href="#">Change nickname</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Birthday</Card.Title>
								<Card.Text>
									2000-1-1
								</Card.Text>
								<Card.Link href="#">Change birthday</Card.Link>
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
									123-456-7890
								</Card.Text>
								<Card.Link href="#">Change phone number</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Address</Card.Title>
								<Card.Text>
									123 1st Street
								</Card.Text>
								<Card.Link href="#">Change address</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Symptoms</Card.Title>
								<Card.Text>
									I can't sleep at night
								</Card.Text>
								<Card.Link href="#">Change symptoms</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div class="row justify-content-between">
						<h1>  </h1>
					</div>
					<div class="row justify-content-between" style={{marginTop: '10pt'}}>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Add new section</Card.Title>
								<Card.Text>
									Add new description
								</Card.Text>
								<Card.Link href="#">Change information</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Add new section</Card.Title>
								<Card.Text>
									Add new description
								</Card.Text>
								<Card.Link href="#">Change information</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Add new section</Card.Title>
								<Card.Text>
									Add new description
								</Card.Text>
								<Card.Link href="#">Change information</Card.Link>
							</Card.Body>
						</Card>
					</div>
				</Container>
				<div class="row justify-content-between" style={{marginTop: '10pt'}}>
				</div>
				<Button variant="danger" style={{marginLeft: '70%'}}>Sign out</Button>
			</div>
		)
	}
}

export default Profile