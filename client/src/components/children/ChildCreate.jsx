export default function ChildCreate() {
    const createChildSubmitHandler(){
        
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createChildSubmitHandler}>
                <div className="container">
                    <h1>Register New Child</h1>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="title" />
                    <label htmlFor="midName">Middle Name:</label>
                    <input type="text" id="midName" name="title" />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="firstName" name="title" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter Child category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="child-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Register" />
                </div>
            </form>
        </section>
    );
}