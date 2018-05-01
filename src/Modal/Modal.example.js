import React from 'react';
import Button from '../Button';
import Box from '../Box';
import Modal from './Modal';
import LiveEdit from '../live-edit';

const ModalCode = `
class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelOpen: false,
    }

    this.toggle = this.toggle.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  toggle() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  onCancel() {
    this.toggle();
    setTimeout(() => {
      alert('Oh no! It has been canceled.');
    }, 500);
  }

  onConfirm() {
    this.toggle();
    setTimeout(() => {
      alert('Yahoo! It has been confirmed.');
    }, 500);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Open Modal</Button>

        <Modal open={this.state.isModalOpen} onClose={this.toggle}>
          <Modal.Title>Yodel Modal</Modal.Title>

          <Modal.Body>{this.props.body}</Modal.Body>

          <Modal.Footer>
            <Box align="right">
              <Button.Group>
                <Button variant="grayLight" onClick={this.onCancel}>Cancel</Button>
                <Button variant="success" onClick={this.onConfirm}>Okay</Button>
              </Button.Group>
            </Box>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
`;

class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  toggle() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  onCancel() {
    this.toggle();
    setTimeout(() => {
      alert('Oh no! It has been canceled.');
    }, 500);
  }

  onConfirm() {
    this.toggle();
    setTimeout(() => {
      alert('Yahoo! It has been confirmed.');
    }, 500);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Open Modal</Button>

        <Modal open={this.state.isModalOpen} onClose={this.toggle}>
          <Modal.Title>Yodel Modal</Modal.Title>

          <Modal.Body>{this.props.body}</Modal.Body>

          <Modal.Footer>
            <Box align="right">
              <Button.Group>
                <Button variant="grayLight" onClick={this.onCancel}>
                  Cancel
                </Button>
                <Button variant="success" onClick={this.onConfirm}>
                  Okay
                </Button>
              </Button.Group>
            </Box>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default {
  group: 'Modal',
  render: () => (
    <React.Fragment>
      <p>
        Modals are a great way to add dialogs to your site for lightboxes, user notifications, or completely custom
        content.
      </p>

      <h2>Live Demo</h2>
      <p>
        Toggle a working modal demo by clicking the button below. It will slide up and fade in from the bottom of the
        page.
      </p>

      <LiveEdit
        code={`${ModalCode}
render(<ModalDemo body={<p style={{ margin: 0 }}>Look at this awesome modal!</p>} />)`}
        noInline
        scope={{ Modal, Box, Button }}
      />

      <h2>Handling Long Content</h2>
      <p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself.</p>
      <ModalDemo body={<div>{new Array(50).fill(null).map(() => <p>I'm really long annoying content.</p>)}</div>} />
    </React.Fragment>
  ),
};
