import React, {useState, useEffect} from 'react';
import { List } from 'antd';
import request from '../utils/agent';

import './sidebar.css';

const useFetch = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const fetchData = async () => {
    try {
      const data = await request({method: 'get', url});
      setData(data);
      setLoading(false);
    } catch {
      setLoading(false);
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

function Sidebar() {
  const { data, loading } = useFetch('/api/v2/sidebar');

  return (
    <React.Fragment>
      {!loading && data && (
        data.data.organizations.map(item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={item.name}
              description={item.role}
            />
          </List.Item>
        ))
      )}
    </React.Fragment>
  )
}

export default Sidebar;