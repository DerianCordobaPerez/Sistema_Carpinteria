import { Drawer, List } from "@mui/material";
import { Box } from "@mui/system";
import MenuItem from "./MenuItem";

export default function Menu(props) {

    const { open, toogle } = props;

    const menu = [
        {
            text: 'Inicio',
            route: '/'
        },
        {
            text: 'Test',
            route: '/test'
        }
    ]

    return (
        <Drawer 
            anchor="left" 
            open={open}
            onClose={toogle}
        >
            <Box
                sx={{width: 250}}
                role="presentation"
                onClick={toogle}
            >
                <List>
                    {menu.map((item, key) =>(
                        <MenuItem {...item} key={key}/>
                    ))}                
                </List>
            </Box>
        </Drawer>
    );
}
