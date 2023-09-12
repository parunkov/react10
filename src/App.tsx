import React, { useState } from 'react';
import './App.scss';
import { FormGroup, FormControlLabel, Checkbox, Card, CardContent, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';

function App() {
  const usdCourse = 95;
  const euroCourse = 105;
  const allTransfers = [0, 1, 2, 3];

  const [transfers, setTransfers] = useState([0, 1, 2]);
  const [currency, setCurrency] = useState('₽');

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
  const onCurrencyChange = (
    event: React.MouseEvent<HTMLElement>,
    newCurrency: string,
  ) => {
    setCurrency(newCurrency);
    console.log(currency);
    
  }

  return (
    <div className="app">
      <div className="container">
        <aside className="control">
          <Card>
            <CardContent>
            <Typography component="div">
                ВАЛЮТА
              </Typography>
              <ToggleButtonGroup
                color="primary"
                value={currency}
                exclusive
                onChange={onCurrencyChange}
                aria-label="Platform"
              >
                <ToggleButton value="₽">RUB</ToggleButton>
                <ToggleButton value="$">USD</ToggleButton>
                <ToggleButton value="€">EUR</ToggleButton>
              </ToggleButtonGroup>
              <Typography component="div">
                КОЛИЧЕСТВО ПЕРЕСАДОК
              </Typography>
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
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default App;
