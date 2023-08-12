import React, { useState } from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";
import AppLayout from '@cloudscape-design/components/app-layout';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import Navigation from "../Shared/Navigation";
import Topnavigation from "../Shared/TopNavigation";
import '../App.css';

export default class Front extends React.Component{
  render(){
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
	return(
		<>
			<SpaceBetween size="m">
				<Container>
					<SpaceBetween size="s">
						<span>Start editing to see some magic happen</span>
						<Input
							value={value}
							onChange={(event) => setValue(event.detail.value)}
						/>
						<Button variant="primary">Click me</Button>
					</SpaceBetween>
				</Container>
			</SpaceBetween>
		</>
	);
};