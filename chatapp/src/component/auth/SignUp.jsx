import React, { useEffect } from "react";
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./signup.module.css";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const onSubmit = (data, e) => {
    console.log(data);
  };

  const { register, errors, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register({ name: "username" }, { required: true });
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true, minLength: 6 });
  }, []);

  return (
    <div>
      <Grid
        textAlign="center"
        verticalAlign="middle"
        className={styles.container}
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <h1 className={styles.formHeader}>Chat App</h1>

          <Form size="large" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                name="username"
                onChange={(event,{name,value})=> {
                    setValue(name,value)
                }}
                placeholder="Username"
                error={errors.username ? true : false}
                type="text"
              ></Form.Input>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                name="email"
                onChange={(event,{name,value})=> {
                    setValue(name,value)
                }}
                placeholder="Email"
                type="email"
                error={errors.email ? true : false}
              ></Form.Input>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                name="password"
                onChange={(event,{name,value})=> {
                    setValue(name,value)
                }}
                placeholder="Password"
                type="password"
                error={errors.password ? true  : false}
              ></Form.Input>

              <Button color="grey" fluid size="large">
                Kayıt Ol !
              </Button>
            </Segment>
            <Message>
              Zaten bir hesabın var mı? <Link to="/login">Giriş yap</Link>
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SignUp;
