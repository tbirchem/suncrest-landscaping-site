import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function BasicElements() {
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <br/>
        <br/>
        <Container>
          <h3 className="title">About Suncrest</h3>
          <hr/>
          <p className="category">History - </p>
          <div className="typography-line">
            <p className="font-weight-normal">
              Suncrest Landscape & Design is a family owned and operated company.
              Through 20+ years of pace setting and achievements, Suncrest has established itself as the area leader in landscape design, landscaping, and wall and patio contracting.
              <br/>
              <br/>
              Our goal is more than a perfect outdoor living space.  It’s about making the whole experience always driven by the style and lifestyle of the homeowner,
              imbued with our love for creative design, and crafted with the highest of skill. We offer a friendly, open attitude, informative dialogue and thorough
              management throughout the entire project.
            </p>
          </div>
          <p className="category">Location - </p>
          <p className="font-weight-normal">
            Suncrest Landscape & Design is based out of Camas, Washington, serving the greater Portland, OR metro area.
            We strive to support local business in the PNW region, which is why all products are purchased locally.
          </p>
        </Container>
        <br/>
        <br/>
      </div>
    </>
  );
}

export default BasicElements;
