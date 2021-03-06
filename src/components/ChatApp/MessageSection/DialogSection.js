import Dialog from 'material-ui/Dialog';
import React, { Component } from 'react';
import Login from '../../Auth/Login/Login.react';
import SignUp from '../../Auth/SignUp/SignUp.react';
import ForgotPassword from '../../Auth/ForgotPassword/ForgotPassword.react';
import PropTypes from 'prop-types';
import Close from 'material-ui/svg-icons/navigation/close';

export default class DialogSection extends Component {
  render() {
    const closingStyle = {
      position: 'absolute',
      zIndex: 1200,
      fill: '#444',
      width: '26px',
      height: '26px',
      right: '10px',
      top: '10px',
      cursor: 'pointer',
    };
    return (
      <div>
        {/* Login */}
        <Dialog
          className="dialogStyle"
          modal={false}
          open={this.props.openLogin}
          autoScrollBodyContent={true}
          bodyStyle={this.props.bodyStyle}
          contentStyle={{ width: '35%', minWidth: '300px' }}
          onRequestClose={this.props.onRequestClose()}
        >
          <Login
            {...this.props}
            handleForgotPassword={this.props.onForgotPassword()}
            handleSignUp={this.props.handleSignUp}
          />
          <Close
            style={closingStyle}
            onTouchTap={this.props.onRequestClose()}
          />
        </Dialog>
        {/* SignUp */}
        <Dialog
          className="dialogStyle"
          modal={false}
          open={this.props.openSignUp}
          autoScrollBodyContent={true}
          bodyStyle={this.props.bodyStyle}
          contentStyle={{ width: '35%', minWidth: '300px' }}
          onRequestClose={this.props.onRequestClose()}
        >
          <SignUp
            {...this.props}
            onRequestClose={this.props.onRequestClose()}
            onLoginSignUp={this.props.onLoginSignUp()}
          />
          <Close
            style={closingStyle}
            onTouchTap={this.props.onRequestClose()}
          />
        </Dialog>
        {/*  Forgot Password */}
        <Dialog
          className="dialogStyle"
          modal={false}
          open={this.props.openForgotPassword}
          autoScrollBodyContent={true}
          contentStyle={{ width: '35%', minWidth: '300px' }}
          onRequestClose={this.props.onRequestClose()}
        >
          <ForgotPassword
            {...this.props}
            onLoginSignUp={this.props.onLoginSignUp()}
            showForgotPassword={this.showForgotPassword}
          />
          <Close
            style={closingStyle}
            onTouchTap={this.props.onRequestClose()}
          />
        </Dialog>
        <Dialog
          className="dialogStyle"
          contentStyle={{
            width: '45%',
            minWidth: '300px',
            textAlign: 'center',
          }}
          title="Welcome to SUSI.AI Web Chat"
          open={this.props.tour}
        >
          <iframe
            width="99%"
            height="315"
            src="https://www.youtube.com/embed/9T3iMoAUKYA"
            frameBorder="0"
            scrolling="no"
          />
          <Close
            style={closingStyle}
            onTouchTap={this.props.onRequestCloseTour()}
          />
        </Dialog>
      </div>
    );
  }
}

DialogSection.propTypes = {
  openLogin: PropTypes.bool,
  openSignUp: PropTypes.bool,
  openForgotPassword: PropTypes.bool,
  openHardwareChange: PropTypes.bool,
  tour: PropTypes.bool,
  onLoginSignUp: PropTypes.func,
  handleSignUp: PropTypes.func,
  ServerChangeActions: PropTypes.array,
  HardwareActions: PropTypes.array,
  bodyStyle: PropTypes.object,
  onRequestClose: PropTypes.func,
  onRequestCloseTour: PropTypes.func,
  onSaveThemeSettings: PropTypes.func,
  onForgotPassword: PropTypes.func,
  onSignedUp: PropTypes.func,
};
