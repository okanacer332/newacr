"use client";
import { useViewMode } from "@/app/context/ViewModeContext";

const Pricing = () => {
  const { mode } = useViewMode();
  const isDesign = mode === "design";

  const plans = [
    {
      name: "Starter",
      subtitle: "Best for Small Projects",
      price: "$2,500",
      period: "/project",
      desc: "Perfect for startups and small businesses looking to establish their design foundation.",
      features: [
        "UI/UX Design Consultation",
        "Wireframing & Prototyping",
        "Up to 5 Page Designs",
        "Basic Brand Guidelines",
        "2 Revision Rounds",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      subtitle: "Most Popular",
      price: "$5,000",
      period: "/project",
      desc: "Ideal for growing businesses that need comprehensive design solutions.",
      features: [
        "Everything in Starter",
        "Customer Journey Mapping",
        "Up to 15 Page Designs",
        "Complete Design System",
        "Interactive Prototypes",
        "Unlimited Revisions",
        "Priority Support",
        "User Testing Session"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "For Large Teams",
      price: "$10,000+",
      period: "/project",
      desc: "Comprehensive design partnership for established companies and complex projects.",
      features: [
        "Everything in Professional",
        "Full Product Design",
        "Unlimited Page Designs",
        "CRM Marketing Strategy",
        "New Business Development",
        "Design Team Training",
        "Dedicated Designer",
        "24/7 Priority Support"
      ],
      popular: false
    }
  ];

  const theme = {
    highlight: isDesign ? "text-purple-600" : "text-blue-600",
    btnPrimary: isDesign ? "bg-purple-600 hover:bg-purple-700" : "bg-blue-600 hover:bg-blue-700",
    popularTag: isDesign ? "bg-purple-600" : "bg-blue-600",
    checkIcon: isDesign ? "text-purple-500" : "text-blue-500"
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Flexible design packages tailored to your project needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 shadow-lg bg-white dark:bg-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular 
                  ? `border-2 ${isDesign ? "border-purple-500" : "border-blue-500"} z-10 scale-105 sm:scale-100 lg:scale-105` 
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              {/* Popular Tag - Fixed Positioning */}
              {plan.popular && (
                <div className={`absolute top-0 right-0 rounded-bl-xl rounded-tr-lg px-4 py-1.5 text-xs font-bold text-white shadow-md ${theme.popularTag}`}>
                  MOST POPULAR
                </div>
              )}

              <div className="mb-4">
                <span className={`text-sm font-bold uppercase tracking-wider ${theme.highlight}`}>
                  {plan.subtitle}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-black dark:text-white">{plan.name}</h3>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-black dark:text-white">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <p className="mb-8 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-6">
                {plan.desc}
              </p>

              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <svg className={`h-5 w-5 shrink-0 ${theme.checkIcon}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 mt-auto">
                <button className={`w-full rounded-full py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl ${theme.btnPrimary}`}>
                  Hire for {plan.name}
                </button>
                <button className="w-full rounded-full border border-gray-200 bg-transparent py-3.5 text-sm font-bold text-black dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                  View Details
                </button>
              </div>
              
              <div className={`mt-4 text-center text-xs font-semibold cursor-pointer hover:underline ${theme.highlight}`}>
                 Learn more about this plan →
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-gray-600 dark:text-gray-400">
             Need a custom solution? <a href="/contact" className={`font-bold underline ${theme.highlight}`}>Contact us</a> for a tailored quote.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;