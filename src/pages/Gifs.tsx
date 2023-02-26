import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { userContext } from '../context/UserContext';

interface IGighyItems {
  data: {
    id: string;
    images: Record<
      'downsized',
      {
        url: string;
      }
    >;
  }[];
  status: number;
}

interface IGighyInfo {
  data: {
    id: string;
    type: string;
    title: string;
    images: {
      downsized: {
        url: string;
        size: number;
      };
    };
  }[];
}

interface IDataItems {
  id: string;
  url: string;
}
function Gifs() {
  const API_KEY = 'jSgDMd629zG9yk9mCCcDYqDjmcVelHV6';
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dataItems, setDataItems] = useState<IDataItems[]>([]);
  //const { authed } = useContext(userContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }): void => {
    setSearchText(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data, ...rest } = await axios.get<IGighyItems>(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchText}&limit=20`
      );
      console.log('data: ', data);
      console.log('rest: ', rest);
      const items = data.data.map(item => {
        return {
          id: item.id,
          url: item.images.downsized.url,
        };
      });
      setDataItems(items);
      console.log('items: ', items);
    };

    const timer = setTimeout(() => fetchData(), 3000);
    return () => {
      setIsLoading(false);
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div className="App">
      <input
        type="text"
        value={searchText}
        placeholder="Search..."
        onChange={handleChange}
      />
      <div className="container">
        {isLoading
          ? dataItems.map(item => (
              <div key={item.id}>
                <img
                  src={item.url}
                  alt={item.id}
                  width={'300'}
                  height={'300'}
                />
              </div>
            ))
          : 'Loading...'}
      </div>
    </div>
  );
}

export default Gifs;
