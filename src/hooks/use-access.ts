import { useState, useEffect } from 'react';

function useFetchData(url: string, authorization: string) {
  const [userId, setUserId] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: authorization,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setUserId(data.data.userId);
        setAccessToken(data.data.accessToken);
      } catch (error) {
        setError(error as any);
      }
    };

    fetchData();
  }, [url, authorization]);

  return { userId, accessToken, error };
}

export default useFetchData;
