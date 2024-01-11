export const API_URL = `https://dogsapi.origamid.dev/json`;

export function TOKEN_REQUEST(body) {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function VALIDATE_TOKEN(token) {
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function USER_GET_REQUEST(token) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function CREATE_USER(body) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function NEW_POST(formData, token) {
  return {
    url: `${API_URL}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
}

export function FIND_POSTS({ page, totalItems, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${totalItems}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
