import FlipUnitContainer from './FlipUnitContainer'
import React from 'react'


export default class FlipClock extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      counter: 8854200,
      days: 0,
			daysShuffle: true,
			hours: 0,
			hoursShuffle: true,
			minutes: 0,
			minutesShuffle: true,
			seconds: 0,
			secondsShuffle: true
		};
	}
    
	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateTime(),
			50
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	updateTime() {
    let counter = this.state.counter - 50
    this.setState({counter});
    if (counter <= 0) {
      this.setState({counter:8200000000});
    }

    const days = Math.floor(counter / (1000 * 60 * 60 * 24));
    const hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((counter % (1000 * 60)) / 1000);
    
    // on days chanage, update hours and shuffle state
		if( days !== this.state.days) {
			const daysShuffle = !this.state.daysShuffle;
			this.setState({
				days,
				daysShuffle
			});
		}
		// on hour chanage, update hours and shuffle state
		if( hours !== this.state.hours) {
			const hoursShuffle = !this.state.hoursShuffle;
			this.setState({
				hours,
				hoursShuffle
			});
		}
		// on minute chanage, update minutes and shuffle state
		if( minutes !== this.state.minutes) {
			const minutesShuffle = !this.state.minutesShuffle;
			this.setState({
				minutes,
				minutesShuffle
			});
		}
		// on second chanage, update seconds and shuffle state
		if( seconds !== this.state.seconds) {
			const secondsShuffle = !this.state.secondsShuffle;
			this.setState({
				seconds,
				secondsShuffle
			});
		}
	}
  
	render() {
    // state object destructuring
		const { 
      days,
      hours, 
      minutes, 
      seconds, 
      daysShuffle, 
      hoursShuffle, 
      minutesShuffle, 
      secondsShuffle 
    } = this.state;
		
    return(
			<div className={'flipClock'}>
        <div className="flipConteiner">
        <FlipUnitContainer 
					unit={'days'}
					digit={days} 
					shuffle={daysShuffle} 
					/>
          <span className='flipText'>DAYS</span>
          </div>
          <div className="flipConteiner">
				<FlipUnitContainer 
					unit={'hours'}
					digit={hours} 
					shuffle={hoursShuffle} 
					/>
          <span className='flipText'>HOURS</span>
          </div>
          <div className="flipConteiner">
				<FlipUnitContainer 
					unit={'minutes'}
					digit={minutes} 
					shuffle={minutesShuffle} 
					/>
          <span className='flipText'>MINUTES</span>
          </div>
          <div className="flipConteiner">
				<FlipUnitContainer 
					unit={'seconds'}
					digit={seconds} 
					shuffle={secondsShuffle}
           />
           <span className='flipText'>SECONDS</span>
           </div>
			</div>
		);
	}
}