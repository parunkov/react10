import React, { useState } from 'react';
import './App.scss';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function App() {
  const usdCourse = 95;
  const euroCourse = 105;
  const allTransfers = [0, 1, 2, 3];

  const [transfers, setTransfers] = useState([0, 1, 2]);

  const onTransferChange = (item: number) => {
    if (transfers.includes(item)) {
      setTransfers(transfers.filter((transfer) => transfer !== item))
    } else {
      setTransfers([...transfers, item])
    }
  }
  const onAllTransfersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setTransfers(allTransfers);
    } else {
      setTransfers([]);
    }
  }

  return (
    <div className="app">
      <div className="container">
        <aside className="control">
          <FormGroup>
            <FormControlLabel control={<Checkbox 
              onChange={onAllTransfersChange} 
              checked={transfers.length > 3}
            />} label="Все" />
            {allTransfers.map((item) => <FormControlLabel key={item} control={<Checkbox 
              onChange={() => onTransferChange(item)}
              checked={transfers.includes(item) ? true : false}
            />} label={`${item === 0 ? '' : item} ${item === 0 ? 'Без пересадок' : item === 1 ? 'пересадка' : 'пересадки'}`} />)}
          </FormGroup>
        </aside>
      </div>
    </div>
  );
}

export default App;
