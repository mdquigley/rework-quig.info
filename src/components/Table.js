import React from 'react';
import TableRow from '../components/TableRow';

const Table = ({ entries }) => (

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

        {
          entries.map((entry, key) => (
            <TableRow entry={entry} key={key} />
          ))
        }

      </tbody>
    </table>
  </>
);

export default Table;