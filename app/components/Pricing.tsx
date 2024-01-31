/* Development (3999$/month): you provide the design and I develop your UIs and provide the user stories
 *
 * Design + Development (5899$/month): I design and develop your UIs and provide the user stories
 *
 * Integrated (7665$/month): I work with your team and contribute to your codebase directly */

const PricingItem = ({
  title,
  description,
  price,
}: Readonly<{
  title: string;
  description: string;
  price: string;
  popular?: boolean;
}>) => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="text-xl">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">{price}</div>
      </div>
      <div>
        <a href="bg-stone-900 rounded-lg">Subscribe</a>
      </div>
    </div>
  );
};

const features = [
  "Next day turnover",
  "Unlimited requests",
  "Unlimited revisions",
  "Pause or cancel anytime",
  "Slack updates",
  "Weekly meetings",
  "Storybook development and maintenance",
  "Support for all major frameworks",
  "Support for all major design tools",
];

export const Pricing = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="text-2xl font-semibold text-center">Pricing</div>
      <div className="grid grid-cols-2 gap-16 max-w-2xl mx-auto">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-8">
          <PricingItem
            title="Development"
            description="You provide the design and we develop your UIs and provide the user stories"
            price="3999$/month"
          />
          <PricingItem
            title="Design + Development"
            description="We design and develop your UIs and provide the user stories"
            price="5899$/month"
          />
          <PricingItem
            title="Integrated"
            description="We work with your team and contribute to your codebase directly"
            price="7665$/month"
          />
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-16 h-full">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold">Features</div>
            {features.map((feature) => (
              <div className="flex gap-2">
                <div>
                  <span>&#x2022;</span>
                </div>
                <div>{feature}</div>
              </div>
            ))}
          </div>
          <div className="py-4 flex-1 flex flex-col h-full gap-4">
            <div>
              <div>Ready to discuss the details?</div>
            </div>
            <div></div>
            <div>
              <a href="" className="bg-stone-800 rounded-lg p-6 text-stone-200">
                Schedule a call 🗓️
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
