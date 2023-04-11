export const updateBadges = (
  projectId: string,
  strategy: string,
  profileUrl: string,
  accessToken: string | null,
) => {
  const body = JSON.stringify({
    projectId,
    strategy,
    data: {
      type: 'badges',
      operation: 'add',
      value: 1,
    },
  });

  fetch(profileUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body,
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((error) => console.error(error));
};

export default updateBadges;
