import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { storeFillPeople } from "../../features/people/peopleSlice";
import { serverGetAllUsers } from "../../http/usersAPI";
import { RootState } from "../../store/store";

import Person from "../../components/Person/Person";

import "./PeoplePage.css";

var PeoplePage: React.FC = () => {
    var { people } = useSelector((state: RootState) => state.people);
    var dispatch = useDispatch();

    useEffect(() => {
        serverGetAllUsers().then(serverResponse => 
            serverResponse.serverMessage === "success" && 
            serverResponse.payload && 
            dispatch(storeFillPeople(serverResponse.payload))
        );
    }, []);

    return (
        <div className="list">
            {people.map((person, index) => 
                <Person key={index} {...person} />
            )}
        </div>
    );
};

export default PeoplePage;
