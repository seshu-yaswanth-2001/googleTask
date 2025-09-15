import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaRedditAlien,
  FaEnvelope,
  FaDiscord,
  FaLink,
} from "react-icons/fa";
import amz from "../../assets/image.png";
import "./socialShare.css";

const SocialShare = () => {
  const currentURL = window.location.href;
  const [copied, setCopied] = useState(false);

  const ogUrlMeta = document.querySelector('meta[property="og:url"]');
  const canonicalShareUrl = ogUrlMeta?.content || window.location.origin;

  const pageUrl = encodeURIComponent(canonicalShareUrl);
  const shareText = encodeURIComponent("Check this out!");
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    whatsapp: `https://wa.me/?text=${pageUrl}%20${shareText}`,
    telegram: `https://t.me/share/url?url=${pageUrl}&text=${shareText}`,
    reddit: `https://www.reddit.com/submit?url=${pageUrl}&title=${shareText}`,
    email: `mailto:?subject=${shareText}&body=${pageUrl}`,
  };

  const handleClick = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, [2000]);
  };

  const openURL = (url) => {
    window.open(url, "_blank", "width=600, height=400");
  };

  return (
    <div className="social-share">
      <div className="buttons">
        <button
          className="social-btn linkedin"
          aria-label="LinkedIn"
          onClick={() => openURL(shareUrls.linkedin)}
        >
          <FaLinkedinIn />
        </button>
        <button
          className="social-btn telegram"
          aria-label="Telegram"
          onClick={() => openURL(shareUrls.telegram)}
        >
          <FaTelegramPlane />
        </button>
        <button
          className="social-btn reddit"
          aria-label="Reddit"
          onClick={() => openURL(shareUrls.reddit)}
        >
          <FaRedditAlien />
        </button>
        <button
          className="social-btn email"
          aria-label="Email"
          onClick={() => openURL(shareUrls.email)}
        >
          <FaEnvelope />
        </button>

        <button
          className="social-btn facebook"
          aria-label="Facebook"
          onClick={() => openURL(shareUrls.facebook)}
        >
          <FaFacebookF />
        </button>
        <button
          className="social-btn whatsapp"
          aria-label="WhatsApp"
          onClick={() => openURL(shareUrls.whatsapp)}
        >
          <FaWhatsapp />
        </button>
      </div>

      <div className="copy-link-container">
        <p className="copy-label">Or copy link:</p>
        <div className="copy-link-box">
          <FaLink className="link-icon" />
          <input type="text" defaultValue={currentURL} />
          <button onClick={() => handleClick(currentURL)}>
            {copied ? "copied" : "Copy Link"}
          </button>
        </div>
      </div>
      <img src={amz} alt="amz" />
    </div>
  );
};

export default SocialShare;
