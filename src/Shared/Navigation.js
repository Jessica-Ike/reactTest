import React from 'react';
import SideNavigation from '@cloudscape-design/components/side-navigation';

const items = [
    { type: 'link', text: 'All Cars', href: '/' },
    { type: 'link', text: 'Dashboard', href: '/' },
];

export default function Navigation() {
  return (
    <>
      <SideNavigation
        header={{ href: '/', text: 'Cars' }}
        items={items}
      />
    </>
  );
}