import {
    ListItem,
    //    ListemItemIcon,
    ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function MenuItem(prop) {
    const { text, route } = prop;

    return (
        <Link to={route}>
            <ListItem button>
                <ListItemText primary={text} />
            </ListItem>
        </Link>
    );
}
