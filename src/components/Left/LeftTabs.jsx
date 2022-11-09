import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ViewTable from './ViewTable';


const LeftTabs = ({ data }) => {
  const [langs, setLangs] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [key, setKey] = useState('home');
  useEffect(() => {
    if (data) {
      setLangs([...new Set(data.map(item => item.language))]);
    }
  }, [data])

  useEffect(() => {
    if (langs) {
      setKey(langs[0]);
    }
  }, [langs])

  useEffect(() => {
    setFilterData(data.filter((item) => item.language === key));
  }, [key])

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      {
        langs ? langs.map((each, id) =>
          <Tab key={id} eventKey={each} title={each}>
            <ViewTable newdata={filterData} key={id} />
          </Tab>
        ) : <p>No Data</p>
      }
    </Tabs>
  );
}

export default LeftTabs;