import { Outlet } from "react-router-dom";

import { Container } from "@mui/material";
import AccountMenu from "../components/AccountMenu";
import classes from './RootLayout.module.css';

const RootLayoutPage = (props) => {
  return (
    <div className={classes.background}>
      <Container maxWidth="sm">
        <AccountMenu />
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayoutPage;