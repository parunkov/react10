import React, { useState, useEffect } from 'react';
import './App.scss';
import { FormGroup, FormControlLabel, Checkbox, Card, CardContent, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import cards from './data/data.json';
import Ticket from './components/Ticket';
import { ICard } from './interfaces';


function App() {
  const allTransfers = [0, 1, 2, 3];

  const [transfers, setTransfers] = useState([0, 1, 2]);
  const [currency, setCurrency] = useState('₽');
  const [data, setData] = useState<ICard[]>(cards);

  useEffect(() => {
    console.log(transfers);
    
    setData(cards.filter((item) => transfers.includes(item.transfers)).sort((first, second) => first.price - second.price));
  }, [transfers]);

  const onTransferChange = (item: number) => {
    if (transfers.includes(item)) {
      setTransfers(transfers.filter((transfer) => transfer !== item));
    } else {
      setTransfers([...transfers, item]);
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

  }

  return (
    <div className="app">
      <header>
        <div className="logoWrapper">
          <img src={require('./assets/plane.png')} alt="airplane" className="logo" />
        </div>
      </header>
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
                fullWidth={true}
                className="toggle"
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
        <main>
          {data.map((card) => <Ticket
            key={card.price}
            price={card.price}
            start={card.start}
            end={card.end}
            startTime={card.startTime}
            endTime={card.endTime}
            startDate={card.startDate}
            endDate={card.endDate}
            transfers={card.transfers}
            currency={currency}
          />)}
        </main>
      </div>
    </div>
  );
}

export default App;
