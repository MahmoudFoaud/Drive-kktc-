# Drive KKTC — AI Development Specification (Master Prompt)

## Overview

You are a senior Full-Stack Engineer, UI/UX Designer, SEO Specialist, and Performance Engineer.

Your task is to build a production-ready tourism website called **Drive KKTC**, inspired by the visual quality and user experience of **Drive Japan**, while using an original design and codebase.

The project should feel premium, modern, extremely fast, highly SEO optimized, mobile-first, and fully responsive.

The website promotes self-drive routes across Northern Cyprus.

The project must be implemented with modern best practices and clean architecture.

---

# Main Goals

The website should allow visitors to:

* Discover scenic driving routes
* Explore attractions
* Learn about historical places
* Find restaurants and cafés
* View beaches
* Navigate using Google Maps
* Read travel guides
* Browse beautiful photography
* Experience a premium tourism website

The experience should feel closer to a travel magazine than a traditional website.

---

# Target Audience

* Tourists
* Travelers
* Couples
* Families
* Road trip enthusiasts
* International visitors
* Local explorers

---

# Design Inspiration

Inspired by:

* Drive Japan
* National Geographic Travel
* Airbnb Experiences
* Apple.com
* Visit Iceland
* Visit Norway

Do NOT copy Drive Japan.

Create a unique design inspired by its simplicity and storytelling.

---

# Tech Stack

## Recommended (Best Practice)

Framework

* Next.js 15
* App Router

Language

* TypeScript

Styling

* Tailwind CSS

Icons

* Lucide React

Animations

* Framer Motion

Map

* Leaflet
* OpenStreetMap

Image Optimization

* Next Image

Deployment

* Vercel

Everything must work using only free services.

---

# Alternative Implementations

## Local

* HTML
* CSS
* JavaScript

Pros

Simple

No dependencies

Cons

Hard to scale

---

## Library Based

React

React Router

Tailwind

Leaflet

Framer Motion

---

## State of the Art

Next.js

Server Components

Static Generation

ISR

App Router

Image Optimization

Dynamic Metadata

---

# Folder Structure

/app

/components

/layout

/routes

/data

/locales

/public

/images

/icons

/hooks

/lib

/utils

/types

/styles

/constants

---

# Pages

Home

Routes

Route Details

About

Gallery

Contact

Search

404

Privacy

Terms

---

# Home Page

Hero Section

Large immersive image

Overlay gradient

Title

Subtitle

Search bar

CTA button

Featured Routes

Popular destinations

Interactive Map

Gallery

Travel Tips

Testimonials

Footer

---

# Route Listing Page

Grid layout

Large cards

Filtering

Searching

Sorting

Responsive layout

Lazy loading

Pagination

---

# Route Details Page

Hero image

Route title

Overview

Estimated duration

Distance

Difficulty

Best season

Interactive map

Timeline

Stop cards

Gallery

Local tips

Nearby routes

Google Maps navigation

Share buttons

SEO metadata

---

# Route Structure

Each route contains

Title

Slug

Description

Cover image

Distance

Duration

Difficulty

Region

Coordinates

Gallery

Stops

Travel tips

Restaurants

Cafés

Beaches

Nearby routes

---

# Stop Structure

Each stop contains

Name

Description

Image

Latitude

Longitude

Opening hours

Estimated visit time

Google Maps link

History

Category

Restaurant

Museum

Beach

Castle

Monastery

Viewpoint

Coffee Shop

Shopping

---

# Interactive Map

Use Leaflet.

Alternative

Google Maps Embed

Best

Leaflet + OpenStreetMap

Future

MapLibre

Map should include

Pins

Custom markers

Zoom

Popup

Current stop

Route path

---

# Search

Option 1

JavaScript filtering

Option 2

Fuse.js

Option 3

MiniSearch

Support

Instant search

Fuzzy search

Search by

Region

Route

Museum

Restaurant

Beach

---

# Filtering

By

Region

Distance

Duration

Difficulty

Category

Beach

Museum

Castle

Nature

Food

Coffee

---

# Image System

Store images locally.

public/images

Folder

routes/

restaurants/

cafes/

beaches/

hero/

gallery/

Every image

WebP

Optimized

Lazy loaded

Responsive

Proper ALT text

---

# Gallery

Grid

Lightbox

Zoom

Keyboard navigation

Swipe support

---

# Multilingual

Languages

Turkish

English

Arabic

Russian

Preferred

next-intl

Alternative

i18next

Local

JSON files

Example

/locales

tr.json

en.json

ar.json

ru.json

---

# SEO

Every page must include

Unique title

Meta description

Canonical

OpenGraph

Twitter Card

JSON-LD

Breadcrumb

Robots

Sitemap

Image Sitemap

Structured Data

FAQ Schema

Travel Route Schema

Place Schema

Organization Schema

Every image

ALT text

Title

Description

Filename optimized

Example

st-hilarion-castle-northern-cyprus.webp

NOT

IMG_00123.jpg

---

# Performance

Target

Lighthouse

Performance

100

SEO

100

Accessibility

100

Best Practices

100

Techniques

Image optimization

Dynamic imports

Lazy loading

Prefetching

Font optimization

Code splitting

Compression

---

# Accessibility

WCAG AA

Keyboard navigation

Focus states

ARIA labels

Screen reader support

Contrast ratio

Semantic HTML

---

# Components

Navbar

Footer

Hero

Route Card

Stop Card

Timeline

Gallery

Image Carousel

Interactive Map

Search

Filter

Button

Modal

Breadcrumb

Language Switcher

Share Button

Weather Card

Travel Tip Card

---

# UI Design

Modern

Minimal

Elegant

Rounded corners

Large photography

Glass effects

Soft shadows

Smooth transitions

Large whitespace

Premium typography

Responsive grid

---

# Typography

Headings

Bold

Elegant

Body

Highly readable

Use Google Fonts

Recommended

Inter

Plus Jakarta Sans

Manrope

---

# Colors

Primary

Deep Blue

Secondary

Emerald

Accent

Orange

Background

White

Dark Gray

Cards

Soft Gray

---

# Animations

Framer Motion

Hero fade

Scroll reveal

Card hover

Image zoom

Page transitions

Timeline animation

Gallery animation

Loading skeletons

Keep animations smooth and subtle.

---

# Data

Store route data in JSON.

Example

routes/

nicosia.json

kyrenia.json

iskele.json

lefke.json

famagusta.json

Generate pages dynamically.

Never hardcode route pages.

---

# Example Route JSON

{
"title":"",
"slug":"",
"description":"",
"duration":"",
"distance":"",
"difficulty":"",
"coverImage":"",
"gallery":[],
"stops":[]
}

---

# Weather

Local

Static weather notice

Library

Open-Meteo API (free)

State of the Art

Weather widget with caching

---

# Maps

Local

Google Maps links

Library

Leaflet

State of the Art

MapLibre

---

# Deployment

Deploy on

Vercel

Alternative

Netlify

No paid services.

---

# Coding Standards

Use TypeScript.

Strict typing.

Reusable components.

No duplicated code.

Clean architecture.

Proper folder organization.

ESLint

Prettier

Reusable hooks

Reusable utilities

---

# Responsive Design

Desktop

Laptop

Tablet

Mobile

Large Mobile

Everything must work perfectly on every screen.

---

# Browser Support

Chrome

Edge

Firefox

Safari

Mobile browsers

---

# Future Features

Favorites

User accounts

Trip planner

Offline routes

PWA

Route ratings

Comments

Travel blog

AI travel assistant

Route comparison

Estimated fuel cost

Nearby hotels

Nearby gas stations

Nearby EV chargers

Print route

Download PDF

---

# Final AI Instructions

Prioritize:

1. Performance
2. SEO
3. Accessibility
4. Responsive Design
5. Clean Code
6. Reusable Components
7. Beautiful UI
8. Excellent UX

Do not rush implementation.

Always choose maintainability over shortcuts.

If multiple implementation methods exist:

* First implement the recommended best-practice approach.
* Mention a simpler local implementation.
* Mention an open-source library alternative.
* Mention the current state-of-the-art solution.

Never use paid APIs or paid services.

The final result should look like a premium travel platform, inspired by Drive Japan in user experience and quality, but with its own original branding, layout, and implementation focused on promoting self-drive tourism across Northern Cyprus.


Place Lefkosa Girne Kapısı https://lefkosabelediyesi.org/storage/175/1.jpg Selimiye Mosque https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvfWSPggm3jp5wGVSnKJsGFSe71k6TS6k5eX0xDLu4vjRFUHsNv5nCpE&s=10 Büyük Han https://cdn.kulturenvanteri.com/wp-content/uploads/2020/06/Buyuk_Han_Great_Inn_at_North_Nicosia.jpg Rüstem Kitabevi https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvreuB7YDvF65wj8UmQgcQECy-UIvevc1M_00JfPA6g&s=10 Derviş Paşa Museum https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTdKVzOjR-azj_O7z_HFS1bV1I54t4jKFeqnROR8Lqg&s=10 Gomşu Restaurant https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzJmmdAlstuyNX1mGgiTYTLpRgJzCzu-Mu2VJFMrsVwNPtVdy-C7XM60k&s=10 Cyprus Modern Art Museum https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkYezoz0WQipyS9YXfIw_LGEIexGChQ_GDg3W-h-cSu6GPyatJ6W7ilA&s=10 Cyprus Car Museum https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHI_3XF0iQtPU54GHoVUeZQTVgNciPyp85Zt2NiUvyicxU2oqhULr425M&s=10 Place Magusa Salamis Harabeleri https://www.cyprusparadise.com/media/6524/salamis-ruins-statue-historical-town.jpg Lala Mustafa Paşa Mosque https://farm5.staticflickr.com/4129/5093440875_06a22508a4_b.jpg Mardo Kaleiçi https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zHqX4LF5pGsLT3hmRDRXPicxNkWBpJWT5eq3PlvmQHpQJP1wAOPmwd0P&s=10 Eziç Famagusta https://media-cdn.tripadvisor.com/media/photo-s/09/12/55/ef/ezic-magusa.jpg Kapalı Maraş https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7X_y0ZS_oBW0at7WKRNxFqCw3PWlRKPfw_76aV0OVDuXYJimGIQAjWv&s=10 Varosha Beach https://www.ercanairport.net/wp-content/uploads/vrosha-beach.jpg Tatlı Hayat https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFaQ8CBdYrLo9KtlrQAzQKQdCVk83d2AU8dzvLc5YjupgaUYe0ZyqSII&s=10 Place Kyrenia St. Hilarion Castle https://lp-cms-production.imgix.net/2023-05/shutterstockRF158075618.jpg?auto=format,compress&q=72&w=1024&fit=crop&crop=faces,edges Bellapais Abbey https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvMvtaJdumiMSMZ0Y24aCf1evRE8trqYGx4_8TmfLMteoADrTz-veQKpt&s=10 Vola Coffee https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhr5o3_HqPl6U7o785CA8_UnDDw1e9ACNadJzP9RnNRdXDXNJDADbtC8&s=10 Kybele Restaurant https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f7/37/18/kybele-restaurant-bar.jpg?w=500&h=-1&s=1 Mavi Köşk https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHyqHuhi22JWf-_ntp6yZyIb0aaveZf2aKHF9Gwc2aRo5Oke0jrqb8BZt&s=10 Ulfet Beach Club https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1evaO1jexyREmRiSkLFzdjivD32RsqNvzeJLLk-wAwqjLie8EeXWXoGo&s=10 Place Iskele İskele Archaeology Museum https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX0eh-wOfCZi3vW3hVpR4xLjaZq58Pdy3wsf5rYhT-lk7xP2a79f4-j4y&s=10 Panayia Theotokos Icon Museum https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-VzUFS-XFy9LA_t1Is1KrdbjEoXj-ch0XhsNgWItnFMjPfg6qeqVruQ&s=10 Café Paris & Bakery https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sR2hT-Rn2IlIoo89a7DajRySt4-u4Aw0IwQ0O5y8KbsxGPC6hN0lsRc&s=10 Boğaz Harbour https://www.kktcogrencileri.com/wp-content/uploads/2023/08/iskele-iskele-bogaz-satilik-arsa-2021110008047700019389463IN1B7I.jpg Barna Beach Fish Restaurant https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/65/4a/aa/the-restaurant-from-the.jpg?w=1000&h=600&s=1 Kalecik Public Beach https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqefrRZDfquQUrXULez4MZNlhPFZnBrWO-jmhNRQrbzflxt-1Bri9iP2wH&s=10 Terra Coffee & Lounge https://playfoursquare.s3.amazonaws.com/pix/vt4H0eGFE3BbR9JGYVqpJYQfYf4HuEXXEHGdgaKbHug.jpg Place Lefke – guzelyurt Vouni Palace https://www.visitncy.com/wp-content/uploads/2020/05/Vouni-Palace-1.jpg MOAR Cafe https://img02.restaurantguru.com/cc4a-Restaurant-MOAR-food.jpg Lefke Mining Museum https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuu0a-YbezTUqPze1_f12-P14O6vp5VFvcxvY_65-X1mm84fYPF6yQhEl&s=10 Gemikonağı Göleti https://www.kibrispostasi.com/upload/news/l/le/lefke_52f33ed9.jpg Cengiz Topel Monument https://www.visitncy.com/wp-content/uploads/2020/04/Cengiz-Topel-Memorial3.jpg Yeşilırmak https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhqhy2Ctar5gdwzkOhULHURVkJ2A0YKqIQTFZODcqniN_r8EMXo9t3uQ&s=10 Dillirga Restaurant https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/463194663_2735046143339500_7022926771529698419_n.jpg?stp=dst-jpg_tt6&cstp=mx960x957&ctp=s960x957&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FMdd6vmwHAAQ7kNvwFkq21a&_nc_oc=AdoDX0xslrbQn9LbiV1VywJ3KuEwJ0gKUwrmOSVTr8CGaKszi6ZdsLXztQFHgn3S-80&_nc_zt=23&_nc_ht=scontent-otp1-1.xx&_nc_gid=0ZTaVr-SiaFqjzlAlzUtew&_nc_ss=7b289&oh=00_AQAuVUiip-guTnX2R3oaSuIYF78zFyqBBKI5zT5yylDwLA&oe=6A5DE2AE#   D r i v e - k k t c -  
 