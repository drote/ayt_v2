import React from 'react';
import ThumbModal from './thumbModal';
import Thumb from './thumb';

const EditableThumb = ({ editing, ...props }) => {
	return (
		<React.Fragment>
			{
				editing ?
					<ThumbModal
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