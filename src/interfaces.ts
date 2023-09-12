export interface ICard  {
    start: string;
    end: string;
    startTime: string;
    endTime: string;
    startDate: string;
    endDate: string;
    transfers: number;
    price: number;
    currency?: string;
}