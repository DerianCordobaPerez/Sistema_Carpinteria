import Layout from "../../layouts/Layout";
import { Grid } from "@mui/material";
import DataTable from "../../components/utils/dataTable";

export default function list(){
    
    const config = {
        title: 'Proveedores',
        route: 'suppliers',
        headers: [
            'Nombre'
        ],
        visible: [
            'name'
        ]
    }
    
    return(
        <Layout>
            <Grid
                container
            >
                <Grid item 
                    md={8}
                >
                    <DataTable {...config}/>
                </Grid>
            </Grid>
        </Layout>
    );
}