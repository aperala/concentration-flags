'use strict';

angular.module('concentrationFlags.version', [
  'concentrationFlags.version.interpolate-filter',
  'concentrationFlags.version.version-directive'
])

.value('version', '0.1');
