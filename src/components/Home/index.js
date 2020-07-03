import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import List from '../List';
import Search from '../Search';
import { fetchUsers, searchUser } from '../../actions';
import './style.css';

const Home = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.searchedUsers);

    useEffect(() => {
        dispatch(fetchUsers);
    }, [])

    const searchByName = (name) => {
        dispatch(searchUser(name))
    }
    return (
        <React.Fragment>
            <Header />
            <Search searchByName={searchByName} />
            <List users={users} />
            {
                users.length === 0 &&
                <div className="no-data">No data found</div>
            }
        </React.Fragment>
    )
}

export default Home;
