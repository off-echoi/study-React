import React, {Fragment} from 'react';

export const Title = (props) => {
	return (
		<Fragment>
			<h3 className="TitleBox">
				{props.text}
			</h3>
		</Fragment>
	)
}
