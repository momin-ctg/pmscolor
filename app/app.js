'use strict';

var app = angular.module('colorApp', []);
app.controller('pmsColor', function ($scope) {
    $scope.colors = pmsFile.records;
});