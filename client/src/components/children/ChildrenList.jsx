import { Fragment, useEffect, useState } from "react";


import * as childServise from "../../services/childService";

import ChildrenListItem from "../children/ChildrenListItem"
import Table from 'react-bootstrap/Table';


export default function ChildrenList() {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        childServise.getAll()
        .then(result => setChildren(result));
    }, []);

    // console.log(children.length);
    return (
        <>
        <h2>Childrens List</h2>
        
<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th>Group</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
         {children.map((child) => (
            <ChildrenListItem key={child._id} {...child}/>
            
         ))}
        </tbody>
        </Table>
        {(children.length === 0 ) && (
            <h2>No Kids Yet</h2>
        )}

        </>
    )
}

