import React, { useState } from "react";
import Header from "../header/header";
import AnalyticsCard from "../analyticsCard/analyticsCard";
import AnalyticsDropdown from "../dropdown/dropDown";
import NewWalletGrowth from "../walletGrowth/newWallet";
import "./dashBoard.css"

const Dashboard = () => {
    const [selectedCard, setSelectedCard] = useState(1);

    const cards = [
      { id: 1, title: 'New Wallets', value: "AED 295,300", change: '4' },
      { id: 2, title: "Wallet Growth", value:"AED 124,100", change:"-6" },
      { id: 3, title: "Average Wallet Progress", value: "67%", change:"-4"},
      { id: 4, title: "Spent at Samsung", value: "AED 295,300", change:"6"}
    ];
  return (
    <div className="main-container-box">
    <div className="dashboard">
      <Header userName="Purvi" />
      <AnalyticsDropdown/>
      <div className="analytics-cards-box">
      {cards.map(card => (
        <AnalyticsCard
          key={card.id}
          title={card.title}
          value={card.value}
          change={card.change}
          isSelected={selectedCard === card.id} 
          onSelect={() => setSelectedCard(card.id)}
        />
      ))}
      </div>
      <NewWalletGrowth/>
    </div>
    </div>
  );
};

export default Dashboard;
