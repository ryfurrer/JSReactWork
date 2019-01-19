import React from 'react';

export default class Layout extends React.Component {

	constructor(props) {
		super(props);
	}

	renderChildren() {
		let changed = this.props.children.map( (child, index) => {
			return (
				<div style={{paddingBottom: '10px'}}>
					{child}
				</div>
			)
		});

		return changed;
	}

	render() {
		return (
			<div className='layout' style={{height: '100%', width: '100%'}}>
				{this.renderChildren()}
			</div>
		)
	}
}