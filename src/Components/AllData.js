import React from 'react';
import { UserContext } from '../context';




function AllData(){
  const ctx = React.useContext(UserContext);
  console.log('Datos del contexto en AllData: ', ctx)
  return (
    <>
    <h1>All Data<br/>
        {JSON.stringify(ctx)}
    </h1>
    </>
  );
}

export default AllData;
