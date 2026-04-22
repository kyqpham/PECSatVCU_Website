import { 
  Montserrat, 
  Simonetta, 
  Roboto_Condensed, 
  Kadwa, 
  Inria_Serif, 
  Albert_Sans, 
  Kameron, 
  Kalam, 
  Alegreya_Sans_SC, 
  Alice 
} from "next/font/google";
import "./globals.css";

// Configure all fonts
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const simonetta = Simonetta({ weight: "400", subsets: ["latin"], variable: "--font-simonetta" });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], variable: "--font-roboto-condensed" });
const kadwa = Kadwa({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-kadwa" });
const inriaSerif = Inria_Serif({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-inria-serif" });
const albertSans = Albert_Sans({ subsets: ["latin"], variable: "--font-albert-sans" });
const kameron = Kameron({ subsets: ["latin"], variable: "--font-kameron" });
const kalam = Kalam({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-kalam" });
const alegreyaSansSC = Alegreya_Sans_SC({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-alegreya-sans-sc" });
const alice = Alice({ weight: "400", subsets: ["latin"], variable: "--font-alice" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserrat.variable} 
          ${simonetta.variable} 
          ${robotoCondensed.variable} 
          ${kadwa.variable} 
          ${inriaSerif.variable} 
          ${albertSans.variable} 
          ${kameron.variable} 
          ${kalam.variable} 
          ${alegreyaSansSC.variable} 
          ${alice.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}