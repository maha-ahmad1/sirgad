// "use client"

// export default function DecorativeCircles() {
//   return (
//     <div className="relative w-64 h-64 md:w-80 md:h-80">
//       {/* Background circles - incomplete/open circles for decorative effect */}
//       <svg
//         className="absolute inset-0 w-full h-full"
//         viewBox="0 0 320 320"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Large outer circle - open */}
//         <circle
//           cx="160"
//           cy="160"
//           r="140"
//           stroke="url(#gradientOuter)"
//           strokeWidth="2"
//           opacity="0.3"
//           strokeDasharray="880 880"
//           strokeDashoffset="220"
//         />

//         {/* Medium circle */}
//         <circle
//           cx="160"
//           cy="160"
//           r="100"
//           stroke="url(#gradientMid)"
//           strokeWidth="2"
//           opacity="0.5"
//           strokeDasharray="628 628"
//           strokeDashoffset="157"
//         />

//         {/* Inner circle */}
//         <circle
//           cx="160"
//           cy="160"
//           r="60"
//           stroke="url(#gradientInner)"
//           strokeWidth="2.5"
//           opacity="0.7"
//           strokeDasharray="376 376"
//           strokeDashoffset="94"
//         />

//         {/* Gradient definitions */}
//         <defs>
//           <linearGradient id="gradientOuter" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
//             <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.3" />
//           </linearGradient>

//           <linearGradient id="gradientMid" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.7" />
//             <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
//           </linearGradient>

//           <linearGradient id="gradientInner" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
//             <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.5" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   )
// }
