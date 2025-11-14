export interface WeddingCoverage {
  hours: number;
  features: string[];
  description?: string;
}

export interface WeddingCouple {
  id: string;
  coupleNames: string;
  videoIds: string[];
  coverage: WeddingCoverage;
}

export const weddingData: WeddingCouple[] = [
  {
    id: 'wedding-1',
    coupleNames: 'Hailey & Tayber',
    videoIds: ['HVCG9xnMEGU', 'fhzFi370VH4'],
    coverage: {
      hours: 6,
      features: ['Highlight Video', 'Drone footage', 'Teaser video'],
    }
  },
  {
    id: 'wedding-2',
    coupleNames: 'Julia & Mitchell',
    videoIds: ['oDlXypGqj6Y'],
    coverage: {
      hours: 4,
      features: ['Highlight Video', 'Drone footage', 'Full ceremony'],
    }
  },
  {
    id: 'wedding-3',
    coupleNames: 'Madelyn & Simon',
    videoIds: ['O58W6HOANLQ'],
    coverage: {
      hours: 8,
      features: ['Highlight Video', 'Drone footage', 'Full day coverage'],
    }
  }
];
