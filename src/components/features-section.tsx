// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Cable as Cube, Eye, Zap, Users, Shield, BarChart3 } from "lucide-react"

// // const features = [
// //   {
// //     icon: Eye,
// //     title: "AR Visualization",
// //     description: "Overlay digital models onto real construction sites for precise visualization and planning.",
// //   },
// //   {
// //     icon: Cube,
// //     title: "3D Modeling",
// //     description: "Create detailed 3D models that integrate seamlessly with your construction workflow.",
// //   },
// //   {
// //     icon: Zap,
// //     title: "Real-time Updates",
// //     description: "Get instant updates on project progress with live data synchronization.",
// //   },
// //   {
// //     icon: Users,
// //     title: "Team Collaboration",
// //     description: "Enable seamless collaboration between architects, engineers, and construction teams.",
// //   },
// //   {
// //     icon: Shield,
// //     title: "Safety Monitoring",
// //     description: "Advanced safety protocols and monitoring systems to ensure worker protection.",
// //   },
// //   {
// //     icon: BarChart3,
// //     title: "Analytics Dashboard",
// //     description: "Comprehensive analytics and reporting tools for project management insights.",
// //   },
// // ]

// // export function FeaturesSection() {
// //   return (
// //     <section id="solutions" className="py-24 bg-muted/30">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
// //             <Zap className="w-4 h-4" />
// //             <span>Innovative Solutions</span>
// //           </div>
// //           <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Revolutionary Construction Technology</h2>
// //           <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
// //             Experience the future of construction with our comprehensive suite of AR/VR tools designed to streamline
// //             every aspect of your project.
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {features.map((feature, index) => (
// //             <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
// //               <CardHeader>
// //                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
// //                   <feature.icon className="w-6 h-6 text-primary" />
// //                 </div>
// //                 <CardTitle className="text-xl">{feature.title}</CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <CardDescription className="text-base">{feature.description}</CardDescription>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// "use client";

// import {
//   FaCube,
//   FaUsers,
//   FaShieldAlt,
//   FaChartBar,
//   FaEye,
//   FaBolt,
// } from "react-icons/fa";

// const features = [
//   {
//     icon: FaEye,
//     title: "AR Visualization",
//     description:
//       "Overlay digital models onto real construction sites for precise visualization and planning.",
//   },
//   {
//     icon: FaCube,
//     title: "3D Modeling",
//     description:
//       "Create detailed 3D models that integrate seamlessly with your construction workflow.",
//   },
//   {
//     icon: FaBolt,
//     title: "Real-time Updates",
//     description:
//       "Get instant updates on project progress with live data synchronization.",
//   },
//   {
//     icon: FaUsers,
//     title: "Team Collaboration",
//     description:
//       "Enable seamless collaboration between architects, engineers, and construction teams.",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Safety Monitoring",
//     description:
//       "Advanced safety protocols and monitoring systems to ensure worker protection.",
//   },
//   {
//     icon: FaChartBar,
//     title: "Analytics Dashboard",
//     description:
//       "Comprehensive analytics and reporting tools for project management insights.",
//   },
// ];

// export function FeaturesSection() {
//   return (
//     <section id="solutions" className="py-24 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-blue-100 text-lime-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <FaBolt size={16} />
//             <span>Innovative Solutions</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//             Revolutionary Construction Technology
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Experience the future of construction with our comprehensive suite
//             of AR/VR tools designed to streamline every aspect of your project.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-lime-400"
//             >
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
//                 <feature.icon size={24} className="text-lime-400" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import {
  FaEye,
  FaSync,
  FaExclamationTriangle,
  FaChartBar,
  FaRobot,
  FaBrain,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: FaEye,
    title: "Immersive Visualization and BIM Integration",
    description:
      "Bring Building Information Modeling (BIM) directly to the construction site through Augmented Reality (AR). Visualize 3D models in real environments for better understanding, alignment, and execution.",
  },
  {
    icon: FaSync,
    title: "Real-Time Field and Cloud Synchronization",
    description:
      "Ensure continuous coordination between on-site teams and remote stakeholders. Updates from SiteLens sync instantly with FieldSync, providing a single source of truth for progress and data management.",
  },
  {
    icon: FaExclamationTriangle,
    title: "Early Issue Detection and Quality Assurance",
    description:
      "Detect design clashes, deviations, or construction errors early using visual overlays and issue tracking. Validate work against BIM models to maintain the highest standards of build quality.",
  },
  {
    icon: FaChartBar,
    title: "Data-Driven Insights and Project Intelligence",
    description:
      "Gain actionable insights from integrated dashboards and analytics. Track performance, monitor timelines, and make informed decisions that enhance efficiency and reduce project risk.",
  },
  {
    icon: FaRobot,
    title: "AI Predictive Clash & Risk Mitigation",
    description:
      "Leverage generative AI algorithms to analyze site overlays and BIM changes, automatically forecasting spatial conflicts and potential safety risks before installation begins.",
  },
  {
    icon: FaBrain,
    title: "Automated Progress Tracking via Computer Vision",
    description:
      "Deploy intelligent computer vision models to evaluate daily AR site scans, automatically measuring completion percentages against scheduled BIM baselines.",
  },
];

export function FeaturesSection() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-lime-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaBolt size={16} />
            <span>Innovative Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Revolutionary Construction Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of construction with our comprehensive suite
            of AR/VR and AI tools designed to streamline every aspect of your project.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-lime-400 bg-white"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <feature.icon size={24} className="text-lime-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}