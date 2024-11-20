export enum BossCode {
  Sabetha = 'sabetha',
  Slothasor = 'slothasor',
  Trio = 'trio',
  Dhuum = 'dhuum',
}

export interface BossInfo {
  code: BossCode;
  name: string;
  coverImage: string;
  icon: string;
  wing: {
    number: number;
    name: string;
  };
  wiki: string;
  snowcrows: string;
}

export const BOSSES: BossInfo[] = [
  {
    code: BossCode.Sabetha,
    name: 'Sabetha the Saboteur',
    wing: {
      number: 1,
      name: 'Spirit Vale',
    },
    coverImage: 'cover_image.webp',
    icon: 'icon.png',
    wiki: 'https://wiki.guildwars2.com/wiki/Sabetha_the_Saboteur',
    snowcrows: 'https://snowcrows.com/guides/raids/spirit-vale/sabetha',
  },
  {
    code: BossCode.Slothasor,
    name: 'Slothasor',
    wing: {
      number: 2,
      name: 'Salvation Pass',
    },
    coverImage: 'cover_image.webp',
    icon: 'icon.png',
    wiki: 'https://wiki.guildwars2.com/wiki/Slothasor',
    snowcrows: 'https://snowcrows.com/guides/raids/salvation-pass/slothasor',
  },
  {
    code: BossCode.Trio,
    name: 'Bandit Trio',
    wing: {
      number: 2,
      name: 'Salvation Pass',
    },
    coverImage: 'cover_image.webp',
    icon: 'icon.png',
    wiki: 'https://wiki.guildwars2.com/wiki/Protect_the_caged_prisoners',
    snowcrows: 'https://snowcrows.com/guides/raids/salvation-pass/bandit-trio',
  },
  {
    code: BossCode.Dhuum,
    name: 'Dhuum',
    wing: {
      number: 5,
      name: 'Hall of Chains',
    },
    coverImage: 'cover_image.jpg',
    icon: 'icon.png',
    wiki: 'https://wiki.guildwars2.com/wiki/Dhuum',
    snowcrows: 'https://snowcrows.com/guides/raids/hall-chains/dhuum',
  },
];
