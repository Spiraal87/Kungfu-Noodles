"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="kfn_cookie_consent"
      style={{
        background: "#1a1a1a",
        borderTop: "1px solid #2a2a2a",
        color: "#a89888",
        fontSize: "13px",
        padding: "12px 20px",
        alignItems: "center",
      }}
      buttonStyle={{
        background: "#cc2200",
        color: "#f5efe6",
        fontSize: "13px",
        fontWeight: "600",
        borderRadius: "4px",
        padding: "8px 20px",
        margin: "0 4px",
        border: "none",
        cursor: "pointer",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#a89888",
        fontSize: "13px",
        borderRadius: "4px",
        padding: "8px 16px",
        margin: "0 4px",
        border: "1px solid #2a2a2a",
        cursor: "pointer",
      }}
      contentStyle={{
        flex: "1 1 auto",
        margin: "4px 0",
      }}
      expires={365}
    >
      We use cookies to improve your experience and analyze site traffic. See our{" "}
      <a
        href="#"
        style={{ color: "#c9843a", textDecoration: "underline" }}
      >
        privacy policy
      </a>{" "}
      for details.
    </CookieConsent>
  );
}
