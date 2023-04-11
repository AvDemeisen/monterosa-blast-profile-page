export const updatePoints = async (
  baseUrl: string,
  accessToken: string | any,
  projectId: string,
  strategy: string,
  points: number,
  operation: string,
): Promise<void> => {
  try {
    const response = await fetch(`${baseUrl}user/game-profile`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectId,
        strategy,
        data: {
          type: 'points',
          operation,
          value: points,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update points');
    }
  } catch (error) {
    console.error(error);
  }
};
