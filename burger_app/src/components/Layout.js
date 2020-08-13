import React from 'react';

import AuxComp from '../hoc/AuxComp';
import classes from '../css/Layout.css';


const Layout = (props) => (
  <AuxComp>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </AuxComp>
);

export default Layout;
