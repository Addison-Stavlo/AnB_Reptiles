import React from "react";
import styled from "styled-components";

export default function Footer(props) {
  const FooterBox = styled.div`
    color: rgb(230, 230, 230);
    h2 {
      /* width: 50%; */
      font-size: calc(16px + 2vmin);
      padding-top: calc(5px + 3vmin);
    }

    .snap-widget-holder {
      max-width: 100vw;
      padding: 1px;

      .snapwidget-widget-small,
      .snapwidget-widget-medium {
        display: none;
      }

      @media (max-width: 700px) {
        .snapwidget-widget-small {
          display: block;
        }
        .snapwidget-widget-large,
        .snapwidget-widget-medium {
          display: none;
        }
      }

      @media (min-width: 700px) and (max-width: 1500px) {
        .snapwidget-widget-medium {
          display: block;
        }
        .snapwidget-widget-large,
        .snapwidget-widget-small {
          display: none;
        }
      }
    }

    a {
      color: white;
    }
  `;

  return (
    <FooterBox>
      <h2>Some Pretty Pictures!</h2>
      <p>
        See more at our{" "}
        <a
          href="https://www.instagram.com/anb_reptiles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        .
      </p>
      <div className="snap-widget-holder">
        <iframe
          title="wide image grid"
          src="https://snapwidget.com/embed/708941"
          className="snapwidget-widget-large"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{
            width: "100%",
            height: "100vw"
          }}
        />

        <iframe
          title="small image grid"
          src="https://snapwidget.com/embed/711206"
          className="snapwidget-widget-small"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{
            width: "100%",
            height: "160vw"
          }}
        />

        <iframe
          title="image grid"
          src="https://snapwidget.com/embed/711209"
          className="snapwidget-widget-medium"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{
            width: "100%",
            height: "100vw"
          }}
        />
      </div>
    </FooterBox>
  );
}
