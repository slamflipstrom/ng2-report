import { Injectable } from '@angular/core';
import * as Chance from 'chance';

@Injectable()
export class RandomService {
  chanceService: Chance.Chance;

  constructor() {
    this.chanceService = new Chance();
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomBool(): boolean {
    return this.chanceService.bool();
  }

  getRandomName(): string {
    return this.chanceService.name();
  }

  getRandomSentence(): string {
    return this.chanceService.sentence();
  }

  getRandomParagraph(): string {
    return this.chanceService.paragraph();
  }

  getRandomPhoto(width: number, height: number): string {
    return `http://placehold.it/${width}x${height}`;
  }

  getRandomDate(): Date {
    let thisYear = new Date().getFullYear();
    let date: Date | string = this.chanceService.date({ string: false, year: thisYear });
    return new Date(date.toString());
  }

  getRandomGoogleUrl(): string {
    return this.chanceService.url({ domain: 'www.google.com' });
  }

}