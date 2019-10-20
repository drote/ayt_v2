import React from 'react';
import EditThumbModal from './editThumbModal';
import Thumb from './thumb';

const EditableThumb = ({ editing, ...props }) => {
	return (
		<React.Fragment>
			{
				true ?
					<EditThumbModal
						resourceTitle={props.title}
						images={[props.imgSrc]}
						resourceLink={props.fullUrl}
						status={props.status}
					/>
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