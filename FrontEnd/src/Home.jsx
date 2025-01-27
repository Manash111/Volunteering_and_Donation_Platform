import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import {
  Heart,
  Users,
  Calendar,
  Search,
  ArrowRight,
  MapPin,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  // State for search fields
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  // State for campaigns
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  // Mock Campaign Data (Replace this with database fetch logic)
  useEffect(() => {
    const fetchCampaigns = async () => {
      const mockData = [
        {
          id: 1,
          title: "Clean the Park",
          location: "Kathmandu",
          description: "Help clean the community park this Saturday.",
          startDate: "2025-01-30",
          endDate: "2025-02-05",
        },
        {
          id: 2,
          title: "Blood Donation Camp",
          location: "Pokhara",
          description: "Join us to donate blood and save lives.",
          startDate: "2025-02-01",
          endDate: "2025-02-03",
        },
        {
          id: 3,
          title: "Teach English Online",
          location: "Remote",
          description: "Help children improve their English skills online.",
          startDate: "2025-02-05",
          endDate: "2025-02-10",
        },
        {
          id: 4,
          title: "Plant Trees Drive",
          location: "Lalitpur",
          description: "Plant trees to make the environment greener.",
          startDate: "2025-02-10",
          endDate: "2025-02-15",
        },
      ];

      setCampaigns(mockData);
      setFilteredCampaigns(mockData); // Display all campaigns initially
    };

    fetchCampaigns();
  }, []);

  const handleSearch = () => {
    const filtered = campaigns.filter(
      (campaign) =>
        (!searchKeyword.trim() ||
          campaign.title.toLowerCase().includes(searchKeyword.toLowerCase())) &&
        (!searchLocation.trim() ||
          campaign.location
            .toLowerCase()
            .includes(searchLocation.toLowerCase()))
    );

    setFilteredCampaigns(filtered);
  };

  const volunteerOpportunities = [
    {
      id: 1,
      title: "Community Garden Project",
      organization: "Green Earth Initiative",
      location: "Downtown Community Center",
      date: "March 15, 2024",
      image:
        "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=2000",
      category: "Environment",
    },
    {
      id: 2,
      title: "Food Bank Distribution",
      organization: "Local Food Bank",
      location: "City Food Bank",
      date: "March 20, 2024",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
      category: "Community Service",
    },
    {
      id: 3,
      title: "Senior Care Program",
      organization: "Elder Care Foundation",
      location: "Senior Living Center",
      date: "March 18, 2024",
      image:
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000",
      category: "Healthcare",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="header">
        <nav className="container nav">
          <div className="logo">
            <Heart size={24} />
            <span>VolunteerConnect</span>
          </div>
          <div className="nav-links">
            <a>
              <Link to="/opportunities">Opportunities</Link>
            </a>
            <a href="#">Organizations</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <button className="sign-up-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </nav>

        <div className="container hero">
          <div className="hero-content">
            <h1>Make a Difference in Your Community</h1>
            <p>
              Connect with meaningful volunteer opportunities and create
              positive change in your area.
            </p>
            <div className="search-box">
              <Search
                size={20}
                color="#9ca3af"
                style={{ marginLeft: "0.5rem" }}
              />
              <input
                type="text"
                placeholder="Search for volunteer opportunities..."
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container stats">
        <div className="stats-grid">
          <div className="stat-card">
            <Users size={32} className="stat-icon" />
            <h3 className="stat-number">5,000+</h3>
            <p className="stat-label">Active Volunteers</p>
          </div>
          <div className="stat-card">
            <Calendar size={32} className="stat-icon" />
            <h3 className="stat-number">1,200+</h3>
            <p className="stat-label">Monthly Opportunities</p>
          </div>
          <div className="stat-card">
            <Heart size={32} className="stat-icon" />
            <h3 className="stat-number">300+</h3>
            <p className="stat-label">Partner Organizations</p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="container opportunities">
        <div className="section-header">
          <h2 className="section-title">Featured Opportunities</h2>
          <button className="view-all">
            View all <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
          </button>
        </div>

        <div className="opportunities-grid">
          {volunteerOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="opportunity-card">
              <img
                src={opportunity.image}
                alt={opportunity.title}
                className="opportunity-image"
              />
              <div className="opportunity-content">
                <div className="opportunity-category">
                  {opportunity.category}
                </div>
                <h3 className="opportunity-title">{opportunity.title}</h3>
                <p className="opportunity-org">{opportunity.organization}</p>
                <div className="opportunity-meta">
                  <MapPin size={16} />
                  {opportunity.location}
                </div>
                <div className="opportunity-meta">
                  <Calendar size={16} />
                  {opportunity.date}
                </div>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Make an Impact?</h2>
          <p>
            Join our community of volunteers today and start making a
            difference.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <Heart size={24} />
                <span>VolunteerConnect</span>
              </div>
              <p>
                Connecting passionate volunteers with meaningful opportunities
                since 2024.
              </p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Find Opportunities</a>
                </li>
                <li>
                  <a href="#">For Organizations</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Categories</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Environment</a>
                </li>
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Healthcare</a>
                </li>
                <li>
                  <a href="#">Community Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Newsletter</h3>
              <p>Stay updated with new opportunities</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2024 VolunteerConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
