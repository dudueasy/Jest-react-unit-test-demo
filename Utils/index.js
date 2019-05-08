import checkPropTypes from 'check-prop-types';

export const findByDataTest = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
};
