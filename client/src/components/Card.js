import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import grayLogo from '../images/logo_gray.png';

const styles = {
    img: {
        maxWidth: "150px",
        minWidth: "150px",
        width: "150px",
        maxHeight: "150px",
        height: "150px"
    },
    cardHeight: {
        width: '350px',
        height: '270px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
};

const Content = ({ page }) => (
    <Card style={styles.cardHeight}>
        <CardMedia style={styles.center}>
            <img src={grayLogo} alt="gray_logo" style={styles.img}></img>
        </CardMedia>
        <CardTitle title="Feature under development" />
        <CardText>
            This page {page} is under construction.Please come back soon...
        </CardText>
    </Card>
);

export default Content;