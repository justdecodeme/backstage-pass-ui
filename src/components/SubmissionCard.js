import React from 'react';
import ReactionBar from './ReactionBar';

// 📮 SubmissionCard Component — User's own challenge submission
// 🌙 Dark mode: green header stays, card bg → dark gray, white text
const SubmissionCard = () => {
	return (
		<div className="bg-[#E6F6EB] dark:bg-[#1a3a2a] rounded-3xl mb-6 overflow-hidden">
			{/* 🏷️ "Your Submission" header label */}
			<div
				className="text-center p-2 bg-no-repeat bg-cover bg-position-top overflow-hidden"
				style={{ backgroundImage: `url(bg.svg)` }}
			>
				{/* ✨ Background graphic for the submission label */}
				<span className="text-sm font-semibold text-[#30A46C]">Your Submission</span>
			</div>

			<div className="bg-white dark:bg-[#2a2a2a] rounded-3xl border border-[#EAE7E] dark:border-white/10">
				<div className="p-3">
					{/* 👤 User info row — Avatar, Name, Timestamp, More menu */}
					<div className="flex items-start justify-between mb-2">
						<div className="flex items-center gap-3">
							{/* 🖼️ User avatar */}
							<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 shrink-0">
								<img src="avatar.png" alt="Ashraf Idrishi" className="w-full h-full object-cover" />
							</div>

							{/* 📝 Name + timestamp */}
							<div>
								<h4 className="text-sm font-semibold text-[#211F26] dark:text-white">
									Ashraf Idrishi
								</h4>
								<p className="text-xs text-[#040011]/50 dark:text-white/50">1s</p>
							</div>
						</div>

						{/* ⋯ More options button */}
						<button className="text-[#040011]/50 dark:text-white/50 hover:text-[#040011]/80 dark:hover:text-white/80 p-1">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
								<circle cx="4" cy="10" r="1.5" fill="currentColor" />
								<circle cx="10" cy="10" r="1.5" fill="currentColor" />
								<circle cx="16" cy="10" r="1.5" fill="currentColor" />
							</svg>
						</button>
					</div>

					{/* 💬 Post text content */}
					<p className="text-sm text-[#211F26] dark:text-white/90 leading-relaxed">
						Today's challenge workout completed—feeling stronger already
					</p>
				</div>

				{/* 🎥 Video thumbnail placeholder */}
				<div className="relative overflow-hidden aspect-video">
					<img src="post.png" alt="Workout video" className="w-full h-full object-cover" />

					{/* ▶️ Play button overlay */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-14 h-14 bg-white/90 dark:bg-black/60 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black/80 transition-colors cursor-pointer">
							<img src="play.png" alt="play" className="hover:scale-110 transition-transform" />
						</div>
					</div>
				</div>

				{/* 👍 Reaction bar */}
				<ReactionBar />
			</div>
		</div>
	);
};

export default SubmissionCard;
