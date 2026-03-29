export interface ClusterPageConfig {
  key: string;
  slug: string;
  sectionCount: number;
  faqCount: number;
  related: string[];
}

export const clusterPages: ClusterPageConfig[] = [
  {
    key: 'rejas',
    slug: 'rejas-para-ventanas',
    sectionCount: 6,
    faqCount: 5,
    related: ['portones', 'verjas', 'puertas'],
  },
  {
    key: 'portones',
    slug: 'portones-residenciales',
    sectionCount: 6,
    faqCount: 5,
    related: ['rejas', 'verjas', 'custom'],
  },
  {
    key: 'barandas',
    slug: 'barandas-y-barandillas',
    sectionCount: 6,
    faqCount: 5,
    related: ['escaleras', 'rejas', 'custom'],
  },
  {
    key: 'escaleras',
    slug: 'escaleras-de-caracol',
    sectionCount: 6,
    faqCount: 5,
    related: ['barandas', 'custom', 'puertas'],
  },
  {
    key: 'verjas',
    slug: 'verjas-perimetrales',
    sectionCount: 6,
    faqCount: 5,
    related: ['rejas', 'portones', 'puertas'],
  },
  {
    key: 'puertas',
    slug: 'puertas-de-hierro',
    sectionCount: 6,
    faqCount: 5,
    related: ['portones', 'rejas', 'verjas'],
  },
  {
    key: 'custom',
    slug: 'trabajos-a-medida',
    sectionCount: 6,
    faqCount: 5,
    related: ['rejas', 'escaleras', 'portones'],
  },
];

export function getClusterPage(key: string): ClusterPageConfig | undefined {
  return clusterPages.find((p) => p.key === key);
}

export function getClusterPageBySlug(slug: string): ClusterPageConfig | undefined {
  return clusterPages.find((p) => p.slug === slug);
}
