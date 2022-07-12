/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
      <>
        <div className="page-header clear-filter" filter-color="blue">
          <div
              className="page-header-image"
              style={{
                backgroundImage:
                    "url(" + require("assets/img/header.jpg").default + ")",
              }}
              ref={pageHeader}
          />
          <Container>
            <div className="content-center brand">
              <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/mockLogo.png").default}
              />
              <h1 className="h1-seo">Suncrest Landscaping</h1>
              <h3>Exceeding expectations for 20+ years
                <hr
                    style={{
                      background: 'white',
                      color: 'white',
                      borderColor: 'white',
                      height: '1px',
                    }}/>
                4.8 stars on google!
              </h3>
            </div>
          </Container>
        </div>
      </>
  );
}

export default IndexHeader;
