import { useState } from 'react';

// 📱 MobileHeader Component — Combined mobile header with blur effect
// Merges: Back nav + Challenge title + Horizontal day tabs
// All wrapped in a single blurred background container
// 🌙 Dark mode: darker overlay, dark active tab bg, white text
// 🎯 Clickable day tabs — calls onDayClick to change active day
const MobileHeader = ({ activeDay, onDayClick, totalDays }) => {
	// 🖱️ Track which day is hovered (null = none)
	const [hoveredDay, setHoveredDay] = useState(null);

	// 📊 Generate day data dynamically from totalDays
	const days = Array.from({ length: totalDays }, (_, i) => ({
		day: i + 1,
		isLocked: i + 1 !== activeDay,
	}));

	return (
		<div className="lg:hidden relative overflow-hidden rounded-b-3xl">
			{/* 🖼️ Blurred background image — spans the entire mobile header */}
			<img
				src="sidebar-bg.png"
				alt=""
				className="absolute inset-0 w-full h-full object-cover blur-xl scale-125"
			/>
			{/* 🎨 Overlay — light: white/60, dark: #1a1a1a/70 */}
			<div className="absolute inset-0 bg-white/60 dark:bg-[#1a1a1a]/70"></div>

			{/* 📍 Top row — Back arrow + Challenge title + Info icon */}
			<div className="relative z-10 flex items-center justify-between px-4 pt-4 pb-2">
				<div className="flex items-center gap-2">
					{/* ⬅️ Back arrow */}
					<button className="w-8 h-8 flex items-center justify-center text-[#211F26] dark:text-white hover:opacity-70 transition-opacity">
						<img src="caret-left.svg" alt="back" className="dark:invert" />
					</button>

					{/* 🏋️ Challenge title */}
					<span className="text-base font-semibold text-[#211F26] dark:text-white">
						9-Day Fitness Challenge
					</span>
				</div>

				{/* ℹ️ Info icon */}
				<button className="w-8 h-8 flex items-center justify-center text-[#211F26] dark:text-white hover:opacity-70 transition-opacity">
					<img src="info.svg" alt="info" className="dark:invert" />
				</button>
			</div>

			{/* 📅 Horizontal day tabs — active day centered via left spacer */}
			<div className="relative z-10 flex overflow-x-hidden mt-3 gap-2">
				{/* 🎯 Spacer — pushes active day to the center of the screen */}
				<div className="shrink-0" style={{ width: 'calc(50vw - 42px)' }}></div>
				{days.map(({ day, isLocked }) => {
					// 🎨 Whether this day is the active one
					const isActive = day === activeDay;
					// 🎨 Whether to show curves (active OR hovered)
					const showEffect = isActive || hoveredDay === day;

					return (
						<div
							key={day}
							className="relative"
							onMouseEnter={() => !isActive && setHoveredDay(day)}
							onMouseLeave={() => setHoveredDay(null)}
						>
							<button
								onClick={() => onDayClick(day)}
								className={`
									flex flex-col items-center h-full min-w-[60px] py-4 px-3 rounded-t-[100px]
									transition-colors duration-100
									${isActive ? 'bg-[#f7f6fc] dark:bg-[#1a1a1a] shadow-sm' : ''}
									${hoveredDay === day && !isActive ? 'bg-[#f7f6fc] dark:bg-[#1a1a1a]' : ''}
								`}
							>
								{/* 🏷️ "Day" label */}
								<span
									className={`text-xs font-medium mb-0.5 transition-colors duration-100
									${isActive ? 'text-black dark:text-white' : 'text-[#040011]/50 dark:text-white/50'}
								`}
								>
									Day {isActive ? '' : day}
								</span>

								{/* 🔢 Day number or lock icon */}
								{isActive ? (
									<span className="text-2xl font-bold text-black dark:text-white">{day}</span>
								) : isLocked ? (
									<>
										<img src="lock.svg" alt="locked" className="w-4 h-4 mt-1 block dark:hidden" />
										<img
											src="lock-dark.svg"
											alt="locked"
											className="w-4 h-4 mt-1 hidden dark:block"
										/>
									</>
								) : (
									<span className="text-lg font-semibold text-[#040011]/50 dark:text-white/50">
										{day}
									</span>
								)}
							</button>

							{/* 🎨 Concave curves at the bottom — active & hovered (light mode) */}
							{showEffect && (
								<>
									{/* ◣ Bottom-left — light */}
									<div
										className="absolute -left-[12px] bottom-0 w-[12px] h-[12px] dark:hidden"
										style={{
											background:
												'radial-gradient(circle at 0% 0%, transparent 12px, #f7f6fc 12px)',
										}}
									></div>
									{/* ◣ Bottom-left — dark */}
									<div
										className="absolute -left-[12px] bottom-0 w-[12px] h-[12px] hidden dark:block"
										style={{
											background:
												'radial-gradient(circle at 0% 0%, transparent 12px, #1a1a1a 12px)',
										}}
									></div>

									{/* ◢ Bottom-right — light */}
									<div
										className="absolute -right-[12px] bottom-0 w-[12px] h-[12px] dark:hidden"
										style={{
											background:
												'radial-gradient(circle at 100% 0%, transparent 12px, #f7f6fc 12px)',
										}}
									></div>
									{/* ◢ Bottom-right — dark */}
									<div
										className="absolute -right-[12px] bottom-0 w-[12px] h-[12px] hidden dark:block"
										style={{
											background:
												'radial-gradient(circle at 100% 0%, transparent 12px, #1a1a1a 12px)',
										}}
									></div>
								</>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MobileHeader;
