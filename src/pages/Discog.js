import React from 'react';
import Table from '../components/Table';
import discogList from '../discogList';


const Discog = () => {

  let entries = discogList;

  return (
    <>
      <section id="discog" class="container">
        <h3>Discography.</h3>
        <Table entries={entries} />
      </section>
    </>
  );
}

export default Discog;