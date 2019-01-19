import React from 'react';

export default class Row extends React.Component {

	constructor(props) {
		super(props);
	}

	renderChildren() {
		let changed;
		changed = this.props.children.map( (child, index) => {
			return (
				<div style={{float: 'left', paddingRight: '10px'}}>
					{child}
				</div>
			)
		});
		return changed;
	}

	render() {
		return (
			<div className='row' style={{display: 'table'}}>
				{this.renderChildren()}
			</div>
		)
	}
}