import React, { useEffect, useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState(() => {
    const storedUrls = localStorage.getItem("shortenUrl");
    return storedUrls ? JSON.parse(storedUrls) : [];
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);


  const BACKEND_URL =
    process.env.NODE_ENV === "production"
      ? "https://your-vercel-backend.vercel.app/api"
      : "http://localhost:5000";


  useEffect(() => {
    localStorage.setItem("shortenUrl", JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!url) {
      setErrorMessage("Please add a link");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/shortenUrl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });


      const data = await response.json();

      if (response.ok) {
        setShortenedUrls([
          ...shortenedUrls,
          {
            originalUrl: url,
            shortUrl: data.shortUrl,
          },
        ]);
        setUrl("");
        setErrorMessage("");
      } else {
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setErrorMessage("Failed to fetch. Is the server running?");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (shortUrl, index) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleClearAll = () => {
    setShortenedUrls([]);
    localStorage.removeItem("shortenUrl");
  };

  return (
    <section className="shorten">
      <div className="container">
        <div className="shorten__content">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-control">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={errorMessage ? "error-input" : ""}
              />
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>
            <button
              type="submit"
              className="btn"
              data-type="wide"
              disabled={loading}
            >
              {loading ? "Loading..." : "Shorten It!"}
            </button>
          </form>
        </div>

        {shortenedUrls.length > 0 && (
          <div className="shorten__cards">
            {shortenedUrls.map((item, index) => (
              <div key={index} className="shorten__card">
                <div className="actual-link">
                  <span>{item.originalUrl}</span>
                </div>

                <hr className="line" />

                <div className="shorten__link">
                  <a
                    href={item.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.shortUrl}
                  </a>
                  <button
                    className={`btn ${copiedIndex === index ? "copied" : ""}`}
                    data-type="wide"
                    onClick={() => handleCopy(item.shortUrl, index)}
                  >
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            ))}

            <button onClick={handleClearAll} className="btn clear-btn">
              Clear All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shorten;
