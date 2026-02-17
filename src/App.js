import React, { useState } from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import SubmissionCard from './components/SubmissionCard';
import CommunitySection from './components/CommunitySection';
import './App.css';

// 🏠 App Component — Main page layout
// Desktop: Header → SubHeader → (Sidebar | Main Content)
// Mobile: MobileHeader (blur bg + nav + day tabs) → Main Content (full-width)
// 🌙 Supports dark theme via system/browser preference
// 🎯 Active day state is managed here and passed to children
function App() {
	// 📅 Track which day is currently selected (1-9)
	const [activeDay, setActiveDay] = useState(1);

	// 📊 Total number of days in the challenge
	const totalDays = 9;

	return (
		<div className="min-h-screen bg-[#F7F6FC] dark:bg-[#1a1a1a] flex flex-col">
			{/* 🔝 Desktop header — hidden on mobile */}
			<Header />

			{/* 📍 Desktop sub-header — hidden on mobile */}
			<div className="hidden lg:block">
				<SubHeader activeDay={activeDay} totalDays={totalDays} />
			</div>

			{/* 📱 Mobile header — combined blur bg + nav + day tabs */}
			<MobileHeader activeDay={activeDay} onDayClick={setActiveDay} totalDays={totalDays} />

			{/* 📐 Main layout — Sidebar (desktop) + Content */}
			<div className="flex flex-1 overflow-hidden">
				{/* 📋 Left sidebar — desktop only */}
				<div className="hidden lg:block">
					<Sidebar activeDay={activeDay} onDayClick={setActiveDay} />
				</div>

				{/* 📄 Main content area — scrollable, full-width on mobile */}
				<main className="flex-1 overflow-y-auto bg-[#F7F6FC] dark:bg-[#1a1a1a]">
					<div className="max-w-[640px] mx-auto py-6 px-3 lg:px-4">
						{/* 📮 User's submission card */}
						<SubmissionCard />

						{/* 🌐 Community section */}
						<CommunitySection />
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
