import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './StoreCountdown.module.css';


class StoreCountdown extends Component {
  constructor() {
    super();
    this.state = {
      countdown: 600,
      timer: null,
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const { finishOrder } = this.props;
      const { countdown } = this.state;
      if (countdown === 0) {
        finishOrder();
      } else {
        this.setState({ countdown: countdown - 1 });
      }
    }, 1000);
    this.setState({ timer: interval });
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }


  render() {
    const { countdown } = this.state;
    const currentCountDown = new Date(null);
    currentCountDown.setSeconds(countdown);
    return (
      <div className={classes.timerContainer}>
        <i className="fas fa-shopping-basket fa-5x" />
        <div className={classes.countDownContainer}>
          <div>Armazem do seu Zé</div>
          <div>
            {currentCountDown.toISOString().substr(14, 5)}
            {' '}
            min restantes
          </div>
        </div>
      </div>
    );
  }
}

StoreCountdown.propTypes = {
  finishOrder: PropTypes.func.isRequired,
};

export default StoreCountdown;
