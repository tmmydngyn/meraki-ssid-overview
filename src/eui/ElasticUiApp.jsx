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
        <EuiPageHeaderSection>
          <EuiSearchBar />
        </EuiPageHeaderSection>
        <EuiPageHeaderSection>
          <EuiButtonEmpty color="text"iconType="arrowDown" iconSide="right" size="s">
            miles@meraki.net
          </EuiButtonEmpty>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <SsidOverview />
    </EuiPageBody>
  </EuiPage>
);