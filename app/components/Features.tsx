import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink">
          Built for two
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-muted">
          Three simple ways to keep each other moving.
        </p>

        <div className="mt-10 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <FeatureCard
            image="/feature-rules.png"
            alt="Weekly Rules screen showing 4 days work out target"
            title="Weekly rules, real stakes"
            body="Set how many workouts you'll hit each week and wager something fun if either of you falls short."
            topAligned
            phoneClassName="w-[270px]"
          />

          <FeatureCard
            image="/feature-widget.png"
            alt="Sweatbuds widget on iPhone home screen"
            title="Log your workout"
            body="Send a post-workout selfie that lands directly in your partner's home-screen widget."
            topAligned
          />

          <FeatureCard
            image="/feature-wager.png"
            alt="Wager balance screen showing 1 romantic favor owed"
            title="Settle up, sweetly"
            body="Redeem wagers like romantic favors, coffee runs, or custom rewards."
            topAligned
          />
        </div>
      </div>
    </section>
  );
}
