import React, { useState } from 'react';

// 📅 DayItem Component — Single row in the sidebar day list
// 🌙 Dark mode: dark active bg, light text, dark concave curves
// 🎯 Clickable — calls onClick to change active day
const DayItem = ({ day, isActive, isCompleted, isLocked, onClick }) => {
	// 🖱️ Track hover state to show concave curves on hover
	const [isHovered, setIsHovered] = useState(false);

	// 🎨 Whether to show the concave curves (active OR hovered)
	const showCurves = isActive || isHovered;

	// 🎨 Curve color: matches the main content bg (light = #F7F6FC, dark = #1a1a1a)
	const curveColorLight = '#F7F6FC';
	const curveColorDark = '#1a1a1a';

	return (
		<div
			className={`
        relative flex items-center justify-between px-6 py-5 rounded-l-full cursor-pointer
        transition-colors duration-100
        ${isActive ? 'bg-[#F7F6FC] dark:bg-[#1a1a1a]' : 'hover:bg-[#F7F6FC]/100 dark:hover:bg-[#1a1a1a]'}
      `}
			onMouseEnter={() => !isActive && setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
		>
			{/* 🏷️ Day label */}
			<span
				className={`
          text-sm font-medium transition-colors duration-100
          ${isActive ? 'text-black dark:text-white' : 'text-[#040011]/60 dark:text-white/60'}
        `}
			>
				Day - {day}
			</span>

			{/* ✅ Status icon — Check or Lock */}
			{isCompleted && <img src="check.svg" alt="check" />}

			{isLocked && <img src="lock.svg" alt="lock" className="block dark:hidden" />}
			{isLocked && <img src="lock-dark.svg" alt="lock" className="hidden dark:block" />}

			{/* 🎨 Concave curve connectors — shown on active & hover */}
			{showCurves && (
				<>
					{/* 🔝 Top concave curve — light mode */}
					<div
						className="absolute -top-[20px] right-0 w-[20px] h-[20px] dark:hidden"
						style={{
							background: `radial-gradient(circle at 0% 0%, transparent 20px, ${curveColorLight} 20px)`,
						}}
					></div>
					{/* 🔝 Top concave curve — dark mode */}
					<div
						className="absolute -top-[20px] right-0 w-[20px] h-[20px] hidden dark:block"
						style={{
							background: `radial-gradient(circle at 0% 0%, transparent 20px, ${curveColorDark} 20px)`,
						}}
					></div>

					{/* 🔽 Bottom concave curve — light mode */}
					<div
						className="absolute -bottom-[20px] right-0 w-[20px] h-[20px] dark:hidden"
						style={{
							background: `radial-gradient(circle at 0% 100%, transparent 20px, ${curveColorLight} 20px)`,
						}}
					></div>
					{/* 🔽 Bottom concave curve — dark mode */}
					<div
						className="absolute -bottom-[20px] right-0 w-[20px] h-[20px] hidden dark:block"
						style={{
							background: `radial-gradient(circle at 0% 100%, transparent 20px, ${curveColorDark} 20px)`,
						}}
					></div>
				</>
			)}
		</div>
	);
};

export default DayItem;
