
# Farmer's Market

#### A farmer's market webpage that allows users to check monthly and daily schedule. :seedling: :apple:

#### By **Krista Rutz and Jiwon Han**

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
![LastCommit](https://img.shields.io/github/last-commit/jiwon-seattle/Farmer-s-market)
![Languages](https://img.shields.io/github/languages/top/jiwon-seattle/Farmer-s-market)
[![MIT license](https://img.shields.io/badge/License-MIT-orange.svg)](https://lbesson.mit-license.org/)


## 1. Farmer's Market

Avery's Organics website displays monthly and daily schedule.
Each month and day has different produce items and locations.

<image src="src/img/diagram.png" width="550px" />

Designed the components based on two data : Available Product and Market Schedule.

Available product has month and it's selection. Market schedule has day, location, hours, booth.

App is a most upper parent component that has every components as children.

Body represents Season and Schedule components. Season component pass down selection to a Produce component. Schedule component has Market schedule data. 

### Sreenshot

<!-- <image src="src/img/screenshot.png" width="750px" /> -->

## 2. Development
### Tech stack:
+ [NPM](https://www.npmjs.com/) for package management
+ [react](https://reactjs.org/) as core stack

### To run dev mode locally:
```bash
  $ git clone https://github.com/jiwon-seattle/Farmer-s-market.git
  $ cd farmers-market
  $ npm install  
  # After successfull pkg installtion
  $ npm start
```
Now, it will automatically open http://localhost:3000 and show you Avery's Organics website.

## 3. Known Bugs

There are no known bug at this moment

## 4. Support and contact details

Any feedback is appreciated! Please contact at email: rutzkri000@gmail.com or jiwon1.han@gmail.com

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **Krista Rutz and Jiwon Han**
