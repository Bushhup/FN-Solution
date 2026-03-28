import { MetadataRoute } from 'next'
import { services } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://fntaxsolution.in'; // IMPORTANT: Replace with your actual domain

  // Get all service pages
  const serviceUrls = services.map(service => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  // Define static pages
  const staticUrls = [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
    { url: `${siteUrl}/testimonials`, lastModified: new Date() },
    { url: `${siteUrl}/services`, lastModified: new Date() },
    { url: `${siteUrl}/login`, lastModified: new Date() },
    { url: `${siteUrl}/register`, lastModified: new Date() },
    // Add new local SEO pages
    { url: `${siteUrl}/gst-registration-navi-mumbai`, lastModified: new Date() },
    { url: `${siteUrl}/pan-card-services-navi-mumbai`, lastModified: new Date() },
    { url: `${siteUrl}/udyam-registration-navi-mumbai`, lastModified: new Date() },
    { url: `${siteUrl}/company-registration-thane`, lastModified: new Date() },
    { url: `${siteUrl}/income-tax-filing-navi-mumbai`, lastModified: new Date() },
  ];

  return [
    ...staticUrls,
    ...serviceUrls,
  ];
}
