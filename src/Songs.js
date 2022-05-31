import React from "react";
import { Table } from "semantic-ui-react";
import Song from "./Song";

class Songs extends React.Component {
  renderSongs = () => {
    return this.props.songs.map((c) => (
      <Song deleteSong={this.props.deleteSong} key={c.id} {...c} />
    ));
  };
  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{this.renderSongs()}</Table.Body>
      </Table>
    );
  }
}

export default Songs;
