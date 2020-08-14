import React from 'react';

import AuxComp from '../hoc/AuxComp';
import classes from '../css/Layout.css';


const Layout = (props) => (
  <AuxComp>
    <div className={classes.LayoutBar}>
        <div className={classes.LayoutLogo}>Logo</div>
        <button>Toolbar</button>
        <button>SideDrawer</button>
        <button>Backdrop</button>
    </div>
    <hr/>
    <main className={classes.Content}>{props.children}</main>
  </AuxComp>
);

export default Layout;
