import React from "react";
import { Button } from "antd";
import { HeartFilled } from '@ant-design/icons';

const FavouriteButton = (props) => {
    return (
        <Button type="primary" onClick={e => props.addToFavourites(props.play)} icon={<HeartFilled />}/>
    );
};

export default FavouriteButton