import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/en/Header/Header";

const productsItems: any = [

]

const FavProducts = () => {
  return (
    <div className="FavProducts">
      <Header />
      <div className="container">
        <div className="content">
          <div className="products">
            {productsItems.map((item: any) => {
              return (
                <div className="productItem"></div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavProducts;
