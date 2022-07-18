import React from "react";
import {Form, Input, TextArea } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';



// reactstrap components
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardTitle,
    Container,
    Row,
} from "reactstrap";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

// core components

const SERVICE_ID = "service_bqot0b8";
const TEMPLATE_ID = "template_kddcgzh";
const USER_ID = "Q2iqInByuTYbBsj5U";

const SignUp = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success', title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error', title: 'Ooops, something went wrong', text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <>
            <br/>
            <br/>
            <br/>
            <h2 className="title text-center" id="getaquote"> - Get a Quote - </h2>
            <div
                className="section section-signup"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/bg11.jpg").default + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    minHeight: "700px",
                }}
            >
                <Container>
                    <Row>
                        <Card className="card-signup" data-background-color="green">
                            <Form action="" className="form" method="" onSubmit={handleOnSubmit}>
                                <CardHeader className="text-center">
                                    <CardTitle className="title-up" tag="h3">
                                        Get started!
                                    </CardTitle>
                                </CardHeader>
                                    <Form.Field
                                        className="text-center card-body"
                                        id='form-input-control-email'
                                        control={Input}
                                        text='Email'
                                        name='user_email'
                                        placeholder='Email…'
                                        required
                                        icon='mail'
                                        iconPosition='left'
                                    />
                                <Form.Field
                                    className="text-center card-body"
                                    id='form-input-control-last-name'
                                    control={Input}
                                    name='user_name'
                                    placeholder='First, Last…'
                                    required
                                    icon='user circle'
                                    iconPosition='left'
                                />
                                <Form.Field
                                    className="text-center card-body"
                                    control={Input}
                                    name='user_location'
                                    placeholder='City, State…'
                                    required
                                    icon='location arrow'
                                    iconPosition='left'
                                />
                                <Form.Field
                                    className="text-center card-body"
                                    control={Input}
                                    name='user_budget'
                                    placeholder='Budget…'
                                    required
                                    icon='dollar sign'
                                    iconPosition='left'
                                />
                                <Form.Field
                                    className="text-center card-body"
                                    id='form-textarea-control-opinion'
                                    control={TextArea}
                                    name='user_message'
                                    placeholder='Message…'
                                />
                                <CardFooter className="text-center">
                                    <Button type='submit' color="warning">Submit</Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SignUp;