import { Link } from 'react-router-dom';
function AboutPage() {
    return (
        <>
            <p>Products</p>
            <p>
                go to <Link to="/"> the list of the Products</Link>
            </p>
        </>
    )
}
export default AboutPage;