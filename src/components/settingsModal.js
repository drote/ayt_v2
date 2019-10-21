import React from 'react';
import { Link } from 'react-router-dom';

class SettingsModal extends React.Component {
	state = {
		...this.props.settings
	}

	handleCBClick = (evt) => {
		this.setState({
			[evt.target.name]: !this.state[evt.target.name]
		});
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleDDClick = (key, val) => {
		this.setState({
			[key]: val
		})
	}

	handleExit = () => {
		this.props.history.goBack();
	}

	render() {
		console.log(this.props.location)
		return (
			<div
				className="ui active dimmer"
				onClick={this.handleExit}
			>
				<div id="settings" className="ui active modal">
					
					<i
						className="close icon"
						onClick={this.handleExit}>
					</i>

					<div className="header">
						<h1>הגדרות</h1>
					</div>

					<div className="content">
						<div className="ui form">

							<div className="inline fields">
		    				<div className="field">
		      				<div className="ui checkbox">

		        				<input
		        					type="checkbox"
		        					name="gaActive"
		        					onChange={this.handleCBClick}
		        					checked={this.state.gaActive}
		        				/>

		        				<label></label>
		     					</div>
		    				</div>
		    				<label for="ga-active">בחירה בהשהיה</label>
		    			</div>

		    			<div className="inline fields">
		    				<div className="field">
		      				<div className="ui checkbox">

		        				<input
		        					type="checkbox"
		        					name="gaRestMode"
		        					onChange={this.handleCBClick}
		        					checked={this.state.gaRestMode}
		        				/>

		        				<label></label>
		     					</div>
		    				</div>
		    				<label for="ga-rest-mode">מצב מנוחה במסך תוצאות</label>
		    			</div>

							<div className="inline fields">
		    				<label for="clickDelay">המתנה לפני תחילת השהייה:</label>
			  				<div className="field">
			    				<input
			    					type="range"
			    					name="clickDelay"
			    					min="100"
			    					max="5000"
			    					step="100"
			    					onChange={this.handleChange}
			    					value={this.state.clickDelay}
			    				/>
						    </div>
		    				<div className="field">
		    					<p>{parseInt(this.state.clickDelay, 10) / 1000}</p>
		    				</div>
		    			</div>

		   				<div className="inline fields">
		    				<label for="selectDelay">השהייה לבחירה:</label>
			  				<div className="field">
			    				<input
			    					type="range"
			    					name="selectDelay"
			    					min="100"
			    					max="5000"
	    							step="100"
	   	    					onChange={this.handleChange}
			    					value={this.state.selectDelay}
			    				/>
						    </div>
		    				<div className="field">
		    					<p>{parseInt(this.state.selectDelay, 10) / 1000}</p>
		    				</div>
		    			</div>

							<div className="inline fields">
							  <label>מספר שורות:</label>
			    			<div id="rows" className="field">
						      <div className="ui compact menu">
									  <div className="ui simple dropdown item">
									    {this.state.rowNumber}
									    <div className="menu" onClick={(evt) => this.setState({'rowNumber': evt.target.innerText})}>
									      <div className="item">1</div>
									      <div className="item">2</div>
									      <div className="item">3</div>
									      <div className="item">4</div>
									      <div className="item">5</div>
									    </div>
									  </div>
									</div>
								</div>
							</div>

							<div className="inline fields">
							  <label>מספר שורות:</label>
			    			<div id="cols" className="field">
						      <div className="ui compact menu">
									  <div className="ui simple dropdown item">
									    {this.state.colNumber}
									    <div className="menu" onClick={(evt) => this.setState({'colNumber': evt.target.innerText})}>
									      <div className="item">1</div>
									      <div className="item">2</div>
									      <div className="item">3</div>
									      <div className="item">4</div>
									      <div className="item">5</div>
									    </div>
									  </div>
									</div>
								</div>
							</div>

							<div className="inline fields">
		    				<label for="backgroundColor">צבע רקע:</label>
			  				<div className="field">
			    				<input
			    					type="color"
			    					name="backgroundColor"
			    					onChange={this.handleChange}
			    					value={this.state.backgroundColor}
			    				/>
						    </div>
		    			</div>

		    			<div className="inline fields">
		    				<label for="highlightColor">צבע הדגשה:</label>
			  				<div className="field">
			    				<input
			    					type="color"
			    					name="highlightColor"
			    					onChange={this.handleChange}
			    					value={this.state.highlightColor}
			    				/>
						    </div>
		    			</div>

							<div className="inline fields">
		    				<label for="sidebar-side">מיקום סרגל כלים:</label>
		    				<div className="field">
		      				<div className="ui radio checkbox">
		        				<input
		        					type="radio"
		        					value="left"
		        					name="sideBarPosition"
											onChange={this.handleChange}
		        					checked={this.state.sideBarPosition === 'left'}
		        				/>
		        				<label></label>
		     					</div>
		    				</div>
		    				<div className="field">
		        			<label>שמאל</label>
						    </div>
		    				<div className="field">
		      				<div className="ui radio checkbox">
		        			<input
		        				type="radio"
		        				value="right"
		        				name="sideBarPosition"
		        				onChange={this.handleChange}
		        				checked={this.state.sideBarPosition === 'right'}
		        			/>
		        			<label></label>
						      </div>
						    </div>
						    <div className="field">
		        			<label>ימין</label>
						    </div>
							</div>

							<div className="inline fields">
		    				<label for="sideBarWidth">רוחב סרגל כלים (באחוזים):</label>
			  				<div className="field">
			    				<input
			    					type="range"
			    					name="sideBarWidth"
			    					min="0"
			    					max="100"
			    					step="1"
			    					onChange={this.handleChange}
			    					value={this.state.sideBarWidth}
			    				/>
						    </div>
		    				<div className="field">
		    					<p>{this.state.sideBarWidth}</p>
		    				</div>
		    			</div>

		    			<div className="inline fields">
		    				<div className="field">
		      				<div className="ui checkbox">
		        				<input
		        					type="checkbox"
		        					name="openInYT"
		        					onChange={this.handleCBClick}
		        					checked={this.state.openInYT}
		        				/>
		        				<label></label>
		     					</div>
		    				</div>
		    				<label for="open-in-yt">פתח סרטונים באתר של יוטיוב</label>
		    			</div>

		    		</div>
					</div>

					<div className="actions">
				    <div className="ui positive right labeled icon button">
				      שמור
				      <i className="checkmark icon"></i>
		    		</div>

					  <div className="ui red deny right labeled icon button">
		      		ביטול
		      		<i
		      			className="remove icon"
		      			onClick={this.handleExit}
		      		>
		      		</i>
				    </div>
				  </div>

				</div>
			</div>
		)
	}
}

export default SettingsModal;