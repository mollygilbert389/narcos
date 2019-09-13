const createQuery = params => {
  return params
    .reduce((acc, { name, value }) => {
      acc.push(`${name}=${value}`);
    }, [])
    .join('&');
};
export const get = async (url, params) => {
  const query = createQuery(params);
  const response = await fetch(`${url}/?${query}`);
  const data = await response.json();

  return data;
};

export const post = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    body
  });
  const data = await response.json();

  return data;
};
