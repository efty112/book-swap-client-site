import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Newsletter from "./Newsletter";
import PopularBooks from "./PopularBooks/PopularBooks";
import ReadSwap from "./ReadSwap";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <ReadSwap></ReadSwap>
                <PopularBooks></PopularBooks>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;