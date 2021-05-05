import React,{useEffect} from 'react'
import {Form,Segment,Button,Grid,Message} from "semantic-ui-react"
import {Link} from "react-router-dom"
import styles from "./login.module.css";
import {useForm} from "react-hook-form"

const Login = () => {
    const onSubmit = (data,e) =>{
        console.log(data);
    }

    const { register, errors, handleSubmit, setValue } = useForm();

    useEffect(() => {
      register({ name: "email" }, { required: true });
      register({ name: "password" }, { required: true, minLength: 6 });
    }, []);


    return (
        <div>
            
           <Grid textAlign="center" 
           verticalAlign="middle" 
           className={styles.container}>
               <Grid.Column style={{maxWidth:450}}>
                   <h1 className={styles.formHeader}>Chat App</h1>
                   

                   <Form size="large" className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                       <Segment>
                           <Form.Input 
                           fluid icon="mail" 
                           iconPosition="left" 
                           name="email" 
                           error={errors.email ? true : false}
                           onChange={(event,{name,value})=> {
                               setValue(name,value)
                           }}
                           placeholder="Email" 
                           type="email">   
                           </Form.Input>
                           <Form.Input 
                           fluid icon="lock" 
                           iconPosition="left" 
                           name="password"
                           error={errors.password ? true : false}
                           placeholder="Password" 
                           onChange={(event,{name,value})=> {
                            setValue(name,value)
                            
                        }}
                           type="password">
                            
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
