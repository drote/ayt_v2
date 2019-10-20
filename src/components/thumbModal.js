import React from 'react';
import ImageCarousel from './imageCarousel';

class ThumbModal extends React.Component {
	state = {
		searchInput: '',
		saveInput: this.props.resourceTitle,
		link: this.props.resourceLink,
		cantSearch: false,
		editingSaved: false
	}

	render() {
		const { images, status } = this.props;

		return (
			<div class="ui active dimmer">
				<div className="ui active modal">

					<i className="close icon"></i>
					<div className="header">הכנס לינק לשמירה</div>

					<div className="content">

						<div className="ui fluid input icon">

		  				<input
		  					type="text"
		  					placeholder="https://www.youtube.com"
		  					value={this.state.searchInput}
		  				/>
				      <i className="circular search link icon"></i>

						</div>

						{
							this.state.cantSearch ?
								<div className="ui pointing red basic label">
				      		נא לרשום מונח חיפוש או לינק
				    		</div>
				    	:
				    		null
						}

						{
							status === 'SEARCH_ERROR' ?
				    		<div id="error-message" className="ui error message">
							    <div className="header">נתקלנו בבעיה</div>
							    <p>אנא ודא/י שהלינק תקין</p>
							  </div>
							:
								null
						}

					</div>

						{
							images.length <= 0 ?
								null
							:
								<React.Fragment>
									<ImageCarousel images={images} loading={status === 'loading'} />

								  <div className="content">
								    	<h1>

								    		{
													this.state.editingSaved ?
														<input value={this.state.saveInput} />
													:
														this.state.saveInput
								    		}

								    	</h1>
								    </div>
								</React.Fragment>						
						}


					<div className="actions">
				    <div className="ui positive right labeled icon button">
				      בחר
				      <i className="checkmark icon"></i>
		    		</div>

					  <div className="ui red deny right labeled icon button">
		      		חזור
		      		<i className="remove icon"></i>
				    </div>
				  </div>

				</div>
			</div>
		)
	}
}

export default ThumbModal;