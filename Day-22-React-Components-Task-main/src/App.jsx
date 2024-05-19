import "./App.css";
import Feature from "./components/Feature";
import ShowcaseItem from "./components/ShowcaseItem";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <a className="btn btn-primary" href="#signup">
            Sign Up
          </a>
        </div>
      </div>

      <header className="headimg">
        <h1>Generate more leads with a </h1>
        <h1>professional landing page!</h1>
        <div className="overlay">
          <div className="middle-section">
            <form className="email-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Feature
                icon="fa-solid fa-window-maximize"
                title="Fully Responsive"
                description="This theme will look great on any device, no matter the size!"
              />
            </div>
            <div className="col-lg-4">
              <Feature
                icon="fa-solid fa-layer-group"
                title="Bootstrap 5 Ready"
                description="Featuring the latest build of the new Bootstrap 5 framework!"
              />
            </div>
            <div className="col-lg-4">
              <Feature
                icon="fa-solid fa-terminal"
                title="Easy to Use"
                description="Ready to use with your own content, or customize the source files!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <div className="container-fluid p-0">
          <ShowcaseItem
            order="order-lg-1"
            imgUrl="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"
            title="Fully Responsive Design"
            description="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
          />
          <ShowcaseItem
            order="order-lg-2"
            imgUrl="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"
            title="Updated For Bootstrap 5"
            description="Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
          />
          <ShowcaseItem
            order="order-lg-1"
            imgUrl="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"
            title="Easy to Use & Customize"
            description="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials text-center bg-light">
        <div className="testimonial-container">
          <h2 className="testimonials-title mb-5">What people are saying...</h2>
          <div className="row">
            <div className="col-lg-4">
              <Testimonial
                imgSrc="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg"
                name="Margaret E."
                quote="This is fantastic! Thanks so much guys!"
              />
            </div>
            <div className="col-lg-4">
              <Testimonial
                imgSrc="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg"
                name="Fred S."
                quote="Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
              />
            </div>
            <div className="col-lg-4">
              <Testimonial
                imgSrc="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg"
                name="Sarah W."
                quote="Thanks so much for making these free resources available to us!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up */}
      <section className="signUpimg">
        <h2>Ready to get started? Sign up now!</h2>
        <div className="overlaytwo">
          <div className="end-section">
            <form className="signup-form">
              <input type="email" placeholder="Email Address" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-light">
        <div className="container">
          <div className="footerRow d-flex justify-content-between align-items-center">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#!">About</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Contact</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Terms of Use</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                © Your Website 2023. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
              <ul className="list-inline mb-0 justify-content-end">
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
