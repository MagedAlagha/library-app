import { Data } from '@angular/router';

export interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  editon: number;
  pubilshData: Data;
}
