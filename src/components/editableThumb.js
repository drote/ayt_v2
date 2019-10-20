import React from 'react';
import ThumbModal from '../containers/thumbModal';
import Thumb from './thumb';

const EditableThumb = ({ editing, ...props }) => {
	return (
		<React.Fragment>
			{
				editing ?
					<ThumbModal />
				:
					null
			}

			<Thumb
				{...props}
			/>
		</React.Fragment>
	)
}

export default EditableThumb;