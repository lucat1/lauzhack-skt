interface Isearch {
    id?: string
    canton?: string
    lat?: number
    long?: number
    name?: string
}

interface Place {
    canton: string | null;
    id: string;
    lat: number;
    long: number;
    name: string;
  }
  
  interface Departure {
    quay: string | null;
    time: string;
  }
  
  interface End {
    place: Place;
    time: string;
  }
  
  interface Start {
    place: Place;
    time: string;
  }
  
  interface Point {
    place?: Place;
    departure?: Departure;
    end?: End;
    start?: Start;
  }
  
  interface Leg {
    distance?: number;
    duration: number;
    mode: string;
    points: Point[];
  }
  
  interface Route {
    id: string;
    legs: Leg[];
  }
  