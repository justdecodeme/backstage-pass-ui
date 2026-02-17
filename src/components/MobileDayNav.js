// 📱 MobileDayNav Component — Horizontal day navigation for mobile
// Shows blurred bg image + days in a scrollable row
// Day 1 is centered, others flow to the right, overflow hidden
const MobileDayNav = () => {
	// 📊 Day data
	const days = [
		{ day: 1, isActive: true, isLocked: false },
		{ day: 2, isActive: false, isLocked: true },
		{ day: 3, isActive: false, isLocked: true },
		{ day: 4, isActive: false, isLocked: true },
		{ day: 5, isActive: false, isLocked: true },
		{ day: 6, isActive: false, isLocked: true },
		{ day: 7, isActive: false, isLocked: true },
		{ day: 8, isActive: false, isLocked: true },
		{ day: 9, isActive: false, isLocked: true },
	];

	return (
		<div className="lg:hidden relative overflow-hidden">
			{/* 🖼️ Blurred background image */}
			<img
				src="sidebar-bg.png"
				alt=""
				className="absolute inset-0 w-full h-full object-cover blur-xl scale-125"
			/>
			{/* 🎨 White overlay to soften the blur */}
			<div className="absolute inset-0 bg-white/60"></div>

			{/* 📅 Scrollable horizontal day tabs — centered on Day 1 */}
			<div className="flex overflow-x-hidden justify-center py-3 gap-2 relative z-10">
				{days.map(({ day, isActive, isLocked }) => (
					<button
						key={day}
						className={`
							flex flex-col items-center min-w-[60px] py-2 px-3 rounded-2xl
							transition-colors duration-200
							${isActive ? 'bg-white shadow-sm' : ''}
						`}
					>
						{/* 🏷️ "Day" label */}
						<span
							className={`text-xs font-medium mb-0.5
							${isActive ? 'text-black' : 'text-[#040011]/50'}
						`}
						>
							Day {isActive ? '' : day}
						</span>

						{/* 🔢 Day number or lock icon */}
						{isActive ? (
							<span className="text-2xl font-bold text-black">{day}</span>
						) : isLocked ? (
							<img src="lock.svg" alt="locked" className="w-4 h-4 mt-1" />
						) : (
							<span className="text-lg font-semibold text-[#040011]/50">{day}</span>
						)}
					</button>
				))}
			</div>
		</div>
	);
};

export default MobileDayNav;
