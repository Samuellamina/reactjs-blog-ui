import ".././featuredPost/featuredPost.css";
const FeaturedPost = () => {
  return (
    <div>
      <div className="section-title">
        <h2>
          <span>Featured</span>
        </h2>
      </div>
      <div className="card-columns listfeaturedtag">
        {/* begin post */}
        <div className="card">
          <div className="row">
            <div className="col-md-5 wrapthumbnail">
              <a href="post.html">
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/10012636/pexels-photo-10012636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
                  }}
                ></div>
              </a>
            </div>
            <div className="col-md-7">
              <div className="card-block">
                <h2 className="card-title">
                  <a href="post.html">We're living some strange times</a>
                </h2>
                <h4 className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </h4>
                <div className="metafooter">
                  <div className="wrapfooter">
                    <span className="meta-footer-thumb">
                      <a href="author.html">
                        <img
                          className="author-thumb"
                          src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                          alt="Sal"
                        />
                      </a>
                    </span>
                    <span className="author-meta">
                      <span className="post-name">
                        <a href="author.html">Steve</a>
                      </span>
                      <br />
                      <span className="post-date">22 July 2017</span>
                      <span className="dot" />
                      <span className="post-read">6 min read</span>
                    </span>
                    <span className="post-read-more">
                      <a href="post.html" title="Read Story">
                        <svg
                          className="svgIcon-use"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                        >
                          <path
                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end post */}
        {/* begin post */}
        <div className="card">
          <div className="row">
            <div className="col-md-5 wrapthumbnail">
              <a href="post.html">
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/9703505/pexels-photo-9703505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
                  }}
                ></div>
              </a>
            </div>
            <div className="col-md-7">
              <div className="card-block">
                <h2 className="card-title">
                  <a href="post.html">
                    The beauty of this world is in your heart
                  </a>
                </h2>
                <h4 className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </h4>
                <div className="metafooter">
                  <div className="wrapfooter">
                    <span className="meta-footer-thumb">
                      <a href="author.html">
                        <img
                          className="author-thumb"
                          src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                          alt="Sal"
                        />
                      </a>
                    </span>
                    <span className="author-meta">
                      <span className="post-name">
                        <a href="author.html">Jane</a>
                      </span>
                      <br />
                      <span className="post-date">22 July 2017</span>
                      <span className="dot" />
                      <span className="post-read">6 min read</span>
                    </span>
                    <span className="post-read-more">
                      <a href="post.html" title="Read Story">
                        <svg
                          className="svgIcon-use"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                        >
                          <path
                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end post */}
        {/* begin post */}
        <div className="card">
          <div className="row">
            <div className="col-md-5 wrapthumbnail">
              <a href="post.html">
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/9581033/pexels-photo-9581033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
                  }}
                ></div>
              </a>
            </div>
            <div className="col-md-7">
              <div className="card-block">
                <h2 className="card-title">
                  <a href="post.html">Dreaming of Las Vegas Crazyness</a>
                </h2>
                <h4 className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </h4>
                <div className="metafooter">
                  <div className="wrapfooter">
                    <span className="meta-footer-thumb">
                      <a href="author.html">
                        <img
                          className="author-thumb"
                          src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                          alt="Sal"
                        />
                      </a>
                    </span>
                    <span className="author-meta">
                      <span className="post-name">
                        <a href="author.html">Mary</a>
                      </span>
                      <br />
                      <span className="post-date">22 July 2017</span>
                      <span className="dot" />
                      <span className="post-read">6 min read</span>
                    </span>
                    <span className="post-read-more">
                      <a href="post.html" title="Read Story">
                        <svg
                          className="svgIcon-use"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                        >
                          <path
                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end post */}
        {/* begin post */}
        <div className="card">
          <div className="row">
            <div className="col-md-5 wrapthumbnail">
              <a href="post.html">
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/9928412/pexels-photo-9928412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
                  }}
                ></div>
              </a>
            </div>
            <div className="col-md-7">
              <div className="card-block">
                <h2 className="card-title">
                  <a href="post.html">
                    San Francisco at its best view in all seasons
                  </a>
                </h2>
                <h4 className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </h4>
                <div className="metafooter">
                  <div className="wrapfooter">
                    <span className="meta-footer-thumb">
                      <a href="author.html">
                        <img
                          className="author-thumb"
                          src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                          alt="Sal"
                        />
                      </a>
                    </span>
                    <span className="author-meta">
                      <span className="post-name">
                        <a href="author.html">Sal</a>
                      </span>
                      <br />
                      <span className="post-date">22 July 2017</span>
                      <span className="dot" />
                      <span className="post-read">6 min read</span>
                    </span>
                    <span className="post-read-more">
                      <a href="post.html" title="Read Story">
                        <svg
                          className="svgIcon-use"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                        >
                          <path
                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end post */}
      </div>
    </div>
  );
};

export default FeaturedPost;
