import React, { useState, useEffect } from 'react';
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
// 🌙 Supports dark theme via URL ?theme= override OR system/browser preference
// 🎯 Active day state is managed here and passed to children
function App() {
	// 📅 Track which day is currently selected (1-9)
	const [activeDay, setActiveDay] = useState(1);

	// 📊 Total number of days in the challenge
	const totalDays = 9;

	// 🌙 Theme management — URL ?theme= takes priority over system preference
	useEffect(() => {
		// 🔍 Read ?theme= from URL search params
		const params = new URLSearchParams(window.location.search);
		const urlTheme = params.get('theme'); // 'light', 'dark', or null

		// 🎯 Determine if dark mode should be applied
		const applyDark = () => {
			if (urlTheme === 'dark') return true;
			if (urlTheme === 'light') return false;
			// 🖥️ Fallback: use system/browser preference
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		};

		// 🔄 Apply or remove the 'dark' class on <html>
		const updateTheme = () => {
			if (applyDark()) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		};

		// ⚡ Apply theme on mount
		updateTheme();

		// 👂 Listen for system preference changes (only matters when no URL override)
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => {
			// 🔒 Only react to system changes if URL doesn't override
			if (!urlTheme) {
				updateTheme();
			}
		};

		mediaQuery.addEventListener('change', handleChange);

		// 🧹 Cleanup listener on unmount
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

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
