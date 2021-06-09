import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class Contact extends Component {
    
    
    
    
    render() {
        return (
            <div className="contact-section">
                <div class="card" style={{margin: '30px', padding: '20px'}}>
                    <Form method="POST" action="#">
                        <div>
                            <h2 class="text-center">Contact</h2>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="contactname" placeholder="Enter Name" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="contactemail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="contactemail" placeholder="Enter Email"/>
                        </div>
                        <div class="mb-3">
                            <label for="contactmessage" class="form-label">Message</label>
                            <textarea class="form-control" id="contactmessage" rows="6"></textarea>
                        </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                    </Form>
                        </div>
            </div>
        )
    }
}
