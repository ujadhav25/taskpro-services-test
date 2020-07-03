import React from 'react';
import Rating from '../Rating';
import './style.css';

const ListItem = React.memo((props) => {
    const { user } = props;
    return (
        <div className="card">
            <h1 className="user-name">{user.name}</h1>
            <div className="card-details">
                <h4>Account ID :</h4>
                <span>
                    {user.account}
                </span>
                <hr />
                <div className="apps">
                    <span>Apps</span>
                    <span className="app-count">{Object.keys(user.apps).length}</span>
                </div>

                {
                    Object.keys(user.apps).map(app => (
                        <div key={app} className="app-list">
                            <li key={app}>{user.apps[app].title}</li>
                            <Rating
                                noOfStars={5}
                                user={user.key}
                                account={user.account}
                                apps={user.apps}
                                selectedApp={app}
                                userRating={user.apps[app].ratings}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
});

export default ListItem;