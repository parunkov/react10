import { ICard } from '../interfaces';
import styles from './Ticket.module.scss';
import { Card, CardContent, Button, Typography } from '@mui/material';

function Ticket({ price, start, end, startTime, endTime, startDate, endDate, transfers, currency }: ICard) {
    const usdCourse = 95;
    const euroCourse = 105;

    return (
        <Card className={styles.card}>
            <div className={styles.buttonBlock}>
                <CardContent >
                    <img src={require('../assets/logo.gif')} alt="logo" />
                    <Button variant="contained" color="warning">
                        Купить<br />за {
                            currency === '₽' ? price.toLocaleString('ru-RU') :
                                currency === '$' ? Math.round(price / usdCourse).toLocaleString('ru-RU') :
                                    Math.round(price / euroCourse).toLocaleString('ru-RU')
                        }{currency}
                    </Button>
                </CardContent>
            </div>
            <div className={styles.dataBlock}>
                <CardContent >
                    <div className={styles.timeWrapper}>
                        <Typography variant="h3" component="div">
                            {startTime}
                        </Typography>
                        <div className={styles.transferWrapper}>
                            <Typography className={styles.transfer} component="div">
                            {transfers === 0 ? '' : transfers} {transfers === 0 ? 'Без пересадок' : transfers === 1 ? 'пересадка' : 'пересадки'}
                            </Typography>
                        </div>
                        <Typography variant="h3" component="div">
                            {endTime}
                        </Typography>
                    </div>
                    <div className={styles.cityWrapper}>
                        <Typography component="div">
                            {start}
                        </Typography>
                        <Typography component="div">
                            {end}
                        </Typography>
                    </div>
                    <div className={styles.dateWrapper}>
                        <Typography component="div">
                            {startDate}
                        </Typography>
                        <Typography component="div">
                            {endDate}
                        </Typography>
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}

export default Ticket;
