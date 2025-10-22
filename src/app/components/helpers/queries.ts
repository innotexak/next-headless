import { gql } from "@apollo/client";

export const baseUrl:string = process.env.NEXT_PUBLIC_UMBRACO_GRAPHQL_URL as string
export const GET_ACCORDION = gql`

  query GetAccordion ($baseUrl:String! $route:String!) {
    contentByRoute(route: $route, baseUrl: $baseUrl) {
      properties {
        __typename
        ... on HomePage {
          modules {
            blocks {
              contentProperties {
                __typename
                ... on AccordionItem {
                  accordionItemTitle {
                    value
                    model
                  }
                  accordionDescription {
                    value
                    model
                  }
                  background {
                    value
                    model
                  }
                  modeToggle {
                    value
                    model
                  }
                  accordionItems {
                    blocks {
                      contentProperties {
                        __typename
                        ... on AccordionItems {
                          description {
                            value
                            sourceValue
                            model
                          }
                          url {
                            blocks {
                              contentProperties {
                                __typename
                                ... on Link {
                                  cTAText {
                                    value
                                    model
                                  }
                                  cTAStyle {
                                    value
                                    model
                                  }
                                  icon {
                                    value
                                    model
                                  }
                                  iconPosition {
                                    value
                                    model
                                  }
                                  overlayPicker {
                                    model
                                  }
                                  enableOverlay {
                                    value
                                    model
                                  }
                                }
                              }
                            }
                            model
                          }
                        }
                      }
                    }
                    model
                  }
                }
              }
            }
            model
          }
        }
      }
    }
  }
`;

export const GET_BANNER = gql`
  query GetBanner($baseUrl: String! $route: String!) {
  contentByRoute(route: $route, baseUrl: $baseUrl) {
    properties {
      __typename
      ... on HomePage {
        modules {
          blocks {
            contentProperties {
              __typename
              ... on Banner {
                bannerHeading {
                  value
                  model
                }
                descripion {
                  value
                  model
                }
                modeToggle {
                  value
                  model
                }
                imagePicker {
                  blocks {
                    contentProperties {
                      __typename
                      ... on Image { 
                        umbracoFile {
                          value
                          model
                        }
                        alternateText {
                          value
                          model
                        }
                      }
                      ... on ResponseBannerImages4 {
                        altText {
                          value
                          model
                        }
                        mobileImage {
                          mediaItems {
                            url(urlMode: ABSOLUTE)
                            name
                            key
                          }
                          model
                        }
                        tabletImage {
                          mediaItems {
                            url(urlMode: ABSOLUTE)
                            name
                          }
                          model
                        }
                        desktopImage {
                          mediaItems {
                            url(urlMode: ABSOLUTE)
                            name
                          }
                          model
                        }
                      }
                    }
                  }
                  model
                }
              }
            }
          }
          model
        }
      }
    }
  }
}`;


export const GET_HEADER = gql`
  query GetHeader($baseUrl: String! $route: String!) {
    contentByRoute(route:$route, baseUrl: $baseUrl) {
      properties {
        __typename
        ... on HomePage {
          headerLogo {
            mediaItems {
              url(urlMode: DEFAULT)
              name
              id
            }
          }
          headerLogoMobile {
            mediaItems {
              url(urlMode: DEFAULT)
              name
              id
            }
          }
          mainNavigation {
            items {
              name
              id
              url(urlMode: DEFAULT)
            }
          }
 toNavigation{
          model
          links{
            url(urlMode:DEFAULT)
            urlSegment
            name
            id
        		key
          }
        }
        }
      }
    }
  }
`;



export const GET_FOOTER = gql`
  query GetFooter($baseUrl: String! $route: String!) {
    contentByRoute(route:$route, baseUrl: $baseUrl) {
       properties {
      ... on HomePage {
        footIntro {
          value
        }

        footerCopyrightText {
          value
        }

        footerColumns {
          blocks {
            contentProperties {
              ... on FooterColumn {
                title {
                  value
                }
                items {
                  blocks {
                    contentProperties {
                      __typename
                      ... on Link {
                        cTALinkPicker {
                          links {
                            url(urlMode: RELATIVE)
                            type
                            target
                          }
                        }
                        cTAText {
                          value
                          model
                        }
                        cTAStyle {
                          value
                          model
                        }
                        icon {
                          value
                          model
                        }
                        iconPosition {
                          value
                          model
                        }
                        overlayPicker {
                          model
                          items {
                            name
                          }
                        }
                        enableOverlay {
                          value
                          model
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        socialLinks {
          blocks {
            contentProperties {
              __typename
              ... on Link {
                cTAText {
                  value
                  model
                }
                cTAStyle {
                  value
                  model
                }
                icon {
                  value
                  model
                }
                iconPosition {
                  value
                  model
                }
                cTALinkPicker {
                  links {
                    url(urlMode: ABSOLUTE)
                    type
                    target
                  }
                }
                overlayPicker {
                  model
                  items {
                    name
                  }
                }
                enableOverlay {
                  value
                  model
                }
              }
            }
          }
        }
      }
    }
    }
  }
`;


// query {
//   contentByRoute(
//     route: "/homepage", 
//     baseUrl: "https://localhost:4432",
//   ) {
//     properties {
//       __typename
//       ... on HomePage {
//         footIntro {
//           value
//         }
//         socialLinks {
//           model
//           links {
//             url(urlMode: DEFAULT)
//             name
//             target
//             type
//             key
//           }
//         }
//         footerCopyrightText {
//           value
//         }
//         footerColumns {
//           model
//           blocks {
//             contentProperties {
//               # 1. Fragment for the top-level block: FooterLink
//               ... on FooterLink {
//                 title {
//                   value
//                 }
//                 # 2. Traverse the nested BlockList inside FooterLink
//                 items {
//                   model
//                   blocks {
//                     contentProperties {
//                       # 3. Fragment for the inner block: FootItems (the actual link item)
//                       ... on FootItems {
//                         itemName {
//                           value # e.g., "careers" or "about"
//                         }
//                         relativePath {
//                           value # e.g., "Careers" or "About Us"
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }