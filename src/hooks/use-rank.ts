import { useState, useEffect } from 'react';

interface Ranking {
  rank: number;
  score: number;
  streak: number;
}

interface UseRankResult {
  ranking: Ranking | null;
  error: Error | null;
}

function useRank(
  accessToken: string | null,
  userId: string | null,
  gamificationUrl: (userId: string) => string,
  refreshInterval: number,
): UseRankResult {
  const [ranking, setRanking] = useState<Ranking | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (accessToken && userId) {
      const fetchRankingData = async () => {
        try {
          const response = await fetch(gamificationUrl(userId), {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch ranking data');
          }

          const data = await response.json();
          console.log(data);
          setRanking({
            rank: data.data.rank || 0,
            score: data.data.score || 0,
            streak: data.data.streak || 0,
          });
        } catch (error) {
          setError(error as any);
        }
      };
      fetchRankingData();
      const intervalId = setInterval(fetchRankingData, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [accessToken, userId, refreshInterval]);

  return { ranking, error };
}

export default useRank;
