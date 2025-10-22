// // Footer.tsx
// import React, { use } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
// } from "lucide-react";
// import { CompanyInfo, FooterLinkGroups, FooterProps, SocialLinks } from "../types/interfaces";
// import { baseUrl, GET_FOOTER } from "./helpers/queries";
// import { useQuery } from "@apollo/client/react";


// const Footer: React.FC<FooterProps> = ({
//   logo = "YourBrand",
//   companyInfo = {},
//   footerLinks = {},
//   socialLinks = {},
//   copyrightText = "",
// }) => {

// const {data, error, loading} = useQuery(GET_FOOTER, {
//     variables: {
//       baseUrl,
//       route: "/homepage",
//     },
//   });


//   const properties = data?.contentByRoute?.properties;
   

// console.log("Footer data:", properties);

//   const defaultCompanyInfo: Required<CompanyInfo> = {
//     description:
//       "We are committed to delivering exceptional products and services to suite our customers.",
//     address: "Nile University of Nigeria",
//     city: "Abuja Nigeria",
//     phone: "+234(0)8156-890",
//     email: "info@vegaitglobal.com",
//   };

//   const defaultFooterLinks: Required<FooterLinkGroups> = {
//     company: [
//       { name: "About Us", url: "/about" },
//       { name: "Careers", url: "/careers" },
//       { name: "Press", url: "/press" },

//     ],
//     support: [
//       { name: "Help Center", url: "/help" },
//       { name: "Contact Us", url: "/contact" },
//       { name: "FAQ", url: "/faq" },
//     ],
//     legal: [
//       { name: "Privacy Policy", url: "/privacy" },
//       { name: "Terms of Service", url: "/terms" },
//       { name: "Cookie Policy", url: "/cookies" },
//       { name: "Accessibility", url: "/accessibility" },
//     ],
//   };

//   const defaultSocialLinks: Required<SocialLinks> = {
//     facebook: "https://facebook.com",
//     twitter: "https://twitter.com",
//     instagram: "https://instagram.com",
//     linkedin: "https://linkedin.com",
//     youtube: "https://youtube.com",
//   };

//   const company = Object.keys(companyInfo).length
//     ? companyInfo
//     : defaultCompanyInfo;
//   const links = Object.keys(footerLinks).length
//     ? footerLinks
//     : defaultFooterLinks;
//   const social = Object.keys(socialLinks).length
//     ? socialLinks
//     : defaultSocialLinks;
//   const copyright =
//     copyrightText ||
//     `© ${new Date().getFullYear()} ${logo}. All rights reserved.`;



//      if (loading) {
//     return (
//       <footer className="bg-secondary/30 border-t border-border mt-auto">
//         <div className="max-w-7xl m-auto">
//           <div className="container mx-auto px-4 py-12">
//             <div className="flex items-center justify-center">
//               <p className="text-muted-foreground">Loading footer...</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }

//   return (
//     <footer className="bg-secondary/30 border-t border-border mt-auto">
//    <div className="max-w-7xl m-auto">
//        {/* Main Footer */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-primary">{logo}</h3>
//             <p className="text-sm text-muted-foreground leading-relaxed">
//               {company.description}
//             </p>
//             <div className="space-y-2 text-sm text-muted-foreground">
//               <div className="flex items-start gap-2">
//                 <MapPin size={16} className="mt-1 flex-shrink-0" />
//                 <div>
//                   <p>{company.address}</p>
//                   <p>{company.city}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h4 className="font-semibold text-foreground mb-4">Company</h4>
//             <ul className="space-y-2">
//               {links.company?.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.url}
//                     className="text-sm text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support Links */}
//           <div>
//             <h4 className="font-semibold text-foreground mb-4">Support</h4>
//             <ul className="space-y-2">
//               {links.support?.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.url}
//                     className="text-sm text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact & Social */}
//           <div>
//             <h4 className="font-semibold text-foreground mb-4">
//              Social Connect
//             </h4>
   

//             <div className="flex gap-3">
//               {social.facebook && (
//                 <a
//                   href={social.facebook}
//                   className="w-9 h-9 rounded-full bg-muted hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition-all"
//                   aria-label="Facebook"
//                 >
//                   <Facebook size={18} />
//                 </a>
//               )}
//               {social.twitter && (
//                 <a
//                   href={social.twitter}
//                   className="w-9 h-9 rounded-full bg-muted hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition-all"
//                   aria-label="Twitter"
//                 >
//                   <Twitter size={18} />
//                 </a>
//               )}
//               {social.instagram && (
//                 <a
//                   href={social.instagram}
//                   className="w-9 h-9 rounded-full bg-muted hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition-all"
//                   aria-label="Instagram"
//                 >
//                   <Instagram size={18} />
//                 </a>
//               )}
//               {social.linkedin && (
//                 <a
//                   href={social.linkedin}
//                   className="w-9 h-9 rounded-full bg-muted hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition-all"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin size={18} />
//                 </a>
//               )}
//               {social.youtube && (
//                 <a
//                   href={social.youtube}
//                   className="w-9 h-9 rounded-full bg-muted hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition-all"
//                   aria-label="YouTube"
//                 >
//                   <Youtube size={18} />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-border bg-secondary/50">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-muted-foreground text-center md:text-left">
//               {copyright}
//             </p>
//             <div className="flex flex-wrap justify-center gap-6 text-sm">
//               {links.legal?.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//    </div>
//     </footer>
//   );
// };

// export default Footer;



// Footer.tsx
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FooterProps } from "../types/interfaces";
import { baseUrl, GET_FOOTER } from "./helpers/queries";
import { useQuery } from "@apollo/client/react";

const Footer: React.FC<FooterProps> = ({
  logo = "YourBrand",
}) => {
  const { data, error, loading } = useQuery(GET_FOOTER, {
    variables: {
      baseUrl,
      route: "/homepage",
    },
  });

  if (loading) {
    return (
      <footer className="bg-secondary/30 border-t border-border mt-auto">
        <div className="max-w-7xl m-auto">
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-center justify-center">
              <p className="text-muted-foreground">Loading footer...</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (error) {
    console.error("Footer query error:", error);
    return (
      <footer className="bg-secondary/30 border-t border-border mt-auto">
        <div className="max-w-7xl m-auto">
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-center justify-center">
              <p className="text-muted-foreground">Unable to load footer</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const properties = data?.contentByRoute?.properties;
  
  // Extract footer data from query
  const footerIntro = properties?.footIntro?.value || "We are committed to delivering exceptional products and services to suite our customers.";
  const copyrightText = properties?.footerCopyrightText?.value || `© ${new Date().getFullYear()} ${logo}. All rights reserved.`;
  
  // Map footer columns from query
  const footerColumns = properties?.footerColumns?.blocks?.map((block: any) => {
    const columnProps = block.contentProperties;
    return {
      title: columnProps?.title?.value || "",
      items: columnProps?.items?.blocks?.map((item: any) => {
        const linkProps = item.contentProperties;
        return {
          text: linkProps?.cTAText?.value || "",
          url: linkProps?.cTALinkPicker?.links?.[0]?.url || "#",
          target: linkProps?.cTALinkPicker?.links?.[0]?.target || "_self",
        };
      }) || [],
    };
  }) || [];

  // Map social links from query
  const socialLinks = properties?.socialLinks?.blocks?.map((block: any) => {
    const linkProps = block.contentProperties;
    return {
      icon: linkProps?.icon?.value || "",
      url: linkProps?.cTALinkPicker?.links?.[0]?.url || "#",
      text: linkProps?.cTAText?.value || "",
      target: linkProps?.cTALinkPicker?.links?.[0]?.target || "_blank",
    };
  }) || [];

  // Helper function to get social icon component
  const getSocialIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      facebook: Facebook,
      twitter: Twitter,
      instagram: Instagram,
      linkedin: Linkedin,
      youtube: Youtube,
    };
    const IconComponent = iconMap[iconName.toLowerCase()] || null;
    return IconComponent ? <IconComponent size={18} /> : null;
  };

  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="max-w-7xl m-auto">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">{logo}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {footerIntro}
              </p>
            </div>

            {/* Dynamic Footer Columns */}
            {footerColumns.map((column: any, index: number) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.items.map((item: any, itemIndex: number) => (
                    <li key={itemIndex}>
                      <a
                        href={item.url}
                        target={item.target}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  Social Connect
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social: any, index: number) => (
                    <a
                      key={index}
                      href={social.url}
                      target={social.target}
                      className="w-9 h-9 rounded-full bg-muted hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition-all"
                      aria-label={social.text}
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border bg-secondary/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                @{new Date().getFullYear()}.{copyrightText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

