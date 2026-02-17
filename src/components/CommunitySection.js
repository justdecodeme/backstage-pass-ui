import React from 'react';
import PostCard from './PostCard';

// 🌐 CommunitySection Component — "See what others shared" area
// Shows: participant count header + list of community posts
const CommunitySection = () => {
	return (
		<div className="mt-6">
			{/* 📝 Community posts list */}
			<div className="space-y-4">
				{/* 🏷️ Section header */}
				{/* <div className="text-center mb-5">
					<h3 className="text-lg font-semibold text-[#211F26] mb-1">See what others shared</h3>
					<p className="text-sm text-[#040011]/50">85+ participants already completed</p>
				</div> */}
				<PostCard />
				<PostCard />
			</div>
		</div>
	);
};

export default CommunitySection;
