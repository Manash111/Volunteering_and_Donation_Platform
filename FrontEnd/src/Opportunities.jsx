import React, { useState } from "react";
import { Search, MapPin, Calendar, Filter, ArrowUpDown } from "lucide-react";

function Opportunities() {
  const [sortBy, setSortBy] = useState("date");
  const [filterCategory, setFilterCategory] = useState("all");

  const opportunities = [
    {
      id: 1,
      title: "Community Garden Project",
      organization: "Green Earth Initiative",
      location: "Downtown Community Center",
      date: "March 15, 2024",
      image:
        "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=2000",
      category: "Environment",
      description:
        "Help us maintain and grow our community garden. Learn about sustainable gardening practices while contributing to local food security.",
      requirements: [
        "No experience needed",
        "4 hours commitment",
        "Weekend availability",
      ],
      spots: 10,
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
      description:
        "Support our food distribution program by helping sort, pack, and distribute food to families in need.",
      requirements: [
        "Physical ability to lift boxes",
        "3 hours commitment",
        "Morning availability",
      ],
      spots: 15,
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
      description:
        "Spend time with seniors, assist with activities, and help create a vibrant community environment.",
      requirements: [
        "Good communication skills",
        "2 hours commitment",
        "Weekday availability",
      ],
      spots: 8,
    },
  ];

  return (
    <div>
      <div className="opportunities-page">
        <div className="opportunities-header">
          <div className="container">
            <h1>Volunteer Opportunities</h1>
            <p>Find meaningful ways to contribute to your community</p>
          </div>
        </div>
        <div className="container">
          <div className="search-filters">
            <div className="search-box">
              <Search size={20} color="#9ca3af" />
              <input type="text" placeholder="Search opportunities..." />
            </div>

            <div className="filters">
              <div className="filter-group">
                <Filter size={20} />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="environment">Environment</option>
                  <option value="community">Community Service</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                </select>
              </div>

              <div className="filter-group">
                <ArrowUpDown size={20} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="date">Sort by Date</option>
                  <option value="spots">Sort by Available Spots</option>
                  <option value="duration">Sort by Duration</option>
                </select>
              </div>
            </div>
          </div>

          <div className="opportunities-list">
            {opportunities.map((opportunity) => (
              <div key={opportunity.id} className="opportunity-card detailed">
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
                  <p className="opportunity-description">
                    {opportunity.description}
                  </p>

                  <div className="opportunity-meta">
                    <MapPin size={16} />
                    {opportunity.location}
                  </div>
                  <div className="opportunity-meta">
                    <Calendar size={16} />
                    {opportunity.date}
                  </div>

                  <div className="opportunity-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {opportunity.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="opportunity-footer">
                    <span className="spots-available">
                      {opportunity.spots} spots available
                    </span>
                    <button className="apply-btn">Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
