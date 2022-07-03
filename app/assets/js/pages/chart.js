/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = '';
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__((__webpack_require__.s = 1));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './app/assets/es6/constant/chart.constant.js':
      /*!***************************************************!*\
  !*** ./app/assets/es6/constant/chart.constant.js ***!
  \***************************************************/
      /*! exports provided: COLOR_1, COLOR_2, COLOR_3, COLOR_4, COLOR_5, COLOR_1_LIGHT, COLOR_2_LIGHT, COLOR_3_LIGHT, COLOR_4_LIGHT, COLOR_5_LIGHT, COLORS, COLORS_LIGHT, COLOR_AXES, COLOR_TEXT, ApexChartDefault, ApexStrokeDefault, ApexBarDefault, ApexDataLabelDefault, ApexColorDefault */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_1", function() { return COLOR_1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_2", function() { return COLOR_2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_3", function() { return COLOR_3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_4", function() { return COLOR_4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_5", function() { return COLOR_5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_1_LIGHT", function() { return COLOR_1_LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_2_LIGHT", function() { return COLOR_2_LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_3_LIGHT", function() { return COLOR_3_LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_4_LIGHT", function() { return COLOR_4_LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_5_LIGHT", function() { return COLOR_5_LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS_LIGHT", function() { return COLORS_LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_AXES", function() { return COLOR_AXES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_TEXT", function() { return COLOR_TEXT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartDefault", function() { return ApexChartDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexStrokeDefault", function() { return ApexStrokeDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexBarDefault", function() { return ApexBarDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexDataLabelDefault", function() { return ApexDataLabelDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexColorDefault", function() { return ApexColorDefault; });\nconst COLOR_1 = \'#11a1fd\';\r\nconst COLOR_2 = \'#00c569\';\r\nconst COLOR_3 = \'#FFC833\';\r\nconst COLOR_4 = \'#5a75f9\';\r\nconst COLOR_5 = \'#e83e8c\';\r\n\r\nconst COLOR_1_LIGHT = \'rgba(62, 130, 247, 0.15)\';\r\nconst COLOR_2_LIGHT = \'rgba(4, 209, 130, 0.1)\';\r\nconst COLOR_3_LIGHT = \'rgba(222, 68, 54, 0.1)\';\r\nconst COLOR_4_LIGHT = \'rgba(255, 193, 7, 0.1)\';\r\nconst COLOR_5_LIGHT = \'rgba(139, 75, 157, 0.1)\';\r\n\r\nconst COLORS = [\r\n\tCOLOR_1,\r\n\tCOLOR_2,\r\n\tCOLOR_3,\r\n\tCOLOR_4,\r\n\tCOLOR_5\r\n]\r\n\r\nconst COLORS_LIGHT = [\r\n\tCOLOR_1_LIGHT,\r\n\tCOLOR_2_LIGHT,\r\n\tCOLOR_3_LIGHT,\r\n\tCOLOR_4_LIGHT,\r\n\tCOLOR_5_LIGHT\r\n]\r\n\r\nconst COLOR_AXES = \'#edf2f9\';\r\nconst COLOR_TEXT = \'#455560\';\r\n\r\nconst ApexChartDefault = {\r\n    type: \'line\',\r\n    zoom: {\r\n        enabled: false\r\n    },\r\n    toolbar: {\r\n        show: false\r\n    }\r\n}\r\n\r\nconst ApexStrokeDefault = {\r\n    width: 3,\r\n    curve: "smooth",\r\n    lineCap: \'round\'\r\n}\r\n\r\nconst ApexBarDefault = {\r\n\tbar: {\r\n\t\thorizontal: false,\r\n\t\tcolumnWidth: \'25px\',\r\n\t\tstartingShape: \'rounded\',\r\n\t\tendingShape: \'rounded\'\r\n\t},\r\n}\r\n\r\nconst ApexDataLabelDefault = {\r\n    enabled: false\r\n}\r\n\r\nconst ApexColorDefault = [...COLORS]\n\n//# sourceURL=webpack:///./app/assets/es6/constant/chart.constant.js?'
        );

        /***/
      },

    /***/ './app/assets/es6/pages/chart.js':
      /*!***************************************!*\
  !*** ./app/assets/es6/pages/chart.js ***!
  \***************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/chart.constant */ "./app/assets/es6/constant/chart.constant.js");\n\r\n\r\nclass Chart {\r\n\r\n    static init() {\r\n        const basicOptions = {\r\n            series: [\r\n                {\r\n                    name: "Desktops",\r\n                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]\r\n                }\r\n            ],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                height: 350,\r\n                type: "line",\r\n                zoom: {\r\n                    enabled: false\r\n                }\r\n            },\r\n            dataLabels: {\r\n                enabled: false\r\n            },\r\n            stroke: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexStrokeDefault"],\r\n            title: {\r\n                text: "Product Trends by Month",\r\n                align: "left"\r\n            },\r\n            grid: {\r\n                row: {\r\n                colors: ["#f3f3f3", "transparent"],\r\n                    opacity: 0.5\r\n                }\r\n            },\r\n            xaxis: {\r\n                categories: [\r\n                    "Jan",\r\n                    "Feb",\r\n                    "Mar",\r\n                    "Apr",\r\n                    "May",\r\n                    "Jun",\r\n                    "Jul",\r\n                    "Aug",\r\n                    "Sep"\r\n                ]\r\n            }\r\n        };\r\n        new ApexCharts(document.querySelector("#basic-chart"), basicOptions).render();\r\n\r\n        const dashLineOption = {\r\n            series: [\r\n                {\r\n                    name: "Session Duration",\r\n                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]\r\n                },\r\n                {\r\n                    name: "Page Views",\r\n                    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]\r\n                },\r\n                {\r\n                    name: "Total Visits",\r\n                    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]\r\n                }\r\n            ],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                height: 350,\r\n                type: "line"\r\n            },\r\n            dataLabels: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexDataLabelDefault"],\r\n            stroke: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexStrokeDefault"],\r\n                dashArray: [0, 8, 5]\r\n            },\r\n            title: {\r\n                text: "Page Statistics",\r\n                align: "left"\r\n            },\r\n            color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexColorDefault"],\r\n            legend: {\r\n                tooltipHoverFormatter: function(val, opts) {\r\n                    return (\r\n                        val +\r\n                        " - <strong>" +\r\n                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +\r\n                        "</strong>"\r\n                    );\r\n                }\r\n            },\r\n            markers: {\r\n                size: 0,\r\n                hover: {\r\n                    sizeOffset: 6\r\n                }\r\n            },\r\n            xaxis: {\r\n                labels: {\r\n                    trim: false\r\n                },\r\n                categories: [\r\n                    "01 Jan",\r\n                    "02 Jan",\r\n                    "03 Jan",\r\n                    "04 Jan",\r\n                    "05 Jan",\r\n                    "06 Jan",\r\n                    "07 Jan",\r\n                    "08 Jan",\r\n                    "09 Jan",\r\n                    "10 Jan",\r\n                    "11 Jan",\r\n                    "12 Jan"\r\n                ]\r\n            },\r\n            tooltip: {\r\n                y: [\r\n                    {\r\n                    title: {\r\n                        formatter: function(val) {\r\n                            return val + " (mins)";\r\n                        }\r\n                    }\r\n                    },\r\n                    {\r\n                    title: {\r\n                        formatter: function(val) {\r\n                            return val + " per session";\r\n                        }\r\n                    }\r\n                    },\r\n                    {\r\n                    title: {\r\n                        formatter: function(val) {\r\n                            return val;\r\n                        }\r\n                    }\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n        new ApexCharts(document.querySelector("#dashline-chart"), dashLineOption).render();\r\n\r\n        const basicAreaOption = {\r\n            series: [\r\n                {\r\n                    name: "STOCK ABC",\r\n                    data: [\r\n                        8107.85,\r\n                        8128.0,\r\n                        8122.9,\r\n                        8165.5,\r\n                        8340.7,\r\n                        8423.7,\r\n                        8423.5,\r\n                        8514.3,\r\n                        8481.85,\r\n                        8487.7,\r\n                        8506.9,\r\n                        8626.2,\r\n                        8668.95,\r\n                        8602.3,\r\n                        8607.55,\r\n                        8512.9,\r\n                        8496.25,\r\n                        8600.65,\r\n                        8881.1,\r\n                        9340.85\r\n                    ],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]\r\n                }\r\n            ],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                type: "area",\r\n                height: 350,\r\n                zoom: {\r\n                    enabled: false\r\n                }\r\n            },\r\n            dataLabels: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexDataLabelDefault"],\r\n            title: {\r\n                text: "Fundamental Analysis of Stocks",\r\n                align: "left"\r\n            },\r\n            subtitle: {\r\n                text: "Price Movements",\r\n                align: "left"\r\n            },\r\n            labels: [\r\n                "13 Nov 2017",\r\n                "14 Nov 2017",\r\n                "15 Nov 2017",\r\n                "16 Nov 2017",\r\n                "17 Nov 2017",\r\n                "20 Nov 2017",\r\n                "21 Nov 2017",\r\n                "22 Nov 2017",\r\n                "23 Nov 2017",\r\n                "24 Nov 2017",\r\n                "27 Nov 2017",\r\n                "28 Nov 2017",\r\n                "29 Nov 2017",\r\n                "30 Nov 2017",\r\n                "01 Dec 2017",\r\n                "04 Dec 2017",\r\n                "05 Dec 2017",\r\n                "06 Dec 2017",\r\n                "07 Dec 2017",\r\n                "08 Dec 2017"\r\n            ],\r\n            xaxis: {\r\n                type: "datetime"\r\n            },\r\n            yaxis: {\r\n                opposite: true\r\n            },\r\n            legend: {\r\n                horizontalAlign: "left"\r\n            },\r\n            stroke: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexStrokeDefault"]\r\n        }\r\n        new ApexCharts(document.querySelector("#basic-area-chart"), basicAreaOption).render();\r\n\r\n        const splineChartOption = {\r\n            series: [\r\n                {\r\n                    name: "series1",\r\n                    data: [31, 40, 28, 51, 42, 109, 100],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]\r\n                },\r\n                {\r\n                    name: "series2",\r\n                    data: [11, 32, 45, 32, 34, 52, 41],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_2"]\r\n                }\r\n            ],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                height: 350,\r\n                type: "area"\r\n            },\r\n            dataLabels: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexDataLabelDefault"],\r\n            stroke: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexStrokeDefault"],\r\n            xaxis: {\r\n                type: "datetime",\r\n                categories: [\r\n                    "2018-09-19T00:00:00.000Z",\r\n                    "2018-09-19T01:30:00.000Z",\r\n                    "2018-09-19T02:30:00.000Z",\r\n                    "2018-09-19T03:30:00.000Z",\r\n                    "2018-09-19T04:30:00.000Z",\r\n                    "2018-09-19T05:30:00.000Z",\r\n                    "2018-09-19T06:30:00.000Z"\r\n                ]\r\n            },\r\n            tooltip: {\r\n                x: {\r\n                    format: "dd/MM/yy HH:mm"\r\n                }\r\n            }\r\n        }\r\n        new ApexCharts(document.querySelector("#spline-area-chart"), splineChartOption).render();\r\n\r\n        const basicColumnOption = {\r\n            series: [\r\n                {\r\n                    name: "Net Profit",\r\n                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]\r\n                },\r\n                {\r\n                    name: "Revenue",\r\n                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_2"]\r\n                },\r\n                {\r\n                    name: "Free Cash Flow",\r\n                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_3"]\r\n                }\r\n            ],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                type: "bar",\r\n                height: 350\r\n            },\r\n            plotOptions: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexBarDefault"],\r\n            dataLabels: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexDataLabelDefault"],\r\n            stroke: {\r\n                show: true,\r\n                width: 2,\r\n                colors: ["transparent"]\r\n            },\r\n            xaxis: {\r\n                categories: [\r\n                    "Feb",\r\n                    "Mar",\r\n                    "Apr",\r\n                    "May",\r\n                    "Jun",\r\n                    "Jul",\r\n                    "Aug",\r\n                    "Sep",\r\n                    "Oct"\r\n                ]\r\n            },\r\n            yaxis: {\r\n                title: {\r\n                    text: "$ (thousands)"\r\n                }\r\n            },\r\n            fill: {\r\n                opacity: 1\r\n            },\r\n            tooltip: {\r\n                y: {\r\n                    formatter: function(val) {\r\n                        return "$ " + val + " thousands";\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        new ApexCharts(document.querySelector("#basic-column-chart"), basicColumnOption).render();\r\n\r\n        const stackColumnOption = {\r\n            series: [\r\n                {\r\n                    name: "PRODUCT A",\r\n                    data: [44, 55, 41, 67, 22, 43],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]\r\n                },\r\n                {\r\n                    name: "PRODUCT B",\r\n                    data: [13, 23, 20, 8, 13, 27],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_2"]\r\n                },\r\n                {\r\n                    name: "PRODUCT C",\r\n                    data: [11, 17, 15, 15, 21, 14],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_3"]\r\n                },\r\n                {\r\n                    name: "PRODUCT D",\r\n                    data: [21, 7, 25, 13, 22, 8],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_4"]\r\n                }\r\n            ],\r\n            chart: {\r\n                type: "bar",\r\n                height: 350,\r\n                stacked: true,\r\n                toolbar: {\r\n                    show: true\r\n                },\r\n                zoom: {\r\n                    enabled: true\r\n                }\r\n            },\r\n            responsive: [\r\n                {\r\n                    breakpoint: 480,\r\n                    options: {\r\n                        legend: {\r\n                            position: "bottom",\r\n                            offsetX: -10,\r\n                            offsetY: 0\r\n                        }\r\n                    }\r\n                }\r\n            ],\r\n            plotOptions: {\r\n                bar: {\r\n                    horizontal: false,\r\n                    columnWidth: \'20px\'\r\n                }\r\n            },\r\n            xaxis: {\r\n                type: "category",\r\n                categories: [\r\n                    "01/2011",\r\n                    "02/2011",\r\n                    "03/2011",\r\n                    "04/2011",\r\n                    "05/2011",\r\n                    "06/2011"\r\n                ]\r\n            },\r\n            legend: {\r\n                position: "right",\r\n                offsetY: 40\r\n            },\r\n            fill: {\r\n                opacity: 1\r\n            }\r\n        }\r\n        new ApexCharts(document.querySelector("#stack-column-chart"), stackColumnOption).render();\r\n\r\n        const basicBarOption = {\r\n            series: [\r\n                {\r\n                    name: "basic",\r\n                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]\r\n                }\r\n            ],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                type: "bar",\r\n                height: 350\r\n            },\r\n            plotOptions: {\r\n                bar: {\r\n                    horizontal: true\r\n                }\r\n            },\r\n            dataLabels: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexDataLabelDefault"],\r\n            xaxis: {\r\n                categories: [\r\n                    "South Korea",\r\n                    "Canada",\r\n                    "United Kingdom",\r\n                    "Netherlands",\r\n                    "Italy",\r\n                    "France",\r\n                    "Japan",\r\n                    "United States",\r\n                    "China",\r\n                    "Germany"\r\n                ]\r\n            }\r\n        }\r\n        new ApexCharts(document.querySelector("#basic-bar-chart"), basicBarOption).render();\r\n\r\n        const groupedBarOption = {\r\n            series: [\r\n                {\r\n                    name: "serie1",\r\n                    data: [44, 55, 41, 64, 22, 43, 21],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]\r\n                },\r\n                {\r\n                    name: "serie2",\r\n \r\n                    data: [53, 32, 33, 52, 13, 44, 32],\r\n                    color: _constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_2"]\r\n                }\r\n            ],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                type: "bar",\r\n                height: 430\r\n            },\r\n            plotOptions: {\r\n                bar: {\r\n                    horizontal: true,\r\n                    dataLabels: {\r\n                        position: "top"\r\n                    }\r\n                }\r\n            },\r\n            dataLabels: {\r\n                enabled: true,\r\n                offsetX: -6,\r\n                style: {\r\n                    fontSize: "12px",\r\n                    colors: ["#fff"]\r\n                }\r\n            },\r\n            stroke: {\r\n                show: true,\r\n                width: 1,\r\n                colors: ["#fff"]\r\n            },\r\n            xaxis: {\r\n                categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]\r\n            }\r\n        }\r\n        new ApexCharts(document.querySelector("#grouped-bar-chart"), groupedBarOption).render();\r\n        \r\n        const simplePieOption = {\r\n            series: [44, 55, 13, 43, 22],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                width: 380,\r\n                type: "pie"\r\n            },\r\n            labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],\r\n            responsive: [\r\n                {\r\n                    breakpoint: 480,\r\n                    options: {\r\n                        chart: {\r\n                            width: 200\r\n                        },\r\n                        legend: {\r\n                            position: "bottom"\r\n                        }\r\n                    }\r\n                }\r\n            ]\r\n        }\r\n        new ApexCharts(document.querySelector("#simple-pie"), simplePieOption).render();\r\n\r\n        const simpleDonutOption ={\r\n            series: [44, 55, 13, 43, 22],\r\n            chart: {\r\n                ..._constant_chart_constant__WEBPACK_IMPORTED_MODULE_0__["ApexChartDefault"],\r\n                type: "donut"\r\n            },\r\n            labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],\r\n            responsive: [\r\n                {\r\n                    breakpoint: 480,\r\n                    options: {\r\n                        chart: {\r\n                            width: 200\r\n                        },\r\n                        legend: {\r\n                            position: "bottom"\r\n                        }\r\n                    }\r\n                }\r\n            ]\r\n        }\r\n        new ApexCharts(document.querySelector("#simple-donut"), simpleDonutOption).render();\r\n    }\r\n}\r\n\r\n$(() => { Chart.init(); });\r\n\r\n\n\n//# sourceURL=webpack:///./app/assets/es6/pages/chart.js?'
        );

        /***/
      },

    /***/ 1:
      /*!*********************************************!*\
  !*** multi ./app/assets/es6/pages/chart.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'module.exports = __webpack_require__(/*! C:\\Users\\E\\Desktop\\workspace\\espire\\html\\starter\\app\\assets\\es6\\pages\\chart.js */"./app/assets/es6/pages/chart.js");\n\n\n//# sourceURL=webpack:///multi_./app/assets/es6/pages/chart.js?'
        );

        /***/
      },

    /******/
  }
);
