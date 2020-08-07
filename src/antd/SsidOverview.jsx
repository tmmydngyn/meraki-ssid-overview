import React from "react";
import { Button, Col, Input, Row, Select, Table, Tag, Typography } from 'antd';
import { tags, ssids } from '../data';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Status",
    dataIndex: "isEnabled",
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
    title: "Band",
    dataIndex: "band",
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
    title: "Encryption",
    dataIndex: "encryption",
  },
  {
    title: "VLAN",
    dataIndex: "vlan",
  },
  {
    title: "Bandwidth limit",
    dataIndex: "bandwidthLimit",
  },
  {
    title: "AP tags",
    dataIndex: "tags",
    render: tagIds => (
      <span>
        { tagIds.map(tagId => <Tag color="blue" key={tagId}>{ tags[tagId].name }</Tag>) }
      </span>
    ),
  },
  {
    title: "Actions",
  },
];

export const SsidOverview = () => {
  const filterSelect = (<Select placeholder="Filter">
    <Select.Option>keke</Select.Option>
  </Select>);
  return (
    <div style={{ margin: "2rem" }}>
      <Row gutter={[16, 16]} align="middle">
        <Col span={22}>
          <Typography.Title>SSID overview</Typography.Title>
        </Col>
        <Col span={2}>
          <Button type="primary" className=".btn">Create new SSID</Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={23}>
          <Input.Search addonBefore={filterSelect} placeholder="Search by SSID, VLAN, or AP tag" />
        </Col>
        <Col span={1}>
          <Button type="default">Export</Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Table columns={columns} dataSource={Object.values(ssids)} />
        </Col>
      </Row>
    </div>
  );
};

