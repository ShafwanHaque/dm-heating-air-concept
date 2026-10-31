export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {
  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };
  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };
  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };
  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };
  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
    };
  };
  seo: {
    title: string;
    description: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };
  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };
  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };
  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };
  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {
  "brand": {
    "name": "D&M Heating and Air Conditioning",
    "shortName": "D&M",
    "logo": "/brand/dm-official-logo.png",
    "logoLight": "/brand/dm-official-logo.png",
    "region": "Auburn · Opelika · Surrounding Counties"
  },
  "theme": {
    "style": "clean",
    "colors": {
      "brandPrimary": "#C92335",
      "brandSecondary": "#4A98CC",
      "brandAccent": "#F2A93B",
      "page": "#172B38",
      "surfaceDark": "#10222D",
      "surfaceDarkAlt": "#1B3443",
      "surfaceElevated": "#29485A",
      "surfaceSoft": "#F3F6F7",
      "textPrimary": "#FFF9F5",
      "textSecondary": "#DCE6EA",
      "textMuted": "#A9BBC4",
      "textOnBrand": "#FFFFFF",
      "borderSubtle": "#344D5A",
      "borderStrong": "#59717D",
      "glowPrimary": "#C92335",
      "glowSecondary": "#4A98CC",
      "networkLine": "#F2A93B",
      "success": "#71B88B",
      "service1": "#C92335",
      "service2": "#4A98CC",
      "service3": "#F2A93B",
      "service4": "#1B3443",
      "service5": "#29485A"
    }
  },
  "header": {
    "navServices": "Services",
    "navAreas": "Service areas",
    "navContact": "Contact",
    "helpLabel": "Call (334) 749-7127",
    "ctaLabel": "Request service",
    "mobileEyebrow": "AUBURN · OPELIKA · SURROUNDING COUNTIES",
    "mobileCallLabel": "Call now"
  },
  "opening": {
    "enabled": false,
    "durationMs": 1400,
    "eyebrow": "AUBURN · OPELIKA · 35+ YEARS",
    "line1": "You can depend",
    "line2": "on D&M.",
    "detail": "D&M Heating and Air Conditioning · Auburn · Opelika · Surrounding Counties",
    "location": "Locally owned Bryant dealer",
    "skipLabel": "Skip intro"
  },
  "hero": {
    "layout": "service-craft",
    "eyebrow": "AUBURN · OPELIKA · 35+ YEARS",
    "headlineLine1": "You can depend",
    "headlineLine2": "on D&M.",
    "description": "A locally owned Bryant dealer with more than 35 years serving Auburn, Opelika, and the surrounding counties.",
    "primaryCta": "Request service",
    "secondaryCta": "Call D&M",
    "locationLabel": "AUBURN · OPELIKA · SURROUNDING COUNTIES",
    "locationValue": "Auburn · Opelika · Lee County",
    "edgeLabel": "D&M HEATING AND AIR CONDITIONING",
    "bottomStatement": "Auburn · Opelika · Lee County",
    "sillLabel": "LOCALLY OWNED BRYANT DEALER",
    "serviceLabels": [
      "Cooling",
      "Heating",
      "Indoor air"
    ],
    "discoverLabel": "Explore services",
    "motion": {
      "enabled": true,
      "pace": "balanced",
      "ambient": false
    },
    "system": {
      "eyebrow": "LOCAL COMFORT / IN MOTION",
      "modes": [
        {
          "id": "cool",
          "label": "Cooling",
          "detail": "A considered path from warm intake to balanced, conditioned air."
        },
        {
          "id": "warm",
          "label": "Heating",
          "detail": "Steady circulation, carefully controlled for colder days."
        },
        {
          "id": "pure",
          "label": "Air quality",
          "detail": "A focus on filtration and the air moving through every room."
        }
      ]
    },
    "media": {
      "primarySrc": "/hero/dm-home-hero.jpg",
      "primaryAlt": "A family playing outside beside a Bryant heat pump installed at their home.",
      "primaryPosition": "center 48%",
      "fit": "cover",
      "backdrop": "matte"
    }
  },
  "seo": {
    "title": "D&M Heating & Air | Auburn & Opelika, AL",
    "description": "Dependable heating, cooling, maintenance and indoor air quality from your local Bryant dealer. Call 334-749-7127."
  },
  "contact": {
    "phoneDisplay": "(334) 749-7127",
    "phoneHref": "tel:+13347497127",
    "email": "YoucandependonDM@gmail.com",
    "address": "Opelika, AL",
    "contactUrl": "#contact",
    "servicesUrl": "#services"
  },
  "brandStandard": {
    "eyebrow": "LOCALLY OWNED BRYANT DEALER",
    "titleLine1": "Local know-how. Year-round comfort.",
    "titleLine2": "D&M Heating and Air Conditioning",
    "bodyTitle": "D&M is a locally owned and operated Bryant dealer serving Auburn, Opelika, and the surrounding counties for more than 35 years, with installation, repair, maintenance, and air-quality solutions.",
    "body": "D&M is a locally owned and operated Bryant dealer serving Auburn, Opelika, and the surrounding counties for more than 35 years, with installation, repair, maintenance, and air-quality solutions.",
    "callLabel": "Call now",
    "availabilityLabel": "Auburn · Opelika · Surrounding Counties",
    "panelEyebrow": "D&M",
    "panelTitle": "D&M is a locally owned and operated Bryant dealer serving Auburn, Opelika, and the surrounding counties for more than 35 years, with installation, repair, maintenance, and air-quality solutions.",
    "panelFooter": "Auburn · Opelika · Lee County",
    "handoff": "Explore D&M services.",
    "items": [
      {
        "icon": "cooling",
        "label": "Heating & cooling",
        "detail": "Repair, installation, and service for heat pumps, furnaces, and air conditioners."
      },
      {
        "icon": "heating",
        "label": "Preventive maintenance",
        "detail": "Seasonal system care, with added savings for maintenance plan customers."
      },
      {
        "icon": "maintenance",
        "label": "Air quality services",
        "detail": "Purification, humidity control, and ventilation improvements for your home."
      }
    ]
  },
  "services": {
    "eyebrow": "D&M · SERVICES",
    "introLine1": "Service that fits",
    "introLine2": "your day-to-day.",
    "summaryEyebrow": "LOCALLY OWNED BRYANT DEALER",
    "summaryTitle": "D&M is a locally owned and operated Bryant dealer serving Auburn, Opelika, and the surrounding counties for more than 35 years, with installation, repair, maintenance, and air-quality solutions.",
    "summaryBody": "D&M is a locally owned and operated Bryant dealer serving Auburn, Opelika, and the surrounding counties for more than 35 years, with installation, repair, maintenance, and air-quality solutions.",
    "summaryCta": "Talk with the team",
    "items": [
      {
        "name": "Heating & cooling",
        "shortName": "Comfort",
        "image": "/services/01.svg",
        "description": "Repair, installation, and service for heat pumps, furnaces, and air conditioners."
      },
      {
        "name": "Preventive maintenance",
        "shortName": "Maintenance",
        "image": "/services/02.svg",
        "description": "Seasonal system care, with added savings for maintenance plan customers."
      },
      {
        "name": "Air quality services",
        "shortName": "Air quality",
        "image": "/services/03.svg",
        "description": "Purification, humidity control, and ventilation improvements for your home."
      },
      {
        "name": "Emergency repair",
        "shortName": "Fast response",
        "image": "/services/04.svg",
        "description": "Same-day repairs when parts are available and round-the-clock emergency help."
      },
      {
        "name": "System replacement",
        "shortName": "Installation",
        "image": "/services/05.svg",
        "description": "Free estimates for replacements and a 10-year manufacturer parts warranty."
      }
    ]
  },
  "coverage": {
    "eyebrow": "LOCAL SERVICE AREA",
    "titleLine1": "Nearby when",
    "titleLine2": "comfort matters.",
    "description": "Serving Auburn, Opelika, Dadeville, Alexander City, Jacksons Gap, Lake Martin, Notasulga, Waverly, Lake Harding, Beauregard, Cusseta, Ladonia, Phenix City, Lanett, Salem, Valley, Tallassee, Tuskegee, Shorter, and Wetumpka, Alabama.",
    "featuredLocation": "Opelika, AL",
    "locationDetail": "Proud to serve Auburn · Opelika · Surrounding Counties.",
    "ctaLabel": "Request service",
    "networkLabel": "THE LOCAL SERVICE NETWORK",
    "regionLabel": "Auburn · Opelika · Surrounding Counties",
    "metrics": [
      {
        "value": "20 listed areas",
        "label": "Service area"
      },
      {
        "value": "35+ years serving the area",
        "label": "Local experience"
      },
      {
        "value": "Locally owned Bryant dealer",
        "label": "Trusted service"
      }
    ],
    "locations": [
      {
        "name": "Auburn, AL",
        "kind": "city",
        "lat": 32.6099,
        "lng": -85.4808,
        "hub": false
      },
      {
        "name": "Opelika, AL",
        "kind": "city",
        "lat": 32.6454,
        "lng": -85.3783,
        "hub": true
      },
      {
        "name": "Dadeville, AL",
        "kind": "city",
        "lat": 32.8312,
        "lng": -85.7636,
        "hub": false
      },
      {
        "name": "Alexander City, AL",
        "kind": "city",
        "lat": 32.944,
        "lng": -85.953,
        "hub": false
      },
      {
        "name": "Jacksons Gap, AL",
        "kind": "city",
        "lat": 32.8862,
        "lng": -85.8116,
        "hub": false
      },
      {
        "name": "Lake Martin, AL",
        "kind": "community",
        "lat": 32.728,
        "lng": -85.912,
        "hub": false
      },
      {
        "name": "Notasulga, AL",
        "kind": "city",
        "lat": 32.5572648,
        "lng": -85.6691936,
        "hub": false
      },
      {
        "name": "Waverly, AL",
        "kind": "city",
        "lat": 32.735408,
        "lng": -85.5791191,
        "hub": false
      },
      {
        "name": "Lake Harding, AL",
        "kind": "community",
        "lat": 32.663,
        "lng": -85.091,
        "hub": false
      },
      {
        "name": "Beauregard, AL",
        "kind": "community",
        "lat": 32.543,
        "lng": -85.371,
        "hub": false
      },
      {
        "name": "Cusseta, AL",
        "kind": "community",
        "lat": 32.7875,
        "lng": -85.30583,
        "hub": false
      },
      {
        "name": "Ladonia, AL",
        "kind": "community",
        "lat": 32.46735,
        "lng": -85.083447,
        "hub": false
      },
      {
        "name": "Phenix City, AL",
        "kind": "city",
        "lat": 32.47098,
        "lng": -85.00077,
        "hub": false
      },
      {
        "name": "Lanett, AL",
        "kind": "city",
        "lat": 32.8687,
        "lng": -85.1905,
        "hub": false
      },
      {
        "name": "Salem, AL",
        "kind": "community",
        "lat": 32.59667,
        "lng": -85.23861,
        "hub": false
      },
      {
        "name": "Valley, AL",
        "kind": "city",
        "lat": 32.76417,
        "lng": -85.20639,
        "hub": false
      },
      {
        "name": "Tallassee, AL",
        "kind": "city",
        "lat": 32.5354,
        "lng": -85.8933,
        "hub": false
      },
      {
        "name": "Tuskegee, AL",
        "kind": "city",
        "lat": 32.424,
        "lng": -85.6916,
        "hub": false
      },
      {
        "name": "Shorter, AL",
        "kind": "city",
        "lat": 32.40056,
        "lng": -85.94167,
        "hub": false
      },
      {
        "name": "Wetumpka, AL",
        "kind": "city",
        "lat": 32.54374,
        "lng": -86.21191,
        "hub": false
      }
    ]
  },
  "contactSection": {
    "eyebrow": "TALK WITH THE LOCAL TEAM",
    "titleLine1": "Let’s get your",
    "titleLine2": "comfort back.",
    "body": "Tell D&M what you need, or call the team directly to get started.",
    "primaryCta": "Request service",
    "secondaryCta": "Call D&M",
    "submissionMode": "demo",
    "formEndpoint": "",
    "successMessage": "Thanks for reaching out. This concept form is a preview and is not connected yet; call (334) 749-7127 to contact D&M Heating and Air Conditioning directly."
  }
};
