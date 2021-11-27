import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Servicess.css";

const Services = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://infinite-oasis-45429.herokuapp.com/package")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <Container>
      <div className="row my-5">
        <h3> All Packages</h3>
      </div>
      <Row xs={1} md={3} className="g-4">
        {packages.map((packageNew) => (
          <Col>
            <Card className="image_card">
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
                  <h4 className="price">{packageNew.price}</h4>
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
  );
};

export default Services;
