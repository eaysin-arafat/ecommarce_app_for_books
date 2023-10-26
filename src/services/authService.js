export const register = async (authDetail) => {
  const requestOption = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_HOST}/register`,
    requestOption
  );

  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
};

export const login = async (authDetail) => {
  const requestOption = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_HOST}/login`,
    requestOption
  );

  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
};

export const logout = async () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
};
