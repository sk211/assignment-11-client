import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import ExtraSecton from "../ExtraSection/ExtraSecton";
import TopPlaces from "../TopPlaces/TopPlaces";
import "./Home.css";

const Home = () => {
  // const { user } = useAuth();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://infinite-oasis-45429.herokuapp.com/package")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div>
      <Banner />
      <Container className="my-5">
        <ExtraSecton></ExtraSecton>
      </Container>
      <Container className="image_card">
        <div className="row my-5">
          <h3> All Packages</h3>
        </div>
        <Row xs={1} md={3} className="g-4">
          {packages
            .filter((item, index) => index < 6)
            .map((packageNew) => (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={packageNew.photoUrl}
                    alt="image not found"
                  />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title>{packageNew.name}</Card.Title>
                      <span class="itemDaysInfo">4N/5D</span>
                    </div>

                    <div class="makeFlex">
                      <div class="packageDaySection">
                        <div class="d-flex ">
                          <span class="packageDayTag ">4N</span>
                          <p class="darkGreyText font12">Maldives</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <ul class="itineraryList">
                          <li>
                            <p class="height22">
                              <i class="fas fa-city"></i>
                              <p class="font11 blackText">Hotels</p>
                            </p>
                          </li>
                          <li>
                            <p class="height22">
                              <i class="fas fa-plane"></i>
                              <p class="font11 blackText">Flights</p>
                            </p>
                          </li>
                          <li>
                            <p class="height22">
                              <i class="fas fa-hiking"></i>
                              <p class="font11 blackText">Activities</p>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <h4 className="price">$ {packageNew.price}</h4>
                    </div>

                    <Card.Text>{packageNew.descrip.slice(0, 150)}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <p>Customize</p>
                    <Link to={`/OrderPlaced/${packageNew._id}`}>
                      <Button>Book Now</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>

      <Container className=" py-5 text-center">
        <h2> TOP PLACES</h2>
        <p className=" px-5 text-muted">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
        <Row xs={1} md={4} className="g-4">
          <TopPlaces
            name="Sheraton Maldives Full Moon Resort "
            img="https://cdn2.hometogo.net/small/v1/2e4/c43/d393d6240e0e69d93a1d0723e5.jpg"
          ></TopPlaces>
          <TopPlaces
            name="Reethi Beach Resort"
            img="https://cdn2.hometogo.net/medium/v1/4f1/948/09177783dced24648821b637a2.jpg"
          ></TopPlaces>
          <TopPlaces
            name="Soneva Jani"
            img="https://cdn2.hometogo.net/small/v1/0f8/ccc/4eae6702d440f148129bc803de.jpg"
          ></TopPlaces>
          <TopPlaces
            name="Cora Cora Maldives - Premium All-Inclusive Resort"
            img="https://cdn2.hometogo.net/medium/v1/28f/32b/16d2ee12aaa4b8718f2cdd8cba.jpg"
          ></TopPlaces>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
