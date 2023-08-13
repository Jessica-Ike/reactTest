import React, { useState } from "react";
import { Container, SpaceBetween, Button, AppLayout, BreadcrumbGroup, 
				 Cards, Link, Box, TextFilter, Header, Pagination, CollectionPreferences,
				 ButtonDropdown } from "@cloudscape-design/components";
import Navigation from "../Shared/Navigation";
import Topnavigation from "../Shared/TopNavigation";
import '../App.css';
import car from '../Shared/car.jpeg';
import nissan from '../Shared/nissan.jpeg';

//This page shows all cars avalaible using Cards component, will map all cars in cars database to print to user

export default class Cars extends React.Component {
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
	return (
		<>
		  <Cards
      cardDefinition={{
        header: item => (
          <Link href="#" fontSize="heading-m">
            {item.name} 
          </Link>
        ),
        sections: [
          {
            id: "image",
            content: () => (
              <div className="card-section-image">
								<img src ={nissan} alt="cars"></img>
							</div>
            )
          },
          {
            id: "description",
            header: "Description",
            content: item => item.description,
          },
          {
            id: "type",
            header: "Type",
            content: item => item.type,
            width: 50
          },
          {
            id: "size",
            header: "Size",
            content: item => item.size,
            width: 50
          }
        ]
      }}
      cardsPerRow={[
        { cards: 1 },
        { minWidth: 500, cards: 2 }
      ]}
      items={[
        {
          name: "Item 1",
          alt: "First",
          description: "This is the first item",
          type: "1A",
          size: "Small"
        },
        {
          name: "Item 2",
          alt: "Second",
          description: "This is the second item",
          type: "1B",
          size: "Large"
        },
        {
          name: "Item 3",
          alt: "Third",
          description: "This is the third item",
          type: "1A",
          size: "Large"
        },
        {
          name: "Item 4",
          alt: "Fourth",
          description: "This is the fourth item",
          type: "2A",
          size: "Small"
        },
        {
          name: "Item 5",
          alt: "Fifth",
          description: "This is the fifth item",
          type: "2A",
          size: "Large"
        },
        {
          name: "Item 6",
          alt: "Sixth",
          description: "This is the sixth item",
          type: "1A",
          size: "Small"
        }
      ]}
      trackBy="name"
      visibleSections={[
        "image",
        "description",
        "type",
        "size"
      ]}
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <b>No cars</b>
          </SpaceBetween>
        </Box>
      }
      filter={
        <TextFilter filteringPlaceholder="Find cars" />
      }
      header={
        <Header
          //counter={ }
        >
          All Cars
        </Header>
      }
      pagination={ //to Fix
        <Pagination currentPageIndex={1} pagesCount={2} />
      }
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 6,
            visibleContent: [
              "description",
              "type",
              "size"
            ]
          }}
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 6, label: "6 resources" },
              { value: 12, label: "12 resources" }
            ]
          }}
          visibleContentPreference={{
            title: "Select visible content",
            options: [
              {
                label: "Main distribution properties",
                options: [
                  {
                    id: "description",
                    label: "Description"
                  },
                  { id: "type", label: "Type" },
                  { id: "size", label: "Size" }
                ]
              }
            ]
          }}
        />
      }
    />
		</>
	);
};