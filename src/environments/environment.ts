// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url:
    window.location.protocol + '//' + window.location.hostname + ':2000/api/',
  baseurlhostname:
    window.location.protocol + '//' + window.location.hostname + ':2000/',
  base_url_web:
    window.location.protocol +
    '//' +
    window.location.hostname +
    ':2000/frontend/',
  base_url_table:
    window.location.protocol +
    '//' +
    window.location.hostname +
    ':2000/frontend/src/app/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
