import React from "react";
import styled from "styled-components";

export default function Footer(props) {
  const FooterBox = styled.div`
    .snap-widget-holder {
      max-width: 100vw;
      padding: 1px;
    }
  `;
  return (
    <FooterBox>
      <h2>Some Pretty Pictures!</h2>
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
