import { TextField, Box, Grid, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../libs/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const submit = async (e)=>{
        e.preventDefault();
        try{
            const { data } = await axios.post('/api/login', {
                email, 
                password
            });
            login(data);
            history('/');
        }catch(error){
            console.log(error);
        }
    }

    return (
        <Grid
            container
            spacing={0}
            className="h-full"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={8} md={4}>
                <Box 
                padding={3} 
                component="form"
                onSubmit={submit}
                >
                    <TextField
                        fullWidth
                        margin={"normal"}
                        label="Correo Electronico"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin={"normal"}
                        label="Contraseña"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                     fullWidth
                     variant="contained"
                     type="submit"
                    >
                        Entrar
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}
