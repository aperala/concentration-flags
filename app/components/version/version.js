'use strict';

angular.module('flagMatchApp.version', [
  'flagMatchApp.version.interpolate-filter',
  'flagMatchApp.version.version-directive'
])

.value('version', '0.1');
