import React, { useState } from 'react';
import SelectDropdown from './SelectDropdown';

export default {
  title: 'Components/SelectDropdown',
  component: SelectDropdown,
  argTypes: {
    isSearchable: { control: 'boolean' },
    usePortal: { control: 'boolean' },
    isMulti: { control: 'boolean' },
    zIndex: { control: 'number' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <SelectDropdown
      {...args}
      value={value}
      onChange={(selectedOption) => setValue(selectedOption)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option with icon' },
    { value: 'option3', label: 'Long Long Option 3' },
    { value: 'option4', label: 'Long Long Long Option 4' },
    { value: 'option5', label: 'Long Long Long Long Option 5' },
    { value: 'option6', label: 'Long Long Long Long Long Option 6' },
  ],
  value: { value: 'option1', label: 'Option 1' },
  isSearchable: true,
  usePortal: false,
  isMulti: false,
  zIndex: 1001,
};

export const WithPortal = Template.bind({});
WithPortal.args = {
  ...Default.args,
  usePortal: true,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  ...Default.args,
  isMulti: true,
};

export const CustomOptionRendering = Template.bind({});
CustomOptionRendering.args = {
  ...Default.args,
  customOptionRenderer: (props) => (
    <div {...props.innerProps} style={{ padding: 10, color: props.data.color }}>
      {props.data.label}
    </div>
  ),
};
