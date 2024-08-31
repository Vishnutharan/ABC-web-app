export interface Booking {
    id: number;
    name: string;
    email: string;
    persons: number;
    phoneNumber: string;
    date: Date;
    time: string;
    note?: string;
  }
  