import { TextField, Box, Grid, Button } from "@mui/material";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <Grid
            container
            spacing={0}
            className="h-full"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={8}>
                <Box 
                padding={3} 
                component="form"
                onSubmit={submit}
                >
                    <TextField
                        label="Correo Electronico"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
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
