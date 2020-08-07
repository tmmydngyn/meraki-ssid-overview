import React from 'react';
import { tags, ssids } from '../data';
import {
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiSearchBar,
  EuiFlexItem,
} from '@elastic/eui';

const columns = [
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Status",
    field: "isEnabled",
    render: isEnabled => {
      const circleStyling = {
        height: ".7rem",
        width: ".7rem",
        borderRadius: "50%",
        display: "inline-block",
      };
      if (isEnabled) {
        return <span><span style={{...circleStyling, backgroundColor: "green"}} /> Enabled</span>;
      } else {
        return <span><span style={{...circleStyling, backgroundColor: "red"}} /> Disabled</span>;
      }
    },
  },
  {
    name: "Band",
    field: "band",
    render: bands => {
      switch (bands) {
        case 1:
          return "2.4G";
        case 2:
          return "5G";
        case 3:
          return "2.4G and 5G";
        default:
          return "-";
      }
    }
  },
  {
    name: "Encryption",
    field: "encryption",
  },
  {
    name: "VLAN",
    field: "vlan",
  },
  {
    name: "Bandwidth limit",
    field: "bandwidthLimit",
  },
  {
    name: "AP tags",
    field: "tags",
    render: tagIds => (
      <span>
        { tagIds.map(tagId => <EuiBadge key={tagId}>{ tags[tagId].name }</EuiBadge>) }
      </span>
    ),
  },
  {
    name: "Actions",
    render: () => <EuiButtonEmpty iconType="arrowDown" iconSide="right" size="s">Actions</EuiButtonEmpty>
  },
];

export const SsidOverview = () => {
  return (
    <EuiPageContent>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle>
            <h2>SSID Overview</h2>
          </EuiTitle>
        </EuiPageContentHeaderSection>
        <EuiPageContentHeaderSection>
          <EuiButton fill>Create new SSID</EuiButton>
        </EuiPageContentHeaderSection>
      </EuiPageContentHeader>
      <EuiPageContentBody>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiSearchBar />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton>Export</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiBasicTable
          items={ Object.values(ssids) }
          columns={ columns }
        />
      </EuiPageContentBody>
    </EuiPageContent>
  );
};