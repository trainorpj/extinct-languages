import React from 'react';

const statusArr = [
  'All',
  'Vulnerable',
  'Definitely endangered',
  'Critically endangered',
  'Severely endangered',
  'Extinct',
];
// TODO action.updateData updates on current datset
// not on the master dataset.  No bueno.
const renderButton = (props) => {
  return (d, i) => {
    const buttonProps = {
      onClick: () => props.actions.updateData(props.data, d),
      key: i,
    };
    return <button {...buttonProps}>{d}</button>;
  };
};

const Control = (props) => {
  return (
    <div>
      <h2>A Control Panel Goes here</h2>
      {statusArr.map(renderButton(props))}
    </div>
  );
};

export default Control;
