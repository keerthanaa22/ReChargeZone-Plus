import "../assets/css/Dashboard.css";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import CustomNavBar from "./Navbar";
const Dashboard = () => {
  const [data, setData] = useState([]);

  const getData = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/temp/dashboard/data",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    getData(token);
  }, []);

  // Log the updated data whenever it changes
  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);
  const coursesPurchasedData = [10, 15, 8, 12, 20, 18, 25];
  const enquiriesData = [5, 8, 12, 10, 15, 7, 11];
  const revenueData = [500, 800, 1200, 1000, 1500, 700, 1100];
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleAddPlansClick = () => {
    navigate("/addplans"); // Navigate to "/addplans" route
  };

  return (
    <div className="wh">
      <CustomNavBar />
      <br></br>
      <br></br>
      <div className="j">
        <NavLink to="/addplans">
          <div style={{ color: "black" }}>Add Plans</div>
        </NavLink>
      </div>
      <div className="kk">
        <NavLink to="/addaddons">
          <div style={{ color: "black" }}>Addons</div>
        </NavLink>
      </div>
      <div className="dashboard-container">
        <div className="dashboard-card">
          <h4 className="dashboard-courses">No of Active users</h4>
          <br />
          <br />
          <p>{data.users}</p>
        </div>
        <br></br>
        <div className="dashboard-card">
          <h4 className="dashboard-courses">No of Plans Available</h4>
          <br />
          <br />
          <p>{data.plans}</p>
        </div>

        {/* <div className="dashboard-card">
          <h4 className="dashboard-courses">No of Users</h4>
          <br />
          <br />
          <p>{data.users}</p>
        </div> */}

        {/* <div className="dashboard-card"> */}
        {/* <h4 className="dashboard-revenue">Revenue Generated</h4> */}
        {/* <br /> */}
        {/* <br/> */}
        {/* <p>${data.revenue}</p> */}
        {/* </div> */}
        <br></br>
        {/* <div className="dashboard-card"> */}
        {/* <h2>No of Transactions</h2> */}
        {/* <p>50</p> */}
        {/* </div> */}

        {/* <div className="dashboard-card">
          <h2>Recent Transactions</h2>
          <ul>
            <li>Transaction 1</li>
            <li>Transaction 2</li>
            <li>Transaction 3</li>
          </ul>
        </div>
        <br /> */}
        {/* <div><CourseChart/></div> */}
        {/* <div className="dashboard-graph">
        <h2>Courses Purchased (Monthly)</h2>
        <Bar data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], datasets: [{ data: coursesPurchasedData, backgroundColor: 'rgba(75,192,192,0.6)', borderColor: 'rgba(75,192,192,1)', borderWidth: 1 }] }} options={chartOptions} />
      </div> */}

        {/* <div className="dashboard-graph">
        <h2>Enquiries (Monthly)</h2>
        <Bar data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], datasets: [{ data: enquiriesData, backgroundColor: 'rgba(255,99,132,0.6)', borderColor: 'rgba(255,99,132,1)', borderWidth: 1 }] }} options={chartOptions} />
      </div>

      <div className="dashboard-graph">
        <h2>Revenue (Monthly)</h2>
        <Bar data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], datasets: [{ data: revenueData, backgroundColor: 'rgba(54, 162, 235, 0.6)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 }] }} options={chartOptions} />
      </div> */}
      </div>
      <footer />
    </div>
  );
};

export default Dashboard;
