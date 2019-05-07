export const findByDataTest = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};
