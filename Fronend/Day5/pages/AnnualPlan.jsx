import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Annualp = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: 40 }}>
          <div style={{ display: "flex", marginRight: "50px" }}>
            <h1 style={{ fontSize: "20px", color: "red", marginLeft: "30px" }}>
              Unlimited 5g
            </h1>
            <div>
              <h2
                style={{ fontSize: "13px", marginTop: "20px", marginLeft: 20 }}
              >
                Annual plan
              </h2>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <h1 style={{ fontSize: 20, marginLeft: 40 }}>₹2999</h1>
            <div>
              <h2 style={{ fontSize: 13, marginTop: 15, marginLeft: 80 }}>
                view details
              </h2>
            </div>
          </div>
          <hr></hr>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 40 }}>Validity</p>
            <div>
              <p style={{ marginLeft: 110 }}>Data</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 40 }}>365 days</p>
            <div>
              <p style={{ marginLeft: 70 }}>2.5 GB/Day</p>
            </div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <NavLink to="/pay">
              <button
                style={{
                  width: 200,
                  height: 30,
                  marginLeft: 30,
                  backgroundColor: "blue",
                  borderRadius: 30,
                  padding: "10 20",
                  color: "white",
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                Recharge
                
              </button>
              </NavLink>
            </Typography>
          </CardContent>
        </Card>

        <div style={{ marginLeft: "40px" }}>
          <Card sx={{ maxWidth: 345 }} style={{ borderRadius: 40 }}>
            <div style={{ display: "flex", marginRight: "50px" }}>
              <h1
                style={{ fontSize: "20px", color: "red", marginLeft: "40px" }}
              >
                Unlimited 5g
              </h1>
              <div>
                <h2
                  style={{
                    fontSize: "13px",
                    marginTop: "20px",
                    marginLeft: 30,
                  }}
                >
                  Annual plan
                </h2>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: 20, marginLeft: 50 }}>₹2545</h1>
              <div>
                <h2 style={{ fontSize: 13, marginTop: 15, marginLeft: 90 }}>
                  view details
                </h2>
              </div>
            </div>
            <hr></hr>
            <div style={{ display: "flex" }}>
              <p style={{ marginLeft: 50 }}>Validity</p>
              <div>
                <p style={{ marginLeft: 120 }}>Data</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginLeft: 50 }}>336 days</p>
              <div>
                <p style={{ marginLeft: 80 }}>1.5 GB/Day</p>
              </div>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <NavLink to="/pay">
                <button
                  style={{
                    width: 200,
                    height: 30,
                    marginLeft: 30,
                    backgroundColor: "blue",
                    borderRadius: 30,
                    padding: "10 20",
                    color: "white",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                 Recharge
                </button>
                </NavLink>
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div style={{ marginLeft: "40px" }}>
          <Card sx={{ maxWidth: 345 }} style={{ borderRadius: 40 }}>
            <div style={{ display: "flex", marginRight: "50px" }}>
              <h1
                style={{ fontSize: "20px", color: "red", marginLeft: "40px" }}
              >
                Unlimited 5g
              </h1>
              <div>
                <h2
                  style={{
                    fontSize: "13px",
                    marginTop: "20px",
                    marginLeft: 30,
                  }}
                >
                  Annual plan
                </h2>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: 20, marginLeft: 50 }}>₹3225</h1>
              <div>
                <h2 style={{ fontSize: 13, marginTop: 15, marginLeft: 90 }}>
                  view details
                </h2>
              </div>
            </div>
            <hr></hr>
            <div style={{ display: "flex" }}>
              <p style={{ marginLeft: 50 }}>Validity</p>
              <div>
                <p style={{ marginLeft: 120 }}>Data</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginLeft: 50 }}>325 days</p>
              <div>
                <p style={{ marginLeft: 80 }}>1.5 GB/Day</p>
              </div>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <NavLink to="/pay">
                <button
                  style={{
                    width: 200,
                    height: 30,
                    marginLeft: 30,
                    backgroundColor: "blue",
                    borderRadius: 30,
                    padding: "10 20",
                    color: "white",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  Recharge
                </button>
                </NavLink>
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div style={{ marginLeft: "40px" }}>
          <Card sx={{ maxWidth: 345 }} style={{ borderRadius: 40 }}>
            <div style={{ display: "flex", marginRight: "50px" }}>
              <h1
                style={{ fontSize: "20px", color: "red", marginLeft: "40px" }}
              >
                Unlimited 5g
              </h1>
              <div>
                <h2
                  style={{
                    fontSize: "13px",
                    marginTop: "20px",
                    marginLeft: 30,
                  }}
                >
                  Popular plan
                </h2>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: 20, marginLeft: 50 }}>₹3000</h1>
              <div>
                <h2 style={{ fontSize: 13, marginTop: 15, marginLeft: 90 }}>
                  view details
                </h2>
              </div>
            </div>
            <hr></hr>
            <div style={{ display: "flex" }}>
              <p style={{ marginLeft: 50 }}>Validity</p>
              <div>
                <p style={{ marginLeft: 120 }}>Data</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginLeft: 50 }}>365 days</p>
              <div>
                <p style={{ marginLeft: 80 }}>1 GB/Day</p>
              </div>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <NavLink to="/pay">
                <button
                  style={{
                    width: 200,
                    height: 30,
                    marginLeft: 30,
                    backgroundColor: "blue",
                    borderRadius: 30,
                    padding: "10 20",
                    color: "white",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  Recharge
                </button>
                </NavLink>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Annualp;
