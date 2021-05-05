import React, { useEffect,useState } from "react";
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {useFirebase} from "react-redux-firebase" ;
import styles from "./login.module.css";
import { useForm } from "react-hook-form";

const Login = () => {

    const firebase = useFirebase();
    const [fbErrors, setFbErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = ({ email, password }, e) => {
        setSubmitting(true);
        setFbErrors([]);
    
        firebase
          .login({
            email,
            password,
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            setFbErrors([{ message: error.message }]);
          })
          .finally(() => {
            setSubmitting(false);
          });
      };

      const displayErrors = () =>
    fbErrors.map((error, index) => <p key={index}>{error.message}</p>);

  const { register, errors, handleSubmit, setValue } = useForm();

  useEffect(() => {
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

          <Form
            size="large"
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Segment>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                name="email"
                error={errors.email ? true : false}
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                placeholder="Email"
                type="email"
              ></Form.Input>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                name="password"
                error={errors.password ? true : false}
                placeholder="Password"
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
                type="password"
              ></Form.Input>

              <Button color="grey" fluid size="large" disabled={submitting}>
                Giriş Yap
              </Button>
            </Segment>
            </Form>
            {fbErrors.length > 0 && <Message error> {displayErrors()}</Message>}
            <Message>
              Henüz üye değil misin ? <Link to="/signup">Hesap Oluştur</Link>
            </Message>
         
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
