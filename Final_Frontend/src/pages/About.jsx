import React from "react";
import Navbar from "./Navbar"; // Import Navbar component
import "../assets/css/About.css"; // Import stylesheet for About page
import { Card, CardContent, Typography } from "@mui/material"; // Import Material UI components

import Footer from "./Footer"; // Import Footer component

const About = () => {
  return (
    <div className="abful">
      <div className="about">
        <Navbar /> {/* Render Navbar component */}
        <main>
          {" "}
          {/* Set background color */}
          <Typography variant="h1">RechargeZone-Plus</Typography>
          <Typography variant="body1">
            {/* Text about company mission */}
            We are passionate about connecting people and creating a seamless
            communication experience.
          </Typography>
          <section>
            <h2>Our Story</h2>
            <Typography variant="body1">
              {/* Text about company background and values */}
              Fiberr was founded in [Year] with the vision of making
              communication effortless and accessible. We believe in the power
              of clear and efficient interaction, and we strive to provide tools
              that empower users to connect and collaborate effectively. Our
              journey began with a desire to bridge communication gaps and
              foster stronger connections. Since then, we've grown into a
              company dedicated to delivering innovative solutions that simplify
              communication for everyone.
            </Typography>
          </section>
          <h2>What We Offer</h2>
          <section className="card-container">
            <Card
              className="feature-card"
              style={{ backgroundColor: "#e6dbc9" }}
            >
              {" "}
              {/* Set card color */}
              <CardContent>
                <Typography variant="h5">Scheduled Recharges</Typography>

                <Typography variant="body2">
                  Allow users to schedule automatic recharges for prepaid or
                  postpaid to avoid running out of balance or missing due dates.
                </Typography>
              </CardContent>
            </Card>
            <br />
            <hr />
            <Card
              className="feature-card"
              style={{ backgroundColor: "#e6dbc9" }}
            >
              {" "}
              {/* Set card color */}
              <CardContent>
                <Typography variant="h5">Low Balance Alerts</Typography>
                <Typography variant="body2">
                  Allows Users to set up notifications to alert about low
                  balance and prompt them to recharge for prepaid bills.
                </Typography>
              </CardContent>
            </Card>
            <br />
            <hr />
            <Card
              className="feature-card"
              style={{ backgroundColor: "#e6dbc9" }}
            >
              {" "}
              {/* Set card color */}
              <CardContent>
                <Typography variant="h5">Referral Programs</Typography>
                <Typography variant="body2">
                  Implement a referral program where users can earn rewards or
                  discounts by inviting friends to use the app.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="feature-card"
              style={{ backgroundColor: "#e6dbc9" }}
            >
              {" "}
              {/* Set card color */}
              <CardContent>
                <Typography variant="h5">Multi-Wallet Support</Typography>
                <Typography variant="body2">
                  Enable users to recharge using various payment methods like
                  debit/credit cards, UPI, e-wallets, net banking, etc.
                </Typography>
              </CardContent>
            </Card>
            <br />
            <hr />
            {/* Repeat for remaining features */}
            <Card
              className="feature-card"
              style={{ backgroundColor: "#e6dbc9" }}
            >
              {" "}
              {/* Set card color */}
              <CardContent>
                <Typography variant="h5">Investment Options</Typography>
                <Typography variant="body2">
                  Integrate micro-investment options within the app, allowing
                  users to invest small amounts while recharging their phones.
                </Typography>
              </CardContent>
            </Card>
            <br />
            <hr />
            <Card
              className="feature-card"
              style={{ backgroundColor: "#e6dbc9" }}
            >
              {" "}
              {/* Set card color */}
              <CardContent>
                <Typography variant="h5">Offers & Discounts</Typography>
                <Typography variant="body2">
                  Display and allow users to avail of ongoing promotional
                  offers, cashback deals, or discounts on recharges from
                  operators or your platform.
                </Typography>
              </CardContent>
            </Card>
          </section>
        </main>
        <Footer /> {/* Render Footer component */}
      </div>
    </div>
  );
};

export default About;
