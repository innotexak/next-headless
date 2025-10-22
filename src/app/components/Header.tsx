import React, { JSX, useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  Edit,
} from "lucide-react";
import { useQuery } from "@apollo/client/react";

import { HeaderProps, MenuItem } from '../types/interfaces';
import { baseUrl, GET_HEADER } from './helpers/queries';


const topNavIcon: Record<string, { icon: JSX.Element; href: string }> = {
  phone: {
    icon: <Phone size={14} />,
    href: "tel:",
  },
  email: {
    icon: <Mail size={14} />,
    href: "mailto:",
  },
  edit: {
    icon: <Edit size={14} />,
    href: "/",
  },
};


export const Header: React.FC<HeaderProps> = ({
  menuItems = [],
  logo = "Headless",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | string | null>(null);

  //apollo querie
const { data, loading, error } = useQuery(GET_HEADER, {
  variables: { baseUrl, route: "/homepage" },
});




  const defaultMenu: MenuItem[] = [
    { id: 1, name: "Home", url: "/", children: [] },
  ];

  // Extract CMS data

  const properties = data?.contentByRoute?.properties || {};  
  const logoFromCMS =
    properties?.headerLogo?.mediaItems?.[0]?.url || null; 

const topNavigation = properties?.toNavigation
  const menuItemsFromCMS = properties?.mainNavigation?.items?.map((item: any) => ({
      id: item.id,
      name: item.name,
      url: item.url,
    })) || [];

  const menu = menuItemsFromCMS.length > 0 ? menuItemsFromCMS : (menuItems.length > 0 ? menuItems : defaultMenu);

  const toggleDropdown = (itemId: number | string) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Optional loading or error state */}
      {loading && (
        <div className="bg-background text-center py-2 text-sm text-muted-foreground">
          Loading header...
        </div>
      )}
      {error && (
        <div className="bg-error text-white text-center py-2 text-sm">
          Failed to load header content.
        </div>
      )}

      {/* Top Bar */}
      <div className="hidden md:block bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
           {topNavigation && Array.isArray(topNavigation.links) && topNavigation.links.length > 0 ? (
       topNavigation.links.map((link: any) => {
            const iconData = topNavIcon[link.name?.toLowerCase()]; 
    return (
      <a
        key={link.id}
        href={`${iconData?.href ?? ""}${link.value ?? ""}`}
        className="flex items-center gap-1 hover:text-foreground transition-colors"
      >
        {iconData?.icon}
        <span>{link.value || link.name}</span>
      </a>
    );
  })
) : (
  <a
    href="tel:+1234567890"
    className="flex items-center gap-1 hover:text-foreground transition-colors"
  >
    <Phone size={14} />
    <span>+1 (234) 567-890</span>
  </a>
)}

            </div>
            {/* <div className="flex items-center gap-3">
              <a href="#" className="hover:text-foreground transition-colors">Sign In</a>
              <span>|</span>
              <a href="#" className="hover:text-foreground transition-colors">Register</a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            {logoFromCMS ? (
              <img src={logoFromCMS} alt="Logo" className="h-10 object-contain" />
            ) : (
              logo
            )}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menu.map((item: MenuItem) => {
              
              if(item.name.includes('404') || item.name.includes('search')){
                return null;  
              }
          return (
               <div key={item.id} className="relative group">
                <a
                  href={item.url}
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </a>

              </div>
            )})
        }

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-foreground hover:text-primary transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
        
            <button
              className="lg:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </nav>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4">
            {menu.map((item: MenuItem) => (
              <div key={item.id} className="border-b border-border last:border-b-0">
                <div className="flex items-center justify-between py-3">
                  <a href={item.url} className="flex-1 text-foreground hover:text-primary font-medium">
                    {item.name}
                  </a>
                </div>
              </div>
            ))}
            {/* Mobile contact info */}
            <div className="pt-4 mt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-foreground">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail size={16} />
                <span>info@example.com</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
