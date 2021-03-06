import React from 'react';
import Wrapper from '../../hoc/wrapper';

const Layout = (props) => (
	<Wrapper>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main>
			{props.children}
		</main>
	</Wrapper>
);

export default Layout;