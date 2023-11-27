import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

export default function ChildrenListItem({
    ...child
}) {

    // console.log(child);

    return(
       
        <tr>
          <td>{child._id}</td>
          <td>{child.firstName}</td>
          <td>{child.lastName}</td>
          <td>{child.DOB}</td>
          <td>{child.gender}</td>
          <td>{child.currentGroup}</td>
          <td>
            <Link to={`/children/${child._id}`} className="details-button">Details</Link>
          <Button as={Link} to={`/children/${child._id}`} variant="primary"  title="DetailedInfo">Details</Button>
          
          </td>
          
        </tr>
       
      
    );
}


