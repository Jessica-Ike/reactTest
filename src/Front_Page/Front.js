import React, { useState } from "react";
import { Container, SpaceBetween, Input, Button, AppLayout, BreadcrumbGroup } from "@cloudscape-design/components";
import Navigation from "../Shared/Navigation";
import Topnavigation from "../Shared/TopNavigation";
import '../App.css';

//This page will be the welcome page, where viewers can see some important buisness related stuff
//The other page, cars, will show users all cars that are avaliable
//The admin page will allow the admin to add edit or delete cars in the system 

export default class Front extends React.Component {
	render() {
		return (
			<>
				<div>
					{<Topnavigation />}
				</div>
				<AppLayout
					headerSelector="#top-nav"
					ariaLabels={{
						navigation: 'Navigation drawer',
						navigationClose: 'Close navigation drawer',
						navigationToggle: 'Open navigation drawer',
					}}
					navigation={<Navigation />}
					breadcrumbs={<Breadcrumbs />}
					content={<Content />}
					toolsHide={true}
				/>
			</>
		);
	}

}

const Breadcrumbs = () => (
	<BreadcrumbGroup
		items={[
			{ text: 'Home', href: '/' },
		]}
	/>
);


const Content = () => {
	const [value, setValue] = useState("");

	const onClickButton = () => {
		alert(value);
	}

	return (
		<>
			<SpaceBetween size="m">
				<Container>
					<SpaceBetween size="s">
						<span>Start editing to see some magic happen</span>
						<Input
							value={value}
							onChange={(e) => setValue(e.detail.value)}
						/>
						<Button variant="primary" onClick={onClickButton}>Submit</Button>
					</SpaceBetween>
				</Container>
			</SpaceBetween>
		</>
	);
};