import React, { Component } from 'react';
import TableRow from '../components/TableRow';

class Table extends Component () {

    render() {
      return (
        <>
        <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Artist</th>
          <th scope="col">Title</th>
          <th scope="col">Credit</th>
        </tr>
      </thead>
      <tbody>

        <TableRow />
       
      </tbody>
    </table>
        </>
      );
    }
  }
  
  export default Table;