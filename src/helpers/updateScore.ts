export const updateScore = async (
  gamificationBaseUrl: string,
  projectId: string,
  userId: string | any,
  points: number,
): Promise<void> => {
  try {
    const response = await fetch(
      `${gamificationBaseUrl}/projects/${projectId}/scores/2ffe8e46-616d-40ce-a1f0-0e5d0da729d3`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          projectId,
          points,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to update score');
    }
  } catch (error) {
    console.error(error);
  }
};
