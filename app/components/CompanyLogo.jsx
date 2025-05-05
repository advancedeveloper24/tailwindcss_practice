import Image from "next/image";
import amazon from "../../public/assets/amazon.png";
import slack from "../../public/assets/slack.png";
import woocommerce from "../../public/assets/woocommerce.png";
import meundies from "../../public/assets/meundies.png";
import sitepoint from "../../public/assets/sitepoint.png";

const CompanyLogo = () => {
  const logos = [slack, woocommerce, meundies, sitepoint, amazon];

  return (
    <div className="w-full container mx-auto py-20 gap-8 px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col sm:items-center items-start">
      <div className="w-[300px] shrink-0 px-6 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-leftt">
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {logos.map((logo, index) => (
          <Image
            src={logo}
            key={index}
            alt="company logos"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:opacity-100 transition-all"
          />
        ))}
        {/* Duplicate Logos */}
        {logos.map((logo, index) => (
          <Image
            src={logo}
            alt="company logos"
            key={index}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
