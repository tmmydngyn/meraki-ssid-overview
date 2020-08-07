import '@elastic/eui/dist/eui_theme_light.css';
import React from 'react';

import {
  EuiButtonEmpty,
  EuiImage,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiSearchBar,
  EuiFlexItem,
} from '@elastic/eui';

import { SsidOverview } from './SsidOverview';
import ciscoMerakiLogo from '../images/cisco-meraki-white.svg'

export const ElasticUiApp = () => (
  <EuiPage>
    <EuiPageSideBar style={{backgroundColor: "#3D3E40"}}>
      <EuiImage url={ciscoMerakiLogo} alt="Cisco Meraki logo" size="s" style={{margin:"1rem"}} />
    </EuiPageSideBar>
    <EuiPageBody component="div">
      <EuiPageHeader>
        <EuiFlexItem grow={1}>
          <EuiPageHeaderSection>
              <EuiSearchBar box={ { placeholder: "Search for networks, users, devices, help articles..." } } className="" />
          </EuiPageHeaderSection>
        </EuiFlexItem>
        <EuiPageHeaderSection>
          <EuiButtonEmpty color="text"iconType="arrowDown" iconSide="right" size="s" style={ { marginLeft:"1rem" } }>
            miles@meraki.net
          </EuiButtonEmpty>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <SsidOverview />
    </EuiPageBody>
  </EuiPage>
);