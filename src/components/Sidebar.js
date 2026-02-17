import DayItem from './DayItem';

// 📋 Sidebar Component — Day navigation for desktop
// 🌙 Dark mode: darker overlay on blurred bg, dark-aware gradient
// 🎯 Receives activeDay + onDayClick for interactive day selection
const Sidebar = ({ activeDay, onDayClick }) => {
	// 📊 Day data — status for each challenge day
	const days = [
		{ day: 1, isCompleted: true, isLocked: false },
		{ day: 2, isCompleted: false, isLocked: true },
		{ day: 3, isCompleted: false, isLocked: true },
		{ day: 4, isCompleted: false, isLocked: true },
		{ day: 5, isCompleted: false, isLocked: true },
		{ day: 6, isCompleted: false, isLocked: true },
		{ day: 7, isCompleted: false, isLocked: true },
		{ day: 8, isCompleted: false, isLocked: true },
		{ day: 9, isCompleted: false, isLocked: true },
	];

	return (
		<aside className="w-[258px] min-h-full shrink-0 relative overflow-hidden">
			{/* 🖼️ Blurred background image — absolute layer behind content */}
			<img
				src="sidebar-bg.png"
				alt=""
				className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
			/>
			{/* 🎨 Semi-transparent overlay — light/dark adaptive */}
			<div className="absolute inset-0 bg-white/60 dark:bg-[#1a1a1a]/70"></div>
			{/* 🎨 Top gradient fade overlay */}
			<div className="h-16 bg-gradient-to-b from-[#300040]/[0.06] dark:from-white/[0.04] to-transparent relative z-10"></div>

			{/* 📅 Day list */}
			<div className="flex flex-col pl-2 relative z-10">
				{days.map(dayData => (
					<DayItem
						key={dayData.day}
						day={dayData.day}
						isActive={activeDay === dayData.day}
						isCompleted={dayData.isCompleted}
						isLocked={dayData.isLocked}
						onClick={() => onDayClick(dayData.day)}
					/>
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
