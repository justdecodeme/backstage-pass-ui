// 🔝 Header Component — Desktop top navigation bar
// 🌙 Dark mode: dark background, light text
const Header = () => {
	return (
		<header className="h-[60px] bg-white dark:bg-[#1a1a1a] hidden lg:flex items-center justify-between px-6 shrink-0">
			{/* 🔊 Left side — Logo + Brand Name */}
			<a href="/">
				<img src="backstate-pass-logo.svg" alt="Logo" className="dark:brightness-[10]" />
			</a>

			{/* ➡️ Right side — Streak, Bell, Avatar */}
			<div className="flex items-center gap-3">
				{/* 🔥 Streak counter badge */}
				<div className="flex items-center gap-1.5 bg-[#300040]/[0.06] dark:bg-white/10 rounded-full px-3 py-1.5">
					{/* 🔥 Fire icon with gradient */}
					<img src="fire.svg" alt="fire" />
					<span className="text-sm font-semibold text-[#211F26] dark:text-white">30</span>
				</div>

				{/* 🔔 Notification bell icon */}
				<button className="relative w-8 h-8 flex items-center justify-center rounded-full border border-[#211F26]/20 dark:border-white/20">
					<img src="bell.svg" alt="bell" className="dark:invert" />
				</button>

				{/* 👤 User avatar */}
				<a
					href="/"
					className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 overflow-hidden"
				>
					<img src="avatar.png" alt="User avatar" className="w-full h-full object-cover" />
				</a>
			</div>
		</header>
	);
};

export default Header;
