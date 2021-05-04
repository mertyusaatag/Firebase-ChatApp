import React from 'react'
import {Form,Segment,Button,Grid,Message} from "semantic-ui-react"
import {Link} from "react-router-dom"
import styles from "./login.module.css";

const Login = () => {
    const handleSubmit = event =>{
        event.preventDefault();
    }



    return (
        <div>
            
           <Grid textAlign="center" 
           verticalAlign="middle" 
           className={styles.container}>
               <Grid.Column style={{maxWidth:450}}>
                   <h1 className={styles.formHeader}>Chat App</h1>

                   <Form size="large" className={styles.form} onSubmit={handleSubmit}>

                       <Segment>
                           <Form.Input fluid icon="mail" iconPosition="left" name="email" placeholder="Email" type="email">   
                           </Form.Input>,
                           <Form.Input fluid icon="lock" iconPosition="left" name="password" placeholder="Password" type="password">   
                           </Form.Input>
                           

                           <Button color="grey" fluid size="large">Giriş Yap</Button>
                       </Segment>
                       <Message>
                           Henüz üye değil misin ? <Link to="/signup">Hesap Oluştur</Link>
                       </Message>
                   </Form>

               </Grid.Column>




           </Grid>
        </div>
    )
}

export default Login
