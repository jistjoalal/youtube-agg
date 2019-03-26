import React from 'react';
import { FaDownload } from 'react-icons/fa';

/**
 * Reactified version of code @
 * https://developers.google.com/web/fundamentals/app-install-banners/
 */
export default class InstallButton extends React.Component {
  constructor() {
    super();
    this.state = {
      deferredPrompt: null,
      show: false,
    }
  }
  componentDidMount() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.setState({
        deferredPrompt: e,
        show: true,
      });
    });
  }
  render() {
    return (
      this.state.show &&
        <button
          className="InstallButton"
          data-toggle="tooltip"
          title="Install App"
          onClick={this.install}
        >
          <FaDownload />
        </button>
    );
  }
  install = _ => {
    const { deferredPrompt } = this.state;
    // hide our user interface that shows our A2HS button
    this.setState({ show: false });
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      }
      else {
        console.log('User dismissed the A2HS prompt');
      }
      this.setState({ deferredPrompt: null });
    });
  }
}
