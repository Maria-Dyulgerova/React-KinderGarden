import Search from ".././Search"
import ChildrenList from "../children/ChildrenList"

function ChildrenListContainer() {
    return (
        <section className="card users-container">
           
            <Search/>
            <ChildrenList/>
            
            {/* <button className="btn-add btn" onClick={createChildClickHandler}>Add new child</button> */}
        </section>

    )

}
export default ChildrenListContainer;