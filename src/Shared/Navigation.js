import React from 'react';
import SideNavigation from '@cloudscape-design/components/side-navigation';

const items = [
    { type: 'link', text: 'Home', href: '/' },
    { type: 'link', text: 'Cars', href: '/cars' },
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