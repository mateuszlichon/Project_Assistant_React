import React from 'react';

const navigationPanelTask = (props) => (
    <a className="text-light" onClick={props.selectedTask}>{props.name}<br /></a>
)

export default navigationPanelTask;