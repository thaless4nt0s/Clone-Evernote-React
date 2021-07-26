import React, { Fragment, useState } from 'react';
import Header from '../../../components/header'
import LogoImage from '../../../assets/images/logo.png'
import "../../../styles/auth.scss"
import { Button, Field, Control, Input, Column, Section, Help, Label, Container, Card, Title } from "rbx";
import { Redirect } from "react-router-dom";
import UserService from '../../../services/users'

const UpdateForm = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)



    return (
        <Fragment>
            <Column.Group centered>
                <form>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Name:</Label>
                            <Control>
                                <Input
                                    type="name"
                                    required
                                    name="name"

                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    required
                                    name="password"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile" >
                                    <Column offset={1}>
                                        <Button color="custom-purple" outlined>Register</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color='danger'>Email or Password Invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default UpdateForm