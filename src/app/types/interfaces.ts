export interface MenuChild {
  id: number | string;
  name: string;
  url: string;
}

export interface MenuItem extends MenuChild {
  children?: MenuChild[];
}

export interface HeaderProps {
  menuItems?: MenuItem[];
  logo?: string;
  cartCount?: number;
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterLinkGroups {
  company?: FooterLink[];
  support?: FooterLink[];
  legal?: FooterLink[];
}

export interface CompanyInfo {
  description?: string;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface FooterProps {
  logo?: string;
  companyInfo?: CompanyInfo;
  footerLinks?: FooterLinkGroups;
  socialLinks?: SocialLinks;
  copyrightText?: string;
}

export interface BannerType {
  bannerHeading: {
    value: string;
    model: string;
  };
  descripion: {
    value: string;
    model: string;
  };
  modeToggle: {
    value: string;
    model: string;
  };
  imagePicker: {
    blocks: Array<{
      contentProperties: {
        umbracoFile: {
          value: string;
          model: string;
        };
        alternateText: {
          value: string;
          model: string;
        };
      };
    }>;
    model: string;
  };
}