import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ViewTable from './ViewTable';


const LeftTabs = ({ data }) => {
  const [langs, setLangs] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [key, setKey] = useState();
  useEffect(() => {
    console.log("data Effect", data);
    if (data) {
      setLangs([...new Set(data.map(item => item.language))]);
      if (langs)
        setKey(langs[0]);
    }
  }, [data])


  useEffect(() => {
    console.log("i am called", key);
    setFilterData(data.filter((item) => item.language === key));
    console.log("lf here: ", key, filterData);
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