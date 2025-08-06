export interface Hero {
  id: number
  win_rate: number;
  total_talishar_played: number;
  hero_details: {
    name: string,
    url: string
  }
}

export interface HeroInput {
  name: string,
  url: string,
  win_rate: number,
  total_talishar_plays: number,
}
