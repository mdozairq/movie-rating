import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    dataIndex: 'url',
    render: (url) => <><img src={url} alt={'ab'} style={{
      width: '45px',
      aspectRatio: 'auto 45 / 67',
      height: '67px'
    }} />&ensp;<p>{ }</p></>,
    width: '10%',
  },
  {
    title: 'Rank & Tiltle',
    dataIndex: 'title',
    width: '60%',
  },
  {
    title: 'Rating',
    dataIndex: 'ratings',
    sorter: (a, b) => a.ratings - b.ratings,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const ViewTable = ({ newdata }) => {
  return (<Table columns={columns} dataSource={newdata} onChange={onChange} />);
}

export default ViewTable;