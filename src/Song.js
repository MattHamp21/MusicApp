import React from "react";
import { Button, Table } from "semantic-ui-react";

class Song extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>
          <Button
            color="red"
            onClick={() => this.props.deleteSong(this.props.id)}
          >
            Delete
          </Button>
          <Button color="blue">Update</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default Song;
