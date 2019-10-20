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

							{
								this.props.images > 1 ?
				    			<button className="ui button circular"><i className="arrow right icon"></i></button>
				    		:
				    			null
							}
						  
						  <div className="ui img container">
				      	<img className= "ui centered medium rounded image" src={this.props.images[this.state.imageIdx]} />
					    </div>
							
							{
								this.props.images > 1 ?
									<button className="ui button circular"><i className="arrow left icon"></i></button>
								:
									null
							}
				    </div>
				}
		  </div>
		)
	}
}

export default ImageCarousel;