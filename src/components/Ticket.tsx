import styles from './Ticket.module.scss';
import { Card, CardContent, Button } from '@mui/material';

function Ticket() {
    return (
        <Card className={styles.card}>
            <div className={styles.buttonBlock}>
                <CardContent >
                    <img src={require('../assets/logo.gif')} alt="logo" />
                    <Button variant="contained" color="warning">
                        Купить<br />за
                    </Button>
                </CardContent>
            </div>
            <div className={styles.dataBlock}>
                <CardContent >

                </CardContent>
            </div>
        </Card>
    )
}

export default Ticket;
