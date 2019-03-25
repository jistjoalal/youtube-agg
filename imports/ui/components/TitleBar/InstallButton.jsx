import React from 'react';

export default class InstallButton extends React.Component {
  constructor() {
    super();
    this.state = {
      deferredPrompt: null,
      show: true,
    };
  }
  componentDidMount() {
    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    addBtn.style.display = 'none';
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = 'block';
    
      addBtn.addEventListener('click', (e) => {
        console.log(e, deferredPrompt);
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
      });
    });
  }
  render() {
    return (
      <button
        className="button-dark add-button"
      >
        Install
      </button>
    );
  }
}
