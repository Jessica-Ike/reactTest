import React from 'react';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import '../App.css';

export default function Topnavigation() {
  return (
    <>
      <div id="top-nav">
        <TopNavigation
          identity={{
            title: 'Cars',
            href: '/',
          }}
          i18nStrings={{
            overflowMenuTriggerText: 'More',
            overflowMenuTitleText: 'All',
          }}
        />
      </div>
    </>
  );
}