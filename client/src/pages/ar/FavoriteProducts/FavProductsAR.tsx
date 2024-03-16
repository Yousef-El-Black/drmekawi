import Footer from "../../../components/Footer/Footer";
import HeaderAR from "../../../components/ar/Header/HeaderAR";
import "./favproductsar.scss";
import { Link } from "react-router-dom";

const productsItems: any = [
  {
    name: "اورال بي - برو 100",
    link: "https://www.amazon.eg/%D9%81%D8%B1%D8%B4%D8%A7%D8%A9-%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9-%D8%A8%D8%B1%D9%88-%D8%A8%D8%A7%D9%84%D8%A8%D8%B7%D8%A7%D8%B1%D9%8A%D8%A9/dp/B07XF8NT49?ref_=Oct_d_otopr_d_21858237031_1&pd_rd_w=TMfm6&content-id=amzn1.sym.725b2570-7cce-4f90-8aa3-2ef26fad9356&pf_rd_p=725b2570-7cce-4f90-8aa3-2ef26fad9356&pf_rd_r=CBMAN7EFDXA69YPZV469&pd_rd_wg=I0aQS&pd_rd_r=7243cef2-391c-4d88-8621-1026c07e2ebc&pd_rd_i=B07XF8NT49",
    img: "https://m.media-amazon.com/images/I/71lC8ATbdtL._AC_SX522_.jpg",
  },
  {
    name: "ادفانسيد واي بروتين - نكهة الفراوله",
    link: "https://www.amazon.eg/%D8%A8%D8%B1%D9%88%D8%AA%D9%8A%D9%86-%D8%A7%D9%84%D9%84%D8%A8%D9%86-%D8%A8%D9%86%D9%83%D9%87%D8%A9-%D8%A7%D9%84%D9%81%D8%B1%D8%A7%D9%88%D9%84%D8%A9-%D8%A7%D8%AF%D9%81%D8%A7%D9%86%D8%B3%D8%AF/dp/B08ZNW675P?ref_=Oct_d_orecs_d_21858222031_2&pd_rd_w=EwALl&content-id=amzn1.sym.2c337e9a-e88b-49a1-9836-199ddf3a1ebf&pf_rd_p=2c337e9a-e88b-49a1-9836-199ddf3a1ebf&pf_rd_r=Z52SYYVEM8B5NC34GS2J&pd_rd_wg=ZSywn&pd_rd_r=aa236673-1a61-40d0-9f19-9dc1111e2659&pd_rd_i=B08ZNW675P",
    img: "https://m.media-amazon.com/images/I/61Ozr0fbFVL._AC_SX569_.jpg",
  },
  {
    name: "حذاء رياضي للرجال يو اس بولو",
    link: "https://www.amazon.eg/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A-%D9%84%D9%84%D8%B1%D8%AC%D8%A7%D9%84-%D8%A8%D9%88%D9%84%D9%88%D8%8C-%D9%84%D9%84%D8%A8%D8%A7%D9%84%D8%BA%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D9%86%D8%B3%D9%8A%D9%86/dp/B0B6V9V5J5/ref=sr_1_4_sspa?crid=38KNOQCRE8MSB&dib=eyJ2IjoiMSJ9.mBd_fVoyrlGKJIQnFiXkAe3OjShwJTnft3cxOhtSyHg7dlXkBVDYubZP2V568ajxuq4_mET1Nnbf956lGszshK18WP-hnWAJrKeR4YiyHE00n0HyjKW-924tC5S49i3eIMPP3KWeMpdrqpqAVZGIfvOcuK7LbnuuOTp2lCdIXBP4rx7NwiTcEKWyU06BRJpSFvGyvhsVVJLz3mgZ7wJZvT8vJnZOoNqqyfSDwjjjrlYy9xjtbzNMMH2zLPK3-0-vekkFCrCE6hXm4pMqKstjmBbja5FIZlHv1eCoNmUXzBI._7j3lh6B2QFcJuM3mfezE_ctCuXnJ6_xWdYKgk5Wd_g&dib_tag=se&keywords=Sneakers&qid=1710128125&s=fashion&sprefix=s%2Cfashion%2C588&sr=1-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    img: "https://m.media-amazon.com/images/I/61JF7zbG8YL._AC_SY695_.jpg",
  },
  {
    name: "حذاء رياضي للرجال يو اس بولو",
    link: "https://www.amazon.eg/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A-%D9%84%D9%84%D8%B1%D8%AC%D8%A7%D9%84-%D8%A8%D9%88%D9%84%D9%88%D8%8C-%D9%84%D9%84%D8%A8%D8%A7%D9%84%D8%BA%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D9%86%D8%B3%D9%8A%D9%86/dp/B0B6V9V5J5/ref=sr_1_4_sspa?crid=38KNOQCRE8MSB&dib=eyJ2IjoiMSJ9.mBd_fVoyrlGKJIQnFiXkAe3OjShwJTnft3cxOhtSyHg7dlXkBVDYubZP2V568ajxuq4_mET1Nnbf956lGszshK18WP-hnWAJrKeR4YiyHE00n0HyjKW-924tC5S49i3eIMPP3KWeMpdrqpqAVZGIfvOcuK7LbnuuOTp2lCdIXBP4rx7NwiTcEKWyU06BRJpSFvGyvhsVVJLz3mgZ7wJZvT8vJnZOoNqqyfSDwjjjrlYy9xjtbzNMMH2zLPK3-0-vekkFCrCE6hXm4pMqKstjmBbja5FIZlHv1eCoNmUXzBI._7j3lh6B2QFcJuM3mfezE_ctCuXnJ6_xWdYKgk5Wd_g&dib_tag=se&keywords=Sneakers&qid=1710128125&s=fashion&sprefix=s%2Cfashion%2C588&sr=1-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    img: "https://m.media-amazon.com/images/I/61JF7zbG8YL._AC_SY695_.jpg",
  },
  {
    name: "حذاء رياضي للرجال يو اس بولو",
    link: "https://www.amazon.eg/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A-%D9%84%D9%84%D8%B1%D8%AC%D8%A7%D9%84-%D8%A8%D9%88%D9%84%D9%88%D8%8C-%D9%84%D9%84%D8%A8%D8%A7%D9%84%D8%BA%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D9%86%D8%B3%D9%8A%D9%86/dp/B0B6V9V5J5/ref=sr_1_4_sspa?crid=38KNOQCRE8MSB&dib=eyJ2IjoiMSJ9.mBd_fVoyrlGKJIQnFiXkAe3OjShwJTnft3cxOhtSyHg7dlXkBVDYubZP2V568ajxuq4_mET1Nnbf956lGszshK18WP-hnWAJrKeR4YiyHE00n0HyjKW-924tC5S49i3eIMPP3KWeMpdrqpqAVZGIfvOcuK7LbnuuOTp2lCdIXBP4rx7NwiTcEKWyU06BRJpSFvGyvhsVVJLz3mgZ7wJZvT8vJnZOoNqqyfSDwjjjrlYy9xjtbzNMMH2zLPK3-0-vekkFCrCE6hXm4pMqKstjmBbja5FIZlHv1eCoNmUXzBI._7j3lh6B2QFcJuM3mfezE_ctCuXnJ6_xWdYKgk5Wd_g&dib_tag=se&keywords=Sneakers&qid=1710128125&s=fashion&sprefix=s%2Cfashion%2C588&sr=1-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    img: "https://m.media-amazon.com/images/I/61JF7zbG8YL._AC_SY695_.jpg",
  },
  {
    name: "حذاء رياضي للرجال يو اس بولو",
    link: "https://www.amazon.eg/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A-%D9%84%D9%84%D8%B1%D8%AC%D8%A7%D9%84-%D8%A8%D9%88%D9%84%D9%88%D8%8C-%D9%84%D9%84%D8%A8%D8%A7%D9%84%D8%BA%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D9%86%D8%B3%D9%8A%D9%86/dp/B0B6V9V5J5/ref=sr_1_4_sspa?crid=38KNOQCRE8MSB&dib=eyJ2IjoiMSJ9.mBd_fVoyrlGKJIQnFiXkAe3OjShwJTnft3cxOhtSyHg7dlXkBVDYubZP2V568ajxuq4_mET1Nnbf956lGszshK18WP-hnWAJrKeR4YiyHE00n0HyjKW-924tC5S49i3eIMPP3KWeMpdrqpqAVZGIfvOcuK7LbnuuOTp2lCdIXBP4rx7NwiTcEKWyU06BRJpSFvGyvhsVVJLz3mgZ7wJZvT8vJnZOoNqqyfSDwjjjrlYy9xjtbzNMMH2zLPK3-0-vekkFCrCE6hXm4pMqKstjmBbja5FIZlHv1eCoNmUXzBI._7j3lh6B2QFcJuM3mfezE_ctCuXnJ6_xWdYKgk5Wd_g&dib_tag=se&keywords=Sneakers&qid=1710128125&s=fashion&sprefix=s%2Cfashion%2C588&sr=1-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    img: "https://m.media-amazon.com/images/I/61JF7zbG8YL._AC_SY695_.jpg",
  },
  {
    name: "حذاء رياضي للرجال يو اس بولو",
    link: "https://www.amazon.eg/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A-%D9%84%D9%84%D8%B1%D8%AC%D8%A7%D9%84-%D8%A8%D9%88%D9%84%D9%88%D8%8C-%D9%84%D9%84%D8%A8%D8%A7%D9%84%D8%BA%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D9%86%D8%B3%D9%8A%D9%86/dp/B0B6V9V5J5/ref=sr_1_4_sspa?crid=38KNOQCRE8MSB&dib=eyJ2IjoiMSJ9.mBd_fVoyrlGKJIQnFiXkAe3OjShwJTnft3cxOhtSyHg7dlXkBVDYubZP2V568ajxuq4_mET1Nnbf956lGszshK18WP-hnWAJrKeR4YiyHE00n0HyjKW-924tC5S49i3eIMPP3KWeMpdrqpqAVZGIfvOcuK7LbnuuOTp2lCdIXBP4rx7NwiTcEKWyU06BRJpSFvGyvhsVVJLz3mgZ7wJZvT8vJnZOoNqqyfSDwjjjrlYy9xjtbzNMMH2zLPK3-0-vekkFCrCE6hXm4pMqKstjmBbja5FIZlHv1eCoNmUXzBI._7j3lh6B2QFcJuM3mfezE_ctCuXnJ6_xWdYKgk5Wd_g&dib_tag=se&keywords=Sneakers&qid=1710128125&s=fashion&sprefix=s%2Cfashion%2C588&sr=1-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    img: "https://m.media-amazon.com/images/I/61JF7zbG8YL._AC_SY695_.jpg",
  },
];

const FavProductsAR = () => {
  return (
    <div className="favProductsAr">
      <HeaderAR />
      <div className="container">
        <div className="content">
          <div className="products">
            {productsItems.map((item: any) => {
              return (
                <div className="productItem">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="text">
                    <div className="title">{item.name}</div>
                    <Link to={item.link} target="_blank">
                      <button>عرض</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavProductsAR;
