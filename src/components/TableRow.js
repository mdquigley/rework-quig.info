import React from 'react';

const TableRow = (entry) => {

    return ( 
    <>
        <tr>
          <td>{entry.year}</td>
          <td>entry.artist</td>
          <td><a href={entry.link} target="_blank">{entry.title}</a></td>
          <td>{entry.credit}</td>
        </tr>
    </>
    );
}

export default TableRow;