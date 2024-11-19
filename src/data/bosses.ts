export enum BossCode {
  Sabetha = 'sabetha',
  Slothasor = 'slothasor',
  Trio = 'trio',
  Dhuum = 'dhuum',
}

export interface BossInfo {
  code: BossCode;
  name: string;
  wing: {
    number: number;
    name: string;
  };
  coverImageName: string;
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
    coverImageName: 'cover_image.webp',
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
    coverImageName: 'cover_image.webp',
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
    coverImageName: 'cover_image.webp',
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
    coverImageName: 'cover_image.jpg',
    wiki: 'https://wiki.guildwars2.com/wiki/Dhuum',
    snowcrows: 'https://snowcrows.com/guides/raids/hall-chains/dhuum',
  },
];
