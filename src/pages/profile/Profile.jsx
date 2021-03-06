import ".././profile/profile.css";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  return (
    <div>
      <Topbar />

      <div className="container">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 col-md-offset-2">
            <div className="mainheading">
              <div className="row post-top-meta authorpage">
                <div className="col-md-10 col-xs-12">
                  <h1>Sal</h1>
                  <span className="author-description">
                    Founder of{" "}
                    <a target="_blank" href="https://www.wowthemes.net">
                      WowThemes.net
                    </a>{" "}
                    and creator of <strong>"Mediumish"</strong> theme that
                    you're currently previewing. I professionally develop
                    premium themes, templates &amp; scripts since the Apocalypse
                    (2012). You can reach me out on the social links below.
                  </span>

                  <a
                    target="_blank"
                    href="https://twitter.com/wowthemesnet"
                    className="btn follow"
                  >
                    Follow
                  </a>
                </div>
                <div className="col-md-2 col-xs-12">
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                    alt="Sal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="graybg authorpage">
        <div className="container">
          <div className="listrecent listrelated">
            {/* begin post */}
            <div className="authorpostbox">
              <div className="card">
                <a href="author.html">
                  <img
                    className="img-fluid img-thumb"
                    src="https://images.pexels.com/photos/3006222/pexels-photo-3006222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      Life is worth living forever and ever
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
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
            {/* end post */}
            {/* begin post */}
            <div className="authorpostbox">
              <div className="card">
                <a href="author.html">
                  <img
                    className="img-fluid img-thumb"
                    src="https://images.pexels.com/photos/9501855/pexels-photo-9501855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      Best European capitals to visit and the costs implied
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
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
            {/* end post */}
            {/* begin post */}
            <div className="authorpostbox">
              <div className="card">
                <a href="author.html">
                  <img
                    className="img-fluid img-thumb"
                    src="https://images.pexels.com/photos/807677/pexels-photo-807677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      10 Things you should learn before visiting
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
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
            {/* end post */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
