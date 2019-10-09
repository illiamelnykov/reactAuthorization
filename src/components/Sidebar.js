import React, {useState, useEffect} from 'react';
import request from '../utils/agent';

const useFetch = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const fetchData = async () => {
    try {
      const data = await request({method: 'get', url, data: null});
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

function Sidebar(props) {
  const { data, loading } = useFetch('/api/v2/sidebar');
  return (
    <div></div>
  )
}

export default Sidebar;