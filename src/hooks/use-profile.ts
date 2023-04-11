import { useState, useEffect } from 'react';

interface ProfileResponse {
  data: {
    profile: any;
    gamify: {
      data: any;
      badges: any[];
    };
  };
}

interface UseProfileResult {
  profileData: any | null;
  gameData: any | null;
  badges: any[] | null;
  error: Error | null;
}

function useProfile(
  accessToken: string | null,
  profileUrl: string,
  refreshInterval: number,
): UseProfileResult {
  const [profileData, setProfileData] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [badges, setBadges] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (accessToken) {
      const fetchProfileData = async () => {
        try {
          const response = await fetch(profileUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch profile data');
          }

          const data: ProfileResponse = await response.json();
          setProfileData(data.data.profile);
          setGameData(data.data.gamify.data);
          setBadges(data.data.gamify.data.badges);
        } catch (error) {
          setError(error as any);
        }
      };

      fetchProfileData();
      const intervalId = setInterval(fetchProfileData, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [accessToken, profileUrl, refreshInterval]);

  return { profileData, gameData, badges, error };
}

export default useProfile;
