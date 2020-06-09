import React, {Component} from 'react';
import profilePic1 from '../assets/image-tanya.jpg';
import profilePic2 from '../assets/image-john.jpg';
import iconPrev from '../assets/icon-prev.svg';
import iconNext from '../assets/icon-next.svg';
import './slider.css';

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active1 : '',
			active2 : 'hidden'
		};
	}

	changeProfile = () => {
		if (this.state.active1 === 'hidden') {
			this.setState({active1: ''});
		} else {
			this.setState({active1: 'hidden'});
		}
		if (this.state.active2 === 'hidden') {
			this.setState({active2: ''});
		} else {
			this.setState({active2: 'hidden'});
		}
	};

	render() {
		return (
			// Profile 1
			<div className="h-full sm:flex sm:items-center">
				<div className={`slider-container flex justify-center flex-col sm:flex-row-reverse  ${this.state.active1}`}>
					<div className="image-container flex flex-col justify-center m-6 sm:w-8/12 sm:ml-0 sm:relative sm:pl-10">
						<div className="image p-8 ">
							<img src={profilePic1} alt="profile" className="rounded shadow-lg" />
						</div>
						<div className="slider-icons block flex flex-row shadow-2xl h-8 w-16 rounded-full ml-auto mr-auto bg-white relative">
							<img src={iconPrev} className="icon-prev h-4 m-auto" alt="prev" onClick={this.changeProfile} />
							<img src={iconNext} className="icon-next h-4 m-auto" alt="next" onClick={this.changeProfile} />
						</div>
					</div>

					<div className="slider-text -mt-8 sm:w-9/12 sm:flex sm:flex-col sm:relative">
						<div className="slider-quote text-lg m-8 sm:mt-auto sm:mb-auto dt-quote-bg sm:-pl-12 sm:pt-10 sm:mr-0 sm:text-2xl">
							<div>
								<p>
									“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend
									this course enough. I’m now in the job of my dreams and so excited about the future.”
								</p>
							</div>
							<div className="slider-author mt-4">
								<p className="text-lg font-bold dark-blue">Tanya Sinclair</p>
								<p className="font-medium grayish-blue">UX Engineer</p>
							</div>
						</div>
					</div>
				</div>

				{/* profile 2 */}
				<div className={`slider-container flex justify-center flex-col sm:flex-row-reverse  ${this.state.active2}`}>
					<div className="image-container flex flex-col justify-center m-6 sm:w-8/12 sm:ml-0 sm:relative sm:pl-10">
						<div className="image p-8">
							<img src={profilePic2} alt="profile" className="rounded shadow-lg" />
						</div>
						<div className="slider-icons block flex flex-row shadow-2xl h-8 w-16 rounded-full ml-auto mr-auto bg-white relative">
							<img src={iconPrev} className="icon-prev h-4 m-auto" alt="prev" onClick={this.changeProfile} />
							<img src={iconNext} className="icon-next h-4 m-auto" alt="next" onClick={this.changeProfile} />
						</div>
					</div>

					<div className="slider-text -mt-8 sm:w-9/12 sm:flex sm:flex-col sm:relative">
						<div className="slider-quote text-lg m-8 sm:mt-auto sm:mb-auto dt-quote-bg sm:-p-8 sm:pt-10 sm:mr-0 sm:text-2xl">
							<div>
								<p>
									“If you want to lay the best foundation possible I’d recommend taking this course. The depth the
									instructors go into is incredible. I now feel so confident about starting up as a professional
									developer.”
								</p>
							</div>
							<div className="slider-author mt-4">
								<p className="text-lg font-bold dark-blue">John Tarkpor</p>
								<p className="font-medium grayish-blue">Junior Frint-end Developer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Slider;
