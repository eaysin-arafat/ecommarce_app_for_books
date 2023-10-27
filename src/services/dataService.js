const getSession = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  return { token, cbid };
};

export const getUser = async () => {
  const { token, cbid } = getSession();

  const requestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_HOST}/600/users/${cbid}`,
    requestOption
  );

  if (!response.ok) {
    const error = { message: response.statusText, status: response.status };
    throw new Error(error);
  }

  const data = await response.json();
  return data;
};

export const getUserOrders = async () => {
  const { token, cbid } = getSession();

  const requestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_HOST}/660/orders?user.id=${cbid}`,
    requestOption
  );

  if (!response.ok) {
    const error = { message: response.statusText, status: response.status };
    throw new Error(error);
  }

  const data = await response.json();
  return data;
};

export const createOrder = async (cartList, total, user) => {
  const { token } = getSession();

  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };

  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_HOST}/660/orders`,
    requestOption
  );

  if (!response.ok) {
    const error = { message: response.statusText, status: response.status };
    throw new Error(error);
  }

  const data = await response.json();
  return data;
};
