export interface AshOfWar {
    success: boolean;
    count: number;
    total: number;
    data: AshItem[];
  }
  
  export interface AshItem {
    id: string;
    name: string;
    image: string | null;
    description: string;
    affinity: string;
    skill: string;
  }