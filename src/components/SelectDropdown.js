import React from 'react';
import Select, { components } from 'react-select';
import { createPortal } from 'react-dom';

const customSingleValue = (props) => (
  <components.SingleValue {...props}>
    <span style={{ color: props.data.color }}>{props.data.label}</span>
  </components.SingleValue>
);

const customMultiValue = (props) => (
  <components.MultiValue {...props}>
    <span style={{ color: props.data.color }}>{props.data.label}</span>
  </components.MultiValue>
);

const SelectDropdown = ({
  options,
  value,
  onChange,
  label,
  isSearchable = true,
  usePortal = false,
  isMulti = false,
  zIndex = 1001,
  customOptionRenderer,
}) => {
  const DropdownContainer = ({ children }) => {
    return usePortal ? createPortal(children, document.body) : children;
  };

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: zIndex,
    }),
  };

  const componentsOverride = customOptionRenderer
    ? {
        SingleValue: customSingleValue,
        MultiValue: customMultiValue,
        Option: customOptionRenderer,
      }
    : {};

  return (
    <div>
      <label>{label}</label>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        isSearchable={isSearchable}
        isMulti={isMulti}
        components={componentsOverride}
        styles={customStyles}
        menuPortalTarget={usePortal ? document.body : null}
        menuPosition={usePortal ? 'fixed' : 'absolute'}
      />
    </div>
  );
};

export default SelectDropdown;
