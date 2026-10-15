import { Link } from "react-router-dom";

function CreateBanner({ banner }) {
    return (
        <div className="banner-item">
            <Link className="banner-link" to={banner.link || "#"}>
                <img className="banner-image" src={banner.mobile ? banner.mobile : banner.url} alt={banner.alt} />
            </Link>
        </div>
    );
}

export default CreateBanner;