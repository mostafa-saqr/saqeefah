// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appRoot:"https://api-stage.saqeefah.com",
  lang:"ar",
  minPrice:20000,
  maxprice:9000000000,
  priceStep:200000,
  minArea:50,
  maxArea:5000,
  areaStep:30,
  priceRange:1000000,
  areaRange:30
  // appRoot:"https://localhost:7252"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
