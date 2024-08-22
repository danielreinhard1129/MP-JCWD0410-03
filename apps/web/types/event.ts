export interface Event {
  id: number;
  title: string;
  address: string;
  thumbnail: string;
  price: number;
  startDate: Date;
  endDate: Date;
  quota: number;
  booked: number;
  description: string;
  userId: number;
}
