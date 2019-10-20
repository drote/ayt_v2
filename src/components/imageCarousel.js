import React from 'react';

class ImageCarousel extends React.Component {
	state = {
		imageIdx: 0,
		loading: this.props.loading
	}

	render() {
		return (
			<div className="content">
				{
					this.state.loading ?
				    <div className="ui segment">
							<div className="ui fluid placeholder">
							  <div className="image"></div>
							</div>
				    </div>
					:
						<div className="ui segment">
	    				<button className="ui button circular"><i className="arrow right icon"></i></button>
	    				{
	    					this.props.images.map((imgSrc, idx) => {
	    						if (idx !== this.state.imageIdx) return;

					      	return <img className= "ui centered medium rounded image" src={imgSrc} />
	    					})
	    				}
							<button className="ui button circular"><i className="arrow left icon"></i></button>
				    </div>
				}
		  </div>
		)
	}
}

export default ImageCarousel;