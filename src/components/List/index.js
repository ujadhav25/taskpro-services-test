import React from 'react';
import ListItem from '../ListItem';
import './style.css';

const List = React.memo((props) => {
    return (
        <div className="card-container">
            {
                props.users.map(user => (

                    <ListItem user={user} key={user.key} />
                ))
            }
        </div>

    )
});

export default List;