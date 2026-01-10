import {
  FaHardHat,
  FaClipboardCheck,
  FaTools,
  FaUsersCog,
} from "react-icons/fa";

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const EmpowerCard = ({ title, description, icon }: CardProps) => {
  return (
    <div className="group relative flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(163,230,53,0.7)]">
        <div className="text-black transition-transform duration-300 group-hover:rotate-6">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-yellow-600">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-lime-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export default function WhoWeEmpower() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="animate-fade-up">
            <h2 className="text-5xl font-extrabold leading-tight">
              WHO WE <br /> EMPOWER
            </h2>
            <p className="mt-8 max-w-md text-lg text-gray-700">
              One connected ecosystem where every stakeholder is aligned.
            </p>
          </div>

          {/* RIGHT SIDE – CARDS */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 animate-fade-up delay-200">
            <EmpowerCard
              title="Builders / Developers"
              description="Gain accurate project execution, reduce delays & costs"
              icon={<FaHardHat className="w-6 h-6" />}
            />

            <EmpowerCard
              title="Contractors"
              description="Improve coordination, streamline workflows, and deliver quality on time"
              icon={<FaClipboardCheck className="w-6 h-6" />}
            />

            <EmpowerCard
              title="Sub-Contractors"
              description="Detect clashes early, ensure precise installation, and avoid rework"
              icon={<FaTools className="w-6 h-6" />}
            />

            <EmpowerCard
              title="Project Managers / Stakeholders"
              description="Access real-time progress tracking, dashboards, and data-driven insights"
              icon={<FaUsersCog className="w-6 h-6" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
