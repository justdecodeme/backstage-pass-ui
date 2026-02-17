// 👍 ReactionBar Component — Emoji reactions + action icons
// 🌙 Dark mode: darker pill bg, white text, subtle borders
const ReactionBar = () => {
	return (
		<div className="flex items-center justify-between p-4">
			{/* ⬅️ Left side — Reactions + action icons */}
			<div className="flex items-center gap-2">
				{/* 🎉 Reaction emojis with count */}
				<div className="flex items-center gap-1.5 bg-[#F2EFF3] dark:bg-white/10 rounded-full px-3 py-1.5">
					<span className="text-base">🙏</span>
					<span className="text-base">😍</span>
					<span className="text-sm font-medium dark:text-white">18</span>
				</div>

				{/* 😊 Smiley face icon */}
				<button className="w-8 h-8 bg-[#F2EFF3] dark:bg-white/10 flex items-center justify-center rounded-full border-[1px] border-[#DED9E1] dark:border-white/15">
					<img src="smily.png" alt="smily" width={18} className="block dark:hidden" />
					<img src="smily-dark.png" alt="smily" width={18} className="hidden dark:block" />
				</button>

				{/* 💬 Chat/comment icon */}
				<button className="w-8 h-8 bg-[#F2EFF3] dark:bg-white/10 flex items-center justify-center rounded-full border-[1px] border-[#DED9E1] dark:border-white/15">
					<img src="chat.svg" alt="chat" width={18} className="dark:invert" />
				</button>
			</div>

			{/* ➡️ Right side — Comment count */}
			<span className="text-sm font-medium hidden lg:inline dark:text-white/80">10 Comments</span>
		</div>
	);
};

export default ReactionBar;
