import React, { useState } from 'react';
import { Star, CheckCircle, Quote, MessageSquarePlus, X } from 'lucide-react';
import { SALON_REVIEWS, SALON_INFO } from '../data/salonData';
import { Review } from '../types/salon';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(SALON_REVIEWS);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    rating: 5,
    service: 'Signature Haircut & Styling',
    comment: '',
  });
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author.trim() || !newReview.comment.trim()) return;

    const added: Review = {
      id: `rev-${Date.now()}`,
      author: newReview.author.trim(),
      rating: newReview.rating,
      date: 'Just now',
      service: newReview.service,
      comment: newReview.comment.trim(),
      verified: true,
    };

    setReviews([added, ...reviews]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setIsReviewModalOpen(false);
      setNewReview({
        author: '',
        rating: 5,
        service: 'Signature Haircut & Styling',
        comment: '',
      });
    }, 1500);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0f1116] border-t border-b border-[#1f222a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#dec47a] font-medium mb-3">
              Client Testimonials & Trust
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Loved by Greater Noida
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light mt-3 max-w-xl">
              Authentic stories from guests who trust Javed and the Elite Professional Looks team with their hair and skincare.
            </p>
          </div>

          {/* Aggregated Score Badge & Review Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#14161c] border border-[#262a34]">
              <div className="text-3xl font-serif font-bold text-white tabular-nums">
                {SALON_INFO.rating}
              </div>
              <div>
                <div className="flex text-[#dec47a]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#dec47a]" />
                  ))}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Over 180+ Verified Google Reviews
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="px-4 py-3 text-xs font-semibold text-neutral-300 hover:text-white bg-[#1a1d24] hover:bg-[#222630] border border-neutral-700 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#dec47a]" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#13151b] border border-[#22252e] hover:border-[#343845] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#dec47a]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(rev.rating) ? 'fill-[#dec47a]' : 'text-neutral-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500">{rev.date}</span>
                </div>

                {/* Comment with Quote icon */}
                <div className="relative mb-5">
                  <Quote className="w-5 h-5 text-neutral-700 mb-2 opacity-50" />
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              {/* Author & Service attribution (Zero-pill metadata) */}
              <div className="pt-4 border-t border-[#1f222a] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-white">{rev.author}</span>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" aria-label="Verified Client" />
                    )}
                  </div>
                  <div className="text-[11px] text-[#dec47a] font-light mt-0.5">
                    {rev.service}
                  </div>
                </div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Verified Visit
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Dialog Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#14161c] border border-[#2a2e38] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedFeedback ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-lg font-serif font-medium text-white mb-1">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-xs text-neutral-400">
                  Your review has been recorded. We appreciate your patronage at Elite Professional Looks Salon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-white mb-1">
                    Share Your Salon Experience
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Your feedback helps us continuously elevate our styling and hospitality standards.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Priyanshi Verma"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#0e1014] border border-[#292d37] rounded-lg text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Rating
                    </label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="w-full px-3.5 py-2 text-xs bg-[#0e1014] border border-[#292d37] rounded-lg text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value={5}>5 Stars - Exceptional</option>
                      <option value={4}>4 Stars - Great Experience</option>
                      <option value={3}>3 Stars - Satisfactory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Service Received
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Balayage / Haircut"
                      value={newReview.service}
                      onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-[#0e1014] border border-[#292d37] rounded-lg text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Your Comments
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the staff, haircut finish, hygiene, or hair coloring results..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#0e1014] border border-[#292d37] rounded-lg text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#dec47a] hover:bg-[#c5a059] rounded transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
