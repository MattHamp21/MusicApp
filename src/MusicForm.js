import React from "react";
import { Form } from "semantic-ui-react";

class MusicForm extends React.Component {
  state = {
    name: "",
    artist: "",
  };

  handleSubmit = (e) => {
    this.props.addSong(this.state);
    this.setState({
      name: "",
      artist: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            label="Name"
            placeholder="name placeholder"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Artist"
            placeholder="artist placeholder"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <Form.Button
            color="green
          "
          >
            Add New Song
          </Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default MusicForm;
