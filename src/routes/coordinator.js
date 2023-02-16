export const goToHomepage = (navigate) => {
  navigate("/");
};

export const goToProfile = (navigate) => {
  navigate(`/profile`);
};

export const goToProduct = (navigate, id) => {
  navigate(`/product/${id}`);
};
