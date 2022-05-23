/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/styles/styles.module.scss":
/*!***************************************!*\
  !*** ./src/styles/styles.module.scss ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__CL0kJ\",\n\t\"total\": \"styles_total__Fyg_p\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvc3R5bGVzL3N0eWxlcy5tb2R1bGUuc2Nzcz8xMmY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX0NMMGtKXCIsXG5cdFwidG90YWxcIjogXCJzdHlsZXNfdG90YWxfX0Z5Z19wXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.module.scss */ \"./src/styles/styles.module.scss\");\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-charts */ \"react-google-charts\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_google_charts__WEBPACK_IMPORTED_MODULE_2__]);\nreact_google_charts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Home({ data  }) {\n    const { consolidated , samples  } = data;\n    const validSamples = samples.filter((r)=>r.valid !== false\n    );\n    const expiredSamples = samples.filter((r)=>r.valid !== true\n    );\n    const dataChart = [\n        [\n            \"Sample\",\n            \"Register samples\"\n        ],\n        [\n            \"Dentro do Prazo\",\n            validSamples.length\n        ],\n        [\n            \"Vencidas\",\n            expiredSamples.length\n        ],\n        [\n            \"Emprestadas\",\n            0\n        ],\n        [\n            \"Descartada\",\n            0\n        ], \n    ];\n    const optionsChart = {\n        title: \"Amostras\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Gerenciamento de amostras\"\n                }, void 0, false, {\n                    fileName: \"/home/kaique/Documentos/GitHub/Sample-Register/front/src/pages/index.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kaique/Documentos/GitHub/Sample-Register/front/src/pages/index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_charts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        chartType: \"PieChart\",\n                        data: dataChart,\n                        options: optionsChart,\n                        width: \"50rem\",\n                        height: \"25rem\"\n                    }, void 0, false, {\n                        fileName: \"/home/kaique/Documentos/GitHub/Sample-Register/front/src/pages/index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().total),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"total: \",\n                                consolidated\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kaique/Documentos/GitHub/Sample-Register/front/src/pages/index.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/kaique/Documentos/GitHub/Sample-Register/front/src/pages/index.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kaique/Documentos/GitHub/Sample-Register/front/src/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getServerSideProps = async ({ req  })=>{\n    try {\n        let responseGetToken = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/user/auth\", {\n            email: \"testuser@gmail.com\",\n            password: 123456\n        });\n        let { accessToken  } = responseGetToken.data;\n        let { data  } = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/test\", {\n            headers: {\n                authorization: accessToken\n            }\n        });\n        return {\n            props: {\n                data: data,\n                accessToken\n            }\n        };\n    } catch (error) {\n        console.log(error);\n        return {\n            props: {\n                data: []\n            }\n        };\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNxQjtBQUNWO0FBQ047QUFFbkIsU0FBU0ksSUFBSSxDQUFDLEVBQUVDLElBQUksR0FBRSxFQUFFO0lBQ3JDLE1BQU0sRUFBRUMsWUFBWSxHQUFFQyxPQUFPLEdBQUUsR0FBR0YsSUFBSTtJQUN0QyxNQUFNRyxZQUFZLEdBQUdELE9BQU8sQ0FBQ0UsTUFBTSxDQUFDLENBQUNDLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxLQUFLLEtBQUssS0FBSztJQUFBLENBQUM7SUFDN0QsTUFBTUMsY0FBYyxHQUFHTCxPQUFPLENBQUNFLE1BQU0sQ0FBQyxDQUFDQyxDQUFDLEdBQUtBLENBQUMsQ0FBQ0MsS0FBSyxLQUFLLElBQUk7SUFBQSxDQUFDO0lBRTlELE1BQU1FLFNBQVMsR0FBRztRQUNoQjtZQUFDLFFBQVE7WUFBRSxrQkFBa0I7U0FBQztRQUM5QjtZQUFDLGlCQUFpQjtZQUFFTCxZQUFZLENBQUNNLE1BQU07U0FBQztRQUN4QztZQUFDLFVBQVU7WUFBRUYsY0FBYyxDQUFDRSxNQUFNO1NBQUM7UUFDbkM7WUFBQyxhQUFhO0FBQUUsYUFBQztTQUFDO1FBQ2xCO1lBQUMsWUFBWTtBQUFFLGFBQUM7U0FBQztLQUNsQjtJQUNELE1BQU1DLFlBQVksR0FBRztRQUNuQkMsS0FBSyxFQUFFLFVBQVU7S0FDbEI7SUFDRCxxQkFDRTs7MEJBQ0UsOERBQUNoQixrREFBSTswQkFDSCw0RUFBQ2dCLE9BQUs7OEJBQUMsMkJBQXlCOzs7Ozt3QkFBUTs7Ozs7b0JBQ25DOzBCQUNQLDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUVqQiw2RUFBZ0I7O2tDQUMvQiw4REFBQ0MsMkRBQUs7d0JBQ0prQixTQUFTLEVBQUMsVUFBVTt3QkFDcEJmLElBQUksRUFBRVEsU0FBUzt3QkFDZlEsT0FBTyxFQUFFTixZQUFZO3dCQUNyQk8sS0FBSyxFQUFFLE9BQU87d0JBQ2RDLE1BQU0sRUFBRSxPQUFPOzs7Ozs0QkFDZjtrQ0FDRiw4REFBQ0MsS0FBRzt3QkFBQ04sU0FBUyxFQUFFakIseUVBQVk7a0NBQzFCLDRFQUFDeUIsR0FBQzs7Z0NBQUMsU0FBTztnQ0FBQ3BCLFlBQVk7Ozs7OztnQ0FBSzs7Ozs7NEJBQ3hCOzs7Ozs7b0JBQ0Q7O29CQUNOLENBQ0g7Q0FDSDtBQUVNLE1BQU1xQixrQkFBa0IsR0FBRyxPQUFPLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQ25ELElBQUk7UUFDRixJQUFJQyxnQkFBZ0IsR0FBRyxNQUFNMUIsMERBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN0RDRCLEtBQUssRUFBRSxvQkFBb0I7WUFDM0JDLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQUM7UUFDRixJQUFJLEVBQUVDLFdBQVcsR0FBRSxHQUFHSixnQkFBZ0IsQ0FBQ3hCLElBQUk7UUFDM0MsSUFBSSxFQUFFQSxJQUFJLEdBQUUsR0FBRyxNQUFNRix5REFBTyxDQUFDLFVBQVUsRUFBRTtZQUN2Q2dDLE9BQU8sRUFBRTtnQkFDUEMsYUFBYSxFQUFFSCxXQUFXO2FBQzNCO1NBQ0YsQ0FBQztRQUNGLE9BQU87WUFDTEksS0FBSyxFQUFFO2dCQUNMaEMsSUFBSSxFQUFFQSxJQUFJO2dCQUNWNEIsV0FBVzthQUNaO1NBQ0YsQ0FBQztLQUNILENBQUMsT0FBT0ssS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPO1lBQ0xELEtBQUssRUFBRTtnQkFDTGhDLElBQUksRUFBRSxFQUFFO2FBQ1Q7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJyZWFjdC1nb29nbGUtY2hhcnRzXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICBjb25zdCB7IGNvbnNvbGlkYXRlZCwgc2FtcGxlcyB9ID0gZGF0YTtcbiAgY29uc3QgdmFsaWRTYW1wbGVzID0gc2FtcGxlcy5maWx0ZXIoKHIpID0+IHIudmFsaWQgIT09IGZhbHNlKTtcbiAgY29uc3QgZXhwaXJlZFNhbXBsZXMgPSBzYW1wbGVzLmZpbHRlcigocikgPT4gci52YWxpZCAhPT0gdHJ1ZSk7XG5cbiAgY29uc3QgZGF0YUNoYXJ0ID0gW1xuICAgIFtcIlNhbXBsZVwiLCBcIlJlZ2lzdGVyIHNhbXBsZXNcIl0sXG4gICAgW1wiRGVudHJvIGRvIFByYXpvXCIsIHZhbGlkU2FtcGxlcy5sZW5ndGhdLFxuICAgIFtcIlZlbmNpZGFzXCIsIGV4cGlyZWRTYW1wbGVzLmxlbmd0aF0sXG4gICAgW1wiRW1wcmVzdGFkYXNcIiwgMF0sXG4gICAgW1wiRGVzY2FydGFkYVwiLCAwXSxcbiAgXTtcbiAgY29uc3Qgb3B0aW9uc0NoYXJ0ID0ge1xuICAgIHRpdGxlOiBcIkFtb3N0cmFzXCIsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R2VyZW5jaWFtZW50byBkZSBhbW9zdHJhczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8Q2hhcnRcbiAgICAgICAgICBjaGFydFR5cGU9XCJQaWVDaGFydFwiXG4gICAgICAgICAgZGF0YT17ZGF0YUNoYXJ0fVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNDaGFydH1cbiAgICAgICAgICB3aWR0aD17XCI1MHJlbVwifVxuICAgICAgICAgIGhlaWdodD17XCIyNXJlbVwifVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsfT5cbiAgICAgICAgICA8cD50b3RhbDoge2NvbnNvbGlkYXRlZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzcG9uc2VHZXRUb2tlbiA9IGF3YWl0IGFwaS5wb3N0KFwiL2FwaS91c2VyL2F1dGhcIiwge1xuICAgICAgZW1haWw6IFwidGVzdHVzZXJAZ21haWwuY29tXCIsXG4gICAgICBwYXNzd29yZDogMTIzNDU2LFxuICAgIH0pO1xuICAgIGxldCB7IGFjY2Vzc1Rva2VuIH0gPSByZXNwb25zZUdldFRva2VuLmRhdGE7XG4gICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcImFwaS90ZXN0XCIsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBhY2Nlc3NUb2tlbixcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJDaGFydCIsImFwaSIsIkhvbWUiLCJkYXRhIiwiY29uc29saWRhdGVkIiwic2FtcGxlcyIsInZhbGlkU2FtcGxlcyIsImZpbHRlciIsInIiLCJ2YWxpZCIsImV4cGlyZWRTYW1wbGVzIiwiZGF0YUNoYXJ0IiwibGVuZ3RoIiwib3B0aW9uc0NoYXJ0IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiY2hhcnRUeXBlIiwib3B0aW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiZGl2IiwidG90YWwiLCJwIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzcG9uc2VHZXRUb2tlbiIsInBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInByb3BzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:80/v1/\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDdkJHLE9BQU8sRUFBRSx5QkFBeUI7Q0FDbkMsQ0FBQztBQUVGLGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9zZXJ2aWNlcy9hcGkuanM/NGM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MC92MS9cIlxufSlcblxuZXhwb3J0IGRlZmF1bHQgYXBpOyJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-google-charts":
/*!**************************************!*\
  !*** external "react-google-charts" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-google-charts");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();