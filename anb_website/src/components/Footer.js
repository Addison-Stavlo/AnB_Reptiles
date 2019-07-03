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
        <a href="https://www.instagram.com/anb_reptiles/" target="_blank">
          Instagram
        </a>
        .
      </p>
      <div className="snap-widget-holder">
        <iframe
          src="https://snapwidget.com/embed/708941"
          className="snapwidget-widget"
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
