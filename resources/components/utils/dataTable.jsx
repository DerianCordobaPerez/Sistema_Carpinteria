import {
    Table,
    TableBody,
    TableHead,
    TableContainer,
    TableCell,
    TableRow,
    Divider,
    Typography,
    Button, 
    Stack
} from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "./../../libs/httpPetitions";

//TODO:: Atomizar este componente, es demasiado grande.
export default function dataTable(props){
    const {
        title, 
        headers, 
        visible,
        route
    } = props;   

    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(async ()=>{
        const {data} = await getData(route);
        setRows(data);
    }, []);

    return(
        <>
            <Typography variant="h4">
                {title}
            </Typography>
            <Divider />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((item, key)=>(
                                <TableCell key={key}>
                                    {item}
                                </TableCell>
                            ))}
                            <TableCell>
                                Acciones        
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((item, keyItem)=>(
                            <TableRow key={keyItem}>
                                {visible.map((prop, key)=>(
                                    <TableCell key={key}>
                                        {item[prop]}
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <Stack
                                        direction='row'
                                        spacing={2}
                                    >
                                        <Button 
                                            variant="contained"
                                            color="error"
                                        >
                                            Eliminar
                                        </Button>
                                     <Button 
                                        variant="contained"
                                        >
                                        Visualizar
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}