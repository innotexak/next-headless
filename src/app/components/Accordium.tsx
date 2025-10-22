'use client';

import React, { useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { baseUrl, GET_ACCORDION } from './helpers/queries';
import { ChevronDown } from 'lucide-react';


interface AccordionItemData {
  description: {
    value: string;
    sourceValue: string;
    model: string;
  };
  url: {
    blocks: Array<{
      contentProperties: {
        cTAText?: {
          value: string;
          model: string;
        };
        cTAStyle?: {
          value: string;
          model: string;
        };
      };
    }>;
    model: string;
  };
}

interface AccordionData {
  accordionItemTitle: {
    value: string;
    model: string;
  };
  accordionDescription: {
    value: string;
    model: string;
  };
  background: {
    value: string;
    model: string;
  };
  modeToggle: {
    value: string;
    model: string;
  };
  accordionItems: {
    blocks: Array<{
      contentProperties: AccordionItemData;
    }>;
    model: string;
  };
}

interface AccordionProps {
  route?: string;
}



// Default accordion data
const DEFAULT_ACCORDION_DATA = {
  accordionItemTitle: { value: 'Frequently Asked Questions', model: '', sourceValue: '' },
  accordionDescription: { value: 'Find answers to common questions below', model: '', sourceValue: '' },
  background: { value: 'light', model: '' },
  modeToggle: { value: 'light', model: '' },
  accordionItems: {
    blocks: [
      {
        contentProperties: {
          description: {
            value: '<strong>What services do you offer?</strong><br/>We offer a comprehensive range of services including web development, mobile applications, cloud solutions, and digital transformation consulting. Our team specializes in creating custom solutions tailored to your business needs.',
            sourceValue: '',
            model: ''
          },
          url: {
            blocks: [
              {
                contentProperties: {
                  cTAText: { value: 'Learn More', model: '' },
                  cTAStyle: { value: 'primary', model: '' }
                }
              }
            ],
            model: ''
          }
        }
      },
      {
        contentProperties: {
          description: {
            value: '<strong>How long does a typical project take?</strong><br/>Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our initial consultation.',
            sourceValue: '',
            model: ''
          },
          url: {
            blocks: [
              {
                contentProperties: {
                  cTAText: { value: 'Get Started', model: '' },
                  cTAStyle: { value: 'secondary', model: '' }
                }
              }
            ],
            model: ''
          }
        }
      },
      {
        contentProperties: {
          description: {
            value: '<strong>What is your pricing structure?</strong><br/>We offer flexible pricing models including fixed-price projects, hourly rates, and retainer arrangements. Pricing depends on project requirements, timeline, and complexity. Contact us for a customized quote.',
            sourceValue: '',
            model: ''
          },
          url: {
            blocks: [
              {
                contentProperties: {
                  cTAText: { value: 'Contact Us', model: '' },
                  cTAStyle: { value: 'outline', model: '' }
                }
              }
            ],
            model: ''
          }
        }
      },
      {
        contentProperties: {
          description: {
            value: '<strong>Do you provide ongoing support?</strong><br/>Yes! We offer comprehensive maintenance and support packages to ensure your application runs smoothly. This includes updates, bug fixes, security patches, and feature enhancements.',
            sourceValue: '',
            model: ''
          },
          url: {
            blocks: [],
            model: ''
          }
        }
      }
    ],
    model: ''
  }
};


export const Accordion: React.FC<AccordionProps> = ({ route = '/homepage' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

    //apollo querie
  const { data, loading, error } = useQuery<Record<string, any>>(GET_ACCORDION, {variables:{route, baseUrl}  });

  if (loading) {
    return (
      <section className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse space-y-4 max-w-4xl mx-auto">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            <div className="space-y-3 mt-8">
              <div className="h-16 bg-gray-300 rounded"></div>
              <div className="h-16 bg-gray-300 rounded"></div>
              <div className="h-16 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Navigate through the correct data structure
  const modules = data?.contentByRoute?.properties?.modules?.blocks || [];
  
  // Find the AccordionItem block
  const accordionBlock = modules.find(
    (block: any) => block.contentProperties?.__typename === 'AccordionItem'
  );
  
  const accordionData = accordionBlock?.contentProperties;

  // Use default data if there's no accordion data
  const title = accordionData?.accordionItemTitle?.value || DEFAULT_ACCORDION_DATA.accordionItemTitle.value;
  const description = accordionData?.accordionDescription?.value || DEFAULT_ACCORDION_DATA.accordionDescription.value;
  const background = accordionData?.background?.value || 'light';
  const modeToggle = accordionData?.modeToggle?.value || 'light';
  const items = accordionData?.accordionItems?.blocks || DEFAULT_ACCORDION_DATA.accordionItems.blocks;


  const isDarkMode = modeToggle === 'dark';
  const bgClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900';
  const cardBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDarkMode ? 'border-gray-700' : 'border-gray-200';

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Extract title from description (first sentence or strong tag content)
  const getAccordionTitle = (description: string, index: number): string => {
    if (!description) return `Accordion Item ${index + 1}`;
    
    // Try to extract content from <strong> tag
    const strongMatch = description.match(/<strong>(.*?)<\/strong>/);
    if (strongMatch) {
      return strongMatch[1];
    }
    
    // Otherwise, get first sentence
    const firstSentence = description.split('.')[0].replace(/<[^>]*>/g, '');
    return firstSentence || `Accordion Item ${index + 1}`;
  };

  return (
    <section className={`w-full ${bgClass} py-16 md:py-24 transition-colors duration-300`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Show error message if there was an error (but still show default content) */}
        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm text-center">
              Unable to load custom content. Showing default FAQs.
            </p>
          </div>
        )}

        {/* Accordion Items */}
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map((item, index) => {
              const itemData = item.contentProperties;
              const itemDescription = itemData?.description?.value || '';
              const isOpen = openIndex === index;
              const links = itemData?.url?.blocks || [];
              const accordionTitle = getAccordionTitle(itemDescription, index);

              return (
                <div
                  key={index}
                  className={`${cardBgClass} border ${borderClass} rounded-lg overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${index}`}
                  >
                    <span className="font-semibold text-lg pr-4">
                      {accordionTitle}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      } ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    id={`accordion-content-${index}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      overflow: 'hidden'
                    }}
                  >
                    <div className={`p-6 pt-0 border-t ${borderClass}`}>
                      {itemDescription && (
                        <div
                          className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}
                          dangerouslySetInnerHTML={{ __html: itemDescription }}
                        />
                      )}

                      {/* Links/CTAs */}
                      {links.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {links.map((link: { contentProperties: any; }, linkIndex: React.Key | null | undefined) => {
                            const linkData = link.contentProperties;
                            const ctaText = linkData?.cTAText?.value || 'Learn More';
                            const ctaStyle = linkData?.cTAStyle?.value || 'primary';

                            const buttonClass =
                              ctaStyle === 'primary'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : ctaStyle === 'secondary'
                                ? isDarkMode
                                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                                : isDarkMode
                                ? 'border border-gray-600 text-gray-300 hover:bg-gray-700'
                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50';

                            return (
                              <button
                                key={linkIndex}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${buttonClass}`}
                              >
                                {ctaText}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                No accordion items available.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};