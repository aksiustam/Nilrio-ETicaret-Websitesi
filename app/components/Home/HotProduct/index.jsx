"use client";
import ProductCard from "../../Products/ProductCard";
import ofgimg from "@/public/assets/img/common/logo-france.png";
import bioimg from "@/public/assets/img/common/bio.png";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
const HotProduct = (props) => {
  const { products } = props;
  const indirimProducts = products.filter(
    (product) => product.indirim === true
  );
  const yeniProducts = products.filter((product) => product.yeni === true);
  const ofgProducts = products.filter((product) => product.ofg === true);
  //const ilkProducts = products.filter((product) => product.ilk === true);
  const bioProducts = products.filter((product) => product.bio === true);
  const sortedProducts = [...products].sort((a, b) => b.sells - a.sells);

  return (
    <>
      <section id="hot_Product_area" className="tw-mt-2 md:tw-mt-2 ">
        <Tab.Container defaultActiveKey="yeni" className="tw-bg-gray-300">
          <div className="tabs_center_button tw-bg-gray-300">
            <ul className="nav nav-tabs">
              <li>
                <Nav.Link eventKey="yeni" className="!tw-font-bold">
                  Nouveautés
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey="click" className="!tw-font-bold">
                  Top Ventes
                </Nav.Link>
              </li>

              <li>
                <Nav.Link eventKey="indirim" className="!tw-font-bold">
                  Promotions
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  eventKey="bio"
                  className="!tw-font-bold tw-flex tw-gap-2"
                >
                  <Image
                    src={bioimg}
                    alt="bio"
                    width={25}
                    height={25}
                    className="tw-w-6 tw-h-6"
                  />
                  Produits Bio
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  eventKey="ofg"
                  className="!tw-font-bold tw-flex tw-gap-2"
                >
                  <Image
                    src={ofgimg}
                    alt="bio"
                    width={25}
                    height={25}
                    className="tw-w-6 tw-h-6"
                  />
                  Origine France Garantie
                </Nav.Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tab-content">
                  <Tab.Content>
                    <Tab.Pane eventKey="yeni">
                      <div className="row">
                        {yeniProducts?.slice(0, 8).map((data, index) => (
                          <div
                            className="col-lg-3 col-md-4 col-sm-6 col-6 tw-px-1"
                            key={index}
                          >
                            <ProductCard data={data} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="click">
                      <div className="row">
                        {sortedProducts?.slice(0, 8).map((data, index) => (
                          <div
                            className="col-lg-3 col-md-4 col-sm-6 col-6 tw-px-1"
                            key={index}
                          >
                            <ProductCard data={data} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="indirim">
                      <div className="row">
                        {indirimProducts?.slice(0, 8).map((data, index) => (
                          <div
                            className="col-lg-3 col-md-4 col-sm-6 col-6 tw-px-1"
                            key={index}
                          >
                            <ProductCard data={data} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="bio">
                      <div className="row">
                        {bioProducts?.slice(0, 8).map((data, index) => (
                          <div
                            className="col-lg-3 col-md-4 col-sm-6 col-6 tw-px-1"
                            key={index}
                          >
                            <ProductCard data={data} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="ofg">
                      <div className="row">
                        {ofgProducts?.slice(0, 8).map((data, index) => (
                          <div
                            className="col-lg-3 col-md-4 col-sm-6 col-6 tw-px-1"
                            key={index}
                          >
                            <ProductCard data={data} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </div>
          </div>
        </Tab.Container>
      </section>
    </>
  );
};

export default HotProduct;