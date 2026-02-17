// 📍 SubHeader Component — Desktop-only navigation breadcrumb + Challenge title
// 🌙 Dark mode: dark background, light text, subtle borders
// 📅 Receives activeDay prop to display dynamic "Day X of Y" counter
const SubHeader = ({ activeDay, totalDays }) => {
	return (
		<div className="h-[56px] bg-white/80 dark:bg-[#1a1a1a]/80 border-t border-b border-[#F2EFF3] dark:border-white/10 flex items-center justify-between px-6 shrink-0">
			{/* ⬅️ Left side — Back + Day counter */}
			<div className="flex items-center gap-4">
				{/* ↩️ Back button */}
				<button className="flex items-center gap-1 text-[#211F26] dark:text-white hover:opacity-70 transition-opacity">
					<img src="caret-left.svg" alt="caret left" className="dark:invert" />
					<span className="text-sm font-medium ml-1">Back</span>
				</button>

				{/* 📊 Vertical divider */}
				<div className="w-px h-8 bg-[#140035]/[0.15] dark:bg-white/20"></div>

				{/* 📅 Day counter text — dynamic based on activeDay */}
				<span className="text-sm font-medium text-[#211F26] dark:text-white">
					Day {activeDay} of {totalDays}
				</span>
			</div>

			{/* ➡️ Right side — Challenge title + Info icon */}
			<div className="flex items-center gap-2">
				{/* 🏋️ Challenge title */}
				<span className="text-sm font-medium text-[#211F26] dark:text-white">
					9-Day Fitness Challenge
				</span>

				{/* ℹ️ Info icon */}
				<button className="w-6 h-6 flex items-center justify-center text-[#211F26] dark:text-white hover:opacity-70 transition-opacity">
					<img src="info.svg" alt="info" className="dark:invert" />
				</button>
			</div>
		</div>
	);
};

export default SubHeader;
