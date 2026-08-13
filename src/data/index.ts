import type { Locale } from "@/i18n/routing";
import { site as siteRo } from "./ro/site";
import { site as siteEn } from "./en/site";
import { services as servicesRo, getServiceBySlug as getServiceBySlugRo } from "./ro/services";
import { services as servicesEn, getServiceBySlug as getServiceBySlugEn } from "./en/services";
import { projects as projectsRo, getProjectBySlug as getProjectBySlugRo } from "./ro/projects";
import { projects as projectsEn, getProjectBySlug as getProjectBySlugEn } from "./en/projects";
import { blogPosts as blogPostsRo, getPostBySlug as getPostBySlugRo } from "./ro/blog";
import { blogPosts as blogPostsEn, getPostBySlug as getPostBySlugEn } from "./en/blog";
import { homeFaqs as homeFaqsRo } from "./ro/faqs";
import { homeFaqs as homeFaqsEn } from "./en/faqs";

export type { Service } from "./en/services";
export type { Project } from "./en/projects";
export type { BlogPost } from "./en/blog";

export function getSite(locale: Locale) {
  return locale === "ro" ? siteRo : siteEn;
}

export function getServices(locale: Locale) {
  return locale === "ro" ? servicesRo : servicesEn;
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return locale === "ro" ? getServiceBySlugRo(slug) : getServiceBySlugEn(slug);
}

export function getProjects(locale: Locale) {
  return locale === "ro" ? projectsRo : projectsEn;
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return locale === "ro" ? getProjectBySlugRo(slug) : getProjectBySlugEn(slug);
}

export function getBlogPosts(locale: Locale) {
  return locale === "ro" ? blogPostsRo : blogPostsEn;
}

export function getPostBySlug(locale: Locale, slug: string) {
  return locale === "ro" ? getPostBySlugRo(slug) : getPostBySlugEn(slug);
}

export function getHomeFaqs(locale: Locale) {
  return locale === "ro" ? homeFaqsRo : homeFaqsEn;
}
