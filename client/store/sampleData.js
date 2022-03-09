export default {
  "run-list": [
    "2022-03-09T17:26:32.735Z"
  ],
  "endpoints": [
    "/",
    "/information"
  ],
  "commits": {
    "2022-03-09T17:26:32.735Z": "Sample commit message"
  },
  "web-vitals": {
    "first-contentful-paint": {
      "title": "First Contentful Paint",
      "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
      "scoreDisplayMode": "numeric",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 919.0139999999999,
            "displayValue": "0.9 s"
          }
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 911.5319999999999,
            "displayValue": "0.9 s"
          }
        }
      }
    },
    "speed-index": {
      "title": "Speed Index",
      "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
      "scoreDisplayMode": "numeric",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 919.0139999999999,
            "displayValue": "0.9 s"
          }
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 911.5319999999999,
            "displayValue": "0.9 s"
          }
        }
      }
    },
    "largest-contentful-paint": {
      "title": "Largest Contentful Paint",
      "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
      "scoreDisplayMode": "numeric",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0.03,
            "numericValue": 7823.288499999999,
            "displayValue": "7.8 s"
          }
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0.03,
            "numericValue": 7659.712999999999,
            "displayValue": "7.7 s"
          }
        }
      }
    },
    "interactive": {
      "title": "Time to Interactive",
      "description": "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).",
      "scoreDisplayMode": "numeric",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0.43,
            "numericValue": 7903.041999999999,
            "displayValue": "7.9 s"
          }
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0.46,
            "numericValue": 7659.712999999999,
            "displayValue": "7.7 s"
          }
        }
      }
    },
    "total-blocking-time": {
      "title": "Total Blocking Time",
      "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).",
      "scoreDisplayMode": "numeric",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0.79,
            "numericValue": 296,
            "displayValue": "300 ms"
          }
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0.78,
            "numericValue": 303,
            "displayValue": "300 ms"
          }
        }
      }
    },
    "cumulative-layout-shift": {
      "title": "Cumulative Layout Shift",
      "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
      "scoreDisplayMode": "numeric",
      "numericUnit": "unitless",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "cumulativeLayoutShiftMainFrame": 0,
            "totalCumulativeLayoutShift": 0
          }
        ]
      },
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "0"
          }
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "0"
          }
        }
      }
    }
  },
  "binary": {
    "viewport": {
      "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
      "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away). [Learn more](https://web.dev/viewport/).",
      "warnings": [],
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1
          }
        }
      }
    },
    "server-response-time": {
      "title": "Initial server response time was short",
      "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 37.113,
            "displayValue": "Root document took 40 ms",
            "details": {
              "type": "opportunity",
              "headings": [
                {
                  "key": "url",
                  "valueType": "url",
                  "label": "URL"
                },
                {
                  "key": "responseTime",
                  "valueType": "timespanMs",
                  "label": "Time Spent"
                }
              ],
              "items": [
                {
                  "url": "http://localhost:3000/information",
                  "responseTime": 37.113
                }
              ],
              "overallSavingsMs": -62.887
            }
          }
        }
      }
    },
    "font-display": {
      "title": "All text remains visible during webfont loads",
      "description": "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).",
      "warnings": [],
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "details": {
              "type": "table",
              "headings": [],
              "items": []
            }
          }
        }
      }
    },
    "no-unload-listeners": {
      "title": "Avoids `unload` event listeners",
      "description": "The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead. [Learn more](https://web.dev/bfcache/#never-use-the-unload-event)",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1
          }
        }
      }
    },
    "unsized-images": {
      "title": "Image elements do not have explicit `width` and `height`",
      "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn more](https://web.dev/optimize-cls/#images-without-dimensions)",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0,
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "node",
                  "itemType": "node",
                  "text": ""
                },
                {
                  "key": "url",
                  "itemType": "url",
                  "text": "URL"
                }
              ],
              "items": [
                {
                  "url": "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2772",
                  "node": {
                    "type": "node",
                    "lhId": "page-0-IMG",
                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,1,FOOTER,0,A,2,SPAN,0,SPAN,0,SPAN,0,IMG",
                    "selector": "span.Home_logo__27_tb > span > span > img",
                    "boundingRect": {
                      "top": 694,
                      "bottom": 710,
                      "left": 190,
                      "right": 262,
                      "width": 72,
                      "height": 16
                    },
                    "snippet": "<img style=\"display: block; max-width: 100%; width: initial; height: initial; background: none;\" alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20versi…\">",
                    "nodeLabel": "span.Home_logo__27_tb > span > span > img"
                  }
                }
              ]
            }
          }
        }
      }
    },
    "no-document-write": {
      "title": "Avoids `document.write()`",
      "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "details": {
              "type": "table",
              "headings": [],
              "items": []
            }
          }
        }
      }
    },
    "uses-passive-event-listeners": {
      "title": "Uses passive listeners to improve scrolling performance",
      "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "details": {
              "type": "table",
              "headings": [],
              "items": []
            }
          }
        }
      }
    }
  },
  "numeric": {
    "first-meaningful-paint": {
      "title": "First Meaningful Paint",
      "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 911.5319999999999,
            "displayValue": "0.9 s"
          }
        }
      }
    },
    "max-potential-fid": {
      "title": "Max Potential First Input Delay",
      "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0.24,
            "numericValue": 353,
            "displayValue": "350 ms"
          }
        }
      }
    },
    "redirects": {
      "title": "Avoid multiple page redirects",
      "description": "Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0
            }
          }
        }
      }
    },
    "mainthread-work-breakdown": {
      "title": "Minimizes main-thread work",
      "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 597.4160000000002,
            "displayValue": "0.6 s",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "groupLabel",
                  "itemType": "text",
                  "text": "Category"
                },
                {
                  "key": "duration",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "Time Spent"
                }
              ],
              "items": [
                {
                  "group": "scriptEvaluation",
                  "groupLabel": "Script Evaluation",
                  "duration": 299.89200000000005
                },
                {
                  "group": "other",
                  "groupLabel": "Other",
                  "duration": 148.84400000000008
                },
                {
                  "group": "styleLayout",
                  "groupLabel": "Style & Layout",
                  "duration": 84.84
                },
                {
                  "group": "scriptParseCompile",
                  "groupLabel": "Script Parsing & Compilation",
                  "duration": 53.396
                },
                {
                  "group": "paintCompositeRender",
                  "groupLabel": "Rendering",
                  "duration": 5.503999999999998
                },
                {
                  "group": "parseHTML",
                  "groupLabel": "Parse HTML & CSS",
                  "duration": 4.939999999999998
                }
              ]
            }
          }
        }
      }
    },
    "bootup-time": {
      "title": "JavaScript execution time",
      "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 253.40400000000005,
            "displayValue": "0.3 s",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "url",
                  "itemType": "url",
                  "text": "URL"
                },
                {
                  "key": "total",
                  "granularity": 1,
                  "itemType": "ms",
                  "text": "Total CPU Time"
                },
                {
                  "key": "scripting",
                  "granularity": 1,
                  "itemType": "ms",
                  "text": "Script Evaluation"
                },
                {
                  "key": "scriptParseCompile",
                  "granularity": 1,
                  "itemType": "ms",
                  "text": "Script Parse"
                }
              ],
              "items": [
                {
                  "url": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                  "total": 324.55600000000004,
                  "scripting": 185.89600000000007,
                  "scriptParseCompile": 45.815999999999995
                },
                {
                  "url": "http://localhost:3000/information",
                  "total": 110.604,
                  "scripting": 8.555999999999996,
                  "scriptParseCompile": 0.772
                },
                {
                  "url": "Unattributable",
                  "total": 54.899999999999935,
                  "scripting": 11.431999999999997,
                  "scriptParseCompile": 0.9319999999999999
                }
              ],
              "summary": {
                "wastedMs": 253.40400000000005
              }
            }
          }
        }
      }
    },
    "uses-rel-preconnect": {
      "title": "Preconnect to required origins",
      "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/).",
      "numericUnit": "millisecond",
      "warnings": [],
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0
            }
          }
        }
      }
    },
    "preload-lcp-image": {
      "title": "Preload Largest Contentful Paint image",
      "description": "Preload the image used by the LCP element in order to improve your LCP time. [Learn more](https://web.dev/optimize-lcp/#preload-important-resources).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0
            }
          }
        }
      }
    },
    "uses-long-cache-ttl": {
      "title": "Uses efficient cache policy on static assets",
      "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).",
      "numericUnit": "byte",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "0 resources found",
            "details": {
              "type": "table",
              "headings": [],
              "items": [],
              "summary": {
                "wastedBytes": 0
              }
            }
          }
        }
      }
    },
    "total-byte-weight": {
      "title": "Avoids enormous network payloads",
      "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).",
      "numericUnit": "byte",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 1180696,
            "displayValue": "Total size was 1,153 KiB",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "url",
                  "itemType": "url",
                  "text": "URL"
                },
                {
                  "key": "totalBytes",
                  "itemType": "bytes",
                  "text": "Transfer Size"
                }
              ],
              "items": [
                {
                  "url": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                  "totalBytes": 1041178
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/pages/information.js?ts=1646846801070",
                  "totalBytes": 55284
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/pages/_app.js?ts=1646846801070",
                  "totalBytes": 46085
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/react-refresh.js?ts=1646846801070",
                  "totalBytes": 24968
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/webpack.js?ts=1646846801070",
                  "totalBytes": 9135
                },
                {
                  "url": "http://localhost:3000/information",
                  "totalBytes": 1618
                },
                {
                  "url": "http://localhost:3000/vercel.svg",
                  "totalBytes": 868
                },
                {
                  "url": "http://localhost:3000/_next/static/development/_buildManifest.js?ts=1646846801070",
                  "totalBytes": 722
                },
                {
                  "url": "http://localhost:3000/_next/static/development/_middlewareManifest.js?ts=1646846801070",
                  "totalBytes": 427
                },
                {
                  "url": "http://localhost:3000/_next/static/development/_ssgManifest.js?ts=1646846801070",
                  "totalBytes": 411
                }
              ]
            }
          }
        }
      }
    },
    "offscreen-images": {
      "title": "Defer offscreen images",
      "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).",
      "numericUnit": "millisecond",
      "warnings": [],
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "render-blocking-resources": {
      "title": "Eliminate render-blocking resources",
      "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0
            }
          }
        }
      }
    },
    "unminified-css": {
      "title": "Minify CSS",
      "description": "Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "unminified-javascript": {
      "title": "Minify JavaScript",
      "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).",
      "numericUnit": "millisecond",
      "warnings": [],
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "Potential savings of 4 KiB",
            "details": {
              "type": "opportunity",
              "headings": [
                {
                  "key": "url",
                  "valueType": "url",
                  "label": "URL"
                },
                {
                  "key": "totalBytes",
                  "valueType": "bytes",
                  "label": "Transfer Size"
                },
                {
                  "key": "wastedBytes",
                  "valueType": "bytes",
                  "label": "Potential Savings"
                }
              ],
              "items": [
                {
                  "url": "http://localhost:3000/_next/static/chunks/webpack.js?ts=1646846801070",
                  "totalBytes": 9135,
                  "wastedBytes": 4492,
                  "wastedPercent": 49.17263360111771
                }
              ],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 4492
            }
          }
        }
      }
    },
    "unused-css-rules": {
      "title": "Reduce unused CSS",
      "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "unused-javascript": {
      "title": "Reduce unused JavaScript",
      "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "modern-image-formats": {
      "title": "Serve images in next-gen formats",
      "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).",
      "numericUnit": "millisecond",
      "warnings": [],
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "uses-optimized-images": {
      "title": "Efficiently encode images",
      "description": "Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).",
      "numericUnit": "millisecond",
      "warnings": [],
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "uses-text-compression": {
      "title": "Enable text compression",
      "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "uses-responsive-images": {
      "title": "Properly size images",
      "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "efficient-animated-content": {
      "title": "Use video formats for animated content",
      "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/)",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "duplicated-javascript": {
      "title": "Remove duplicate modules in JavaScript bundles",
      "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "displayValue": "",
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0,
              "overallSavingsBytes": 0
            }
          }
        }
      }
    },
    "legacy-javascript": {
      "title": "Avoid serving legacy JavaScript to modern browsers",
      "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn More](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 0.88,
            "numericValue": 150,
            "displayValue": "Potential savings of 0 KiB",
            "details": {
              "type": "opportunity",
              "headings": [
                {
                  "key": "url",
                  "valueType": "url",
                  "subItemsHeading": {
                    "key": "location",
                    "valueType": "source-location"
                  },
                  "label": "URL"
                },
                {
                  "key": null,
                  "valueType": "code",
                  "subItemsHeading": {
                    "key": "signal"
                  },
                  "label": ""
                },
                {
                  "key": "wastedBytes",
                  "valueType": "bytes",
                  "label": "Potential Savings"
                }
              ],
              "items": [
                {
                  "url": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                  "wastedBytes": 395,
                  "subItems": {
                    "type": "subitems",
                    "items": [
                      {
                        "signal": "@babel/plugin-transform-classes",
                        "location": {
                          "type": "source-location",
                          "url": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                          "urlProvider": "network",
                          "line": 37,
                          "column": 461
                        }
                      },
                      {
                        "signal": "@babel/plugin-transform-spread",
                        "location": {
                          "type": "source-location",
                          "url": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                          "urlProvider": "network",
                          "line": 389,
                          "column": 2065
                        }
                      },
                      {
                        "signal": "@babel/plugin-transform-regenerator",
                        "location": {
                          "type": "source-location",
                          "url": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                          "urlProvider": "network",
                          "line": 586,
                          "column": 5124
                        }
                      }
                    ]
                  },
                  "totalBytes": 0
                }
              ],
              "overallSavingsMs": 150,
              "overallSavingsBytes": 395
            }
          }
        }
      }
    },
    "dom-size": {
      "title": "Avoids an excessive DOM size",
      "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size/).",
      "numericUnit": "element",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 28,
            "displayValue": "28 elements",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "statistic",
                  "itemType": "text",
                  "text": "Statistic"
                },
                {
                  "key": "node",
                  "itemType": "node",
                  "text": "Element"
                },
                {
                  "key": "value",
                  "itemType": "numeric",
                  "text": "Value"
                }
              ],
              "items": [
                {
                  "statistic": "Total DOM Elements",
                  "value": 28
                },
                {
                  "node": {
                    "type": "node",
                    "lhId": "4-15-IMG",
                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,1,FOOTER,0,A,2,SPAN,0,SPAN,0,SPAN,0,IMG",
                    "selector": "span.Home_logo__27_tb > span > span > img",
                    "boundingRect": {
                      "top": 694,
                      "bottom": 710,
                      "left": 190,
                      "right": 262,
                      "width": 72,
                      "height": 16
                    },
                    "snippet": "<img style=\"display: block; max-width: 100%; width: initial; height: initial; background: none;\" alt=\"\" aria-hidden=\"true\" src=\"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20versi…\">",
                    "nodeLabel": "span.Home_logo__27_tb > span > span > img"
                  },
                  "statistic": "Maximum DOM Depth",
                  "value": 9
                },
                {
                  "node": {
                    "type": "node",
                    "lhId": "4-16-BODY",
                    "path": "1,HTML,1,BODY",
                    "selector": "body",
                    "boundingRect": {
                      "top": 0,
                      "bottom": 744,
                      "left": 0,
                      "right": 360,
                      "width": 360,
                      "height": 744
                    },
                    "snippet": "<body>",
                    "nodeLabel": "body"
                  },
                  "statistic": "Maximum Child Elements",
                  "value": 5
                }
              ]
            }
          }
        }
      }
    },
    "uses-http2": {
      "title": "Use HTTP/2",
      "description": "HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing. [Learn more](https://web.dev/uses-http2/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": 1,
            "numericValue": 0,
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0
            }
          }
        }
      }
    }
  },
  "informative": {
    "screenshot-thumbnails": {
      "title": "Screenshot Thumbnails",
      "description": "This is what the load of your site looked like.",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "filmstrip",
              "scale": 3000,
              "items": [
                {
                  "timing": 300,
                  "timestamp": 172553123218,
                  "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z"
                },
                {
                  "timing": 600,
                  "timestamp": 172553423218,
                  "data": "data:image/jpeg;base64,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"
                },
                {
                  "timing": 900,
                  "timestamp": 172553723218,
                  "data": "data:image/jpeg;base64,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"
                },
                {
                  "timing": 1200,
                  "timestamp": 172554023218,
                  "data": "data:image/jpeg;base64,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"
                },
                {
                  "timing": 1500,
                  "timestamp": 172554323218,
                  "data": "data:image/jpeg;base64,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"
                },
                {
                  "timing": 1800,
                  "timestamp": 172554623218,
                  "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD5I/bD/ap8Yfsw/Fn4QxRWugN8OPFeprYa3qGo2lw1xp+2aETSLKkqoAYpSygoxzC55HAAML9sD9vO+/Z3/aR+Fnw5sLbRV0fWZLW58S6nq8cjm0sp7sQ7oWSRQjqkc7kurDmM4xkEA6P44ftWeMvCH7Znwp+CHgrR9Fvk8RQJqOt3eqCRpY7TzJTIICsiKkiw207/OrAlowB1BAPXL79qr4P6X45Pg67+Jfhi38SLKbd7CTU4g0cwcoYXbO1ZdwI8tiHzxigDx39ob9rTxd8J/2wvhB8K9J0/RJ/Dvi5YGv7q9gma7j33EkR8pllVBhVBG5G5oA9p8d/tN/Cb4X+IY9A8VfETw5oWtF0jbT7vUY1mhLKGUyrnMQKkEM+0EEc0Adfrvj7wz4Y8Jt4o1fxDpWmeGlijnbWLy9jitBHIVEb+cxCYYugU55LKBnIoA5/wCGPx8+HfxoN6vgfxjo/iaWy5uIbC7V5IlJwGZPvBSQQGxg9jQBiaz+1p8GNB0u61G8+KHhYWdrcrZzyQ6pFMY52ziNlRiQ3ysSMcBSTjFAF3xP+0z8KPBV3oVtrvxF8M6XNrlql/p32jVIlW5tnDFLhW3bfKfa22QkKxGASeKAOh+I3xY8G/CLRP7X8aeJtL8M6czFI5tTulh81wpYpGCcu+ATtUE8HigB/wAO/ij4S+Lfh8a54M8R6Z4m0nzPJa60y5WZY5MBjG+D8jgMp2tg4YccigDwv9pb9unw5+zj8V/ht4JvLTTdUfxPfC31a7l1uO0Ph+3aWBFuZ4zG3yFZZHBYxgiFuepAB7D4w+PHw88AeFNN8TeIvGuhaPoOpwC50++ub+MR30ZQOGt8H98CrKRs3ZDDHWgDU+HnxQ8JfFnQRrfg3xHpniXSt/lNdaZdLMqSbQxR9p+RwrKdrYOGHHIoA+Y/+CsHgKDxp+xr4iv2huJ7zw3fWesWqW6lufNFvIWwPuCK4lY+m0E8CgD4Z8E+Grv9t34VftU/Gbxbpkdl4h0/QNMOl6mYWlgiksbcT3iQ5wFkkSzhBIPyC6PUMcgHVfsw+MvFfx8+Lvx7+N2hpc6h4j0T4VRWVpcCASXkWvNpcEYe2hAPLTWd7tCjkSAY+cigDhPgt+z3q3xO/Ynvrmzj+Bmg6HeXzLfeNvFV9PBrulzi5TZE8/lMlsHVY1WMEKyTA4zISQD1L4iaZqmiftb/ALFWnaxq+l69qFl4f0i3fV9GujdWl4iXEixzxTMoMgdAr7sclsjjBoAl/wCCf3hH4UfFfSvjbrP7QraPqnxGk1CRNbh8bGK3m06zChXnRpdr27iaR42dCpj8uJQUyMgHCfGfT/hhD4Z/Zs8IeD/H3ifxZ+z7d+NrqPVL3xTLPZ28K+Zp4mjDNDbhYo45bhlkC/KZ7nDZDYAPWv2h/D3w/wDhx+3Z+zU/wMOlaTrd9qMFr4g0zwcsKxDT2ngYSSxQDAElvNclmYcxorZwAaAPLv2PPg94O+I3ww/a71jxN4fsdb1LR7O7Glz3kKytp7mK9kMkBI+SQtHH845+QDOMggFTRfgp4JP/AASE8QfECXw5YXHjU6olxHr80KteQganBZ+Uk2N4i8nI8vO3LM2MnNAE3j2PxD43+PX7Jfh67j8LahY/8Ky0WTRtK+IF1P8A2FeXMto+7zlXP72SRI0CgfvGigVsggUAfT/7GfwY134Z/tgfEnV9Q8U/CzSl1PRFgvvhz8N9Wk22NxHJarHO9g0a+WqjzcseVa6IAAkNAHO/8FMPCfhl/wBqL9lK81PRtJaHVvEptdauLu1iK3tql3pw8u5ZhiSNUklG18qA7diaAOb+KGj+HvEP/BU/wn4B+KUFnZfDDRNGgg8G+Hb+GOLSJt1qgjiWJsR7WuFkQAD52tooiCAFoA6H9ku28N+E/wDgqV8c/DPw+mtLTwN/wjq3A0zRLjdYC6VtP83CISgaOaa6XaP9WXkQBRkUAfoV4u8K6X468K6z4b1u2+26LrFlNp99beY0fmwSoY5E3IQy5ViMqQRngg0AcX8K/wBnD4c/BXwBqvgnwf4ai0vwtqs0099pstzPdpcPLEsUm4zu7YaNFUrnGB05NAC/BL9nH4c/s56PqOl/Dvw1H4dstRnFzdKLqe5eWQKFUl5ndsAdFzgZYgZJyAeV6j/wTQ/Zs1XVrvUZ/hlbJcXU73EiW2qX0EIZiWISKOdURQTwiKFAAAAAoA9J8RfsvfDHxR468HeML7wpb/2/4QghttCmtbie2hsIomLRIkETrFtUngFSAMDoBQBxnxF/4J+fAP4r+NdV8W+KPAMeoeINUlWa7uotTvbUSuFVd3lwzIgJCgkhQSSSSSSSAdn4k/Zc+Ffiv4Q2Hwv1HwTps3gXT/Laz0mLfALd0JIkjljZZFkJZ90gYM/mSbi29twBifCD9in4LfATxOfEXgXwNbaPrvktAt/LeXN3LEjcN5ZnkkEZIJBKgEgkZwSKANXwF+yn8LvhfovjTSPDHhj+zNO8ZI6a7CdQupvtgZZFb5pJWZMiWQfIV+97DAAkP7KPwtt/ghP8H4/C+34cTuJJNF/tC65b7QtxnzvN80fvVVvv9sdOCAVfiH+x58Ifit4N8IeFPFXg5NV0LwjarZaJbnULqJ7OARxxhBJHKrsNsUYO9jkopOSM0AaPwR/Zd+F/7OaakPh74Tt/D76iV+1TfaJ7maQL91fMmd3C/wCyCFzzjPNAE3xy/Zp+G37SGn6VZfEXwxD4ih0uV5rJjcTW0sDOAHCyQujbW2rlc4JVSRlRgAwPiN+xf8HPi14b8IaD4s8GR6rpfhKxXTdFhGoXcDWtsEjQR+ZHKruAsSffZjwTnJJoA6H4Ifs2fDf9nLTtTsvh54VtvDcWpSrNeOk81xLOyjCBpZnd9qgnCbtoLMQMsxIB6bQBV1PUrXRtNu9QvrmGzsrWJ557m4kEccUagszuzEBVABJJ4AFAHhPwK/bZ+Hfx++JXjTwTod39j1bw5ftYwteXVvs1na04aWxCSM00YW3LlgOFdT3oA84/Y/8A265fjNo3xH1f4mXXhXwPpXhnV4dMtr5rk2cEm/zMCR55Su47BgAjPPFAHof7Wvxu8Z/Db4P6D4s+E7eDNbvNT1K3ijn8TarDb6fPZyQSyCSGZ7mCNmO2MriQ5QsQD1AB634x+JfhP4ZaZaXfjHxPonhSC4fyYpda1KK0jkkAyVRpWXccc4HOKAN/TNUs9b0621DTruC/sLqNZoLq1kWSKZGGVZGUkMpByCDg0Ac5P8XfAtrPrkM3jTw9DNoUbS6tHJqsCtp6A7S04L/ugCQCXxzQBr+GPFmieNtEttZ8O6xp+vaRchjBf6ZdJcQS7WKttkQlWwyspweCCOooAwtI+NHw/wDEHi2Xwrpfjrw1qXieJpFk0W01e3lvUKcuDCrlwVwcgjjBzQBd8afE7wf8N1s28W+LND8LJesUtW1rUobMTsMbgnmMu4jcuQM/eHrQBZtPHXhvUPFF34atvEGlXHiO0hFxcaPFexveQxHZh3hDb1U+ZHyRj519RQBnW3xe8C3njM+D4PGnh6bxcpKnQI9Vga/BC72Btw/mZCgsfl4Az0oA66gAoAKAMzxP4c03xj4a1bQNZtVvtI1W0lsb21diBNBKhSRCQQQCrEcEHmgD82f+CbXwY8D2v7W/7R11DocMV14E8TPZeGm82TOnQST6lbuiAt8wMSoh37jwO/NAHnP/AATu/ZP+Hv7SbfGp/iBptxrK2GrLbaekd9PALJ5DMZJkEciqztsi5dWA8scEEigDwm81i+1L/glhZW13eXF1Bp3xe+zWcU8rOttEdIklMcYJwq+ZJI+0YG6Rz1Y5APsj9on4Ya1/w3P4h8aaf4S8J/tIWo8PxxXHw2vtdtl1Hw/GkNuBKLSYuQjM3mLsjbJumO0MyOwB6Z/wSg8VeCdS+D3jHQfCOn+IPD91pmvvPqWgeIb6O9ksXljRV8uVLeH5G8hhsZNyukmeoJAPmX4W/B74e/HT/gpj8bvC/wARybzSvtWoXlpozX0lqmoXSTxhQTG6s5SNpXCA54Zvuq2QCj8LPHGgfszfFf8Aas8F6N4p8Rp8E9M0l7lJ/Cs4N1ZXkl3Z2yR2s8m9UlBupLcyn5mECuTmNSoB4/8AHPwsvgT9nb4YeLvDnwMu/hO7X1vfaN8QJPHMV9qmoq0MkykwxpE6MSscqyhE8vYoUL5nIB9KXvgDwt+01/wVV8eeFvjBJLfaLpeho2i6Hc6pJBHO621oyxRBWV8Mk1xcmOMjkMxyobIB5lo5j+A/7Tv7WMfwp1S61y20H4dXtvpN5BfvPLp8fmaajrFMGLf6CrOi5bKi1UE8GgDlvCnwY1nV/wBivTNW0P4HaPpl4tyup2/xmvPiDYae0U4vQgJilkTywAv2dY3dQHO8DzDyAfsd8AbrVb74F/Du4129TU9cl8O6c9/ex3cd0txcG2jMsgmjZklDNuO9GKtnIJBzQB3tABQAUAfPuh/sPfDXwt+0ifjXoiatpPiqWS6uLq0t73/Qbqe4WRZpZI2UtljKWwrhdyqQuQcgHVfAf9mTwP8As4J4kHgq1u7b/hILpby++13TT7pBuxtz90fOeBQB5yP+Cc/waHwbPwv/ALN1U+FDrw8SGL+0pPO+2/Z/s+7f12+X/D0zzQBq/Gv9hT4afG/xm3jO8/tvwp42kCJL4l8K6m9leTRrF5QR8hoyCmFLbNxVVXdgYoA7/wCA37PHgX9mzwfN4b8B6Q2lafczi7ujLcy3Ek8/lpGZGaRiRkRr8q4UHJCjJoA+I9A/4J33Hxa/au+OOr/FjwfMngTXpri68P6za6nEk6XBmwksYikLqRGznbKhQnG5SQKAPp/4a/sFfBz4YfCnxB8PrHw2+q6H4jEI1uXVbp5LnUfKcvCzuhTYYycr5QTafm+9kkA86tf+CTHwAi0Qaddabr+pNHO0sF5da3N5sEZzmBFXbGI9xLfcLkk5Y9KAOM/bK/Z58R+MPjVD4n1L9nvw98afBq6elrby6Jrt3o+uW2zy/luT54jnUu8xXZGzbcAsm35wBP2Hf2PfFHg342eOPiZ4s8B6J8NPC+uaCfDenfD6G6GoPHa/6L888mWV9yW43liXkeSRmVONwB3g/wCCUnwBHiMXv9l69/YQO8+Ff7cuP7NMmwoJDz5+7B6+b2AxjIIB9c6VpdnoemWmnadaW+n6faRJb21paxiOKGJFCoiIoAVVAAAAwABigC3QAUAFABQAUAITjrxQAZHqKAELDYWBBGM5zxQB4F4Y+MfxM8KJ8cvEHxX8E22h+CPBr3N/4dvNHmjmutW02FbiR3aMzsBJ5cULDd5QJl24G04AGzfthaJqf7Il/wDH3w7oF/faLFZz3cGk6nKlpcS+VctbsrMnmqnzoxBG7jHrwAdj+zf8bo/2gfgr4U8fPpaeHZNejmddLN39oMRjmkjIEmxN3+rz90Yz+NAHp/WgBaACgAoAKACgAoAKACgDJ8W+GNO8beFNZ8O6vB9q0nV7KbT7yDcV8yGVDHIuR0yrEUAfjN4Ts9X8cfAPQv2SLnxFNB4ztPi/JpNzZWCmXydIjjla5n2ZXzIo7gTTbTgHYDkYyADQ+DPxJg/av+IP7GXwr1KYeZ4Kiu7nVR5W+KX7I7vbW0kR4P8Ao+nQqWPa5PHUEA6Dwl8LfDXxT/4eHf8ACS6edQPh3Wr7xBpmLiSLyL6D+3fJlOxhuC72+Vsqe4NAHTfBf4WeF/Cn/BIjxz4z0rTTbeJfFmj3A1m88+V/tP2XU7mKD5GYom1GI+QLnqcnmgDzLVP2XvDNr/wTF0X44NqWuP8AELSniudPvhqD+XaQNqv2dbWKL7scSmR5xsw/muzbsNtoA/V39mjWr/xJ+zj8KtX1W8n1DU7/AMKaVdXV5cuXlnmeziZ5HY8lmYkknqTQB6TQAUAFABQAUAFABQAUAFAHgWkfsVfD3Rf2otQ+PMP9pt4wu1bbZtPGthbyNbrbvMkaRq5dkD53uwJldsZ27QDP+D/7CXw7+CXxz8TfFbQbjV7nxFrrXha0vpLdrKz+0ziZ/s6JCrIRjYuXOEZgc5oA1PA37GfgXwLffGq4hutZ1OL4tyzSeIbS/uo/LQSm6LpbmOJGRSLyUfMzEALzkEkA5fwD+wD4T8AfBvxt8L4fG3jfVvCHie3itvsepanFINLRXkkf7GvkiOIyPIS52HdtXjIyQDprz9jTwbffsrL8AJNU10eDViSIXy3EI1DC3gux8/k+X99QP9X93PfmgD1r4d+CrL4a+APDXhDTZZ59N0DTLbSrWW6ZWmeKCJYkZyqqCxCDJAAznAHSgDoaACgAoAKACgBNw3bcjOM4oAMg0ABYe2fSgDxD9mD9rXwt+1bZ+KLnwvpWsaZH4fvEsrj+1o4k8x2DHKeXI+R8p64PTigC5+1N+1H4a/ZL+H+neLvFOm6rqun3upx6UkOjpE8qyPDNKGIkkQbcQMOuckcUAX1+MHiZv2i2+HX/AArLXP8AhFRon9qDx75if2eZtwH2fGMZ5x9/zN3PleX+9oAzfCf7Vvgr4sfDrxz4n+Fs9x8QbnwtazyPpNpZ3NtNdXKQvJHbR+bCCzSFNoKq3JHB6UAdP8BviPrnxa+FGh+K/EfgvUPh7rOoef5/hzVC5uLTy55I13b4om+dUWQZReHHUckA7/cPUUAIHU4wwOfegBc0ABIHcc9KAPHPgh+1F4b+PPxB+KHhHQ9M1Syv/h9qY0rUpr9I1inlMtxFuh2uxK5tXPzBThl464APZKACgD5c/wCCh/ju08G/AoQzfFvUfhFdX16ghvtC097zVNQEas5tbZUmieMs4iJl3qoA2MwElAHwx8PPiN4i+Bv7YHwi0nwpefGzS/DPifUorHVtD+MMbQC8eebyZJ4kVtsmFkVgSu5XTlmDYAB1/wCyl4C8d/t/6l8Qvi5rvxp8WeCdSs9SmsdB0vw3qbomkM0SuhMeRm3CuqbF8tpSkhZ85JAPnT4R/G/xb8Ff2Nvi/feF9TfTNc1/xnp2jSaxZSmO4tke2u55HhdOjH7PtDDoJGIwcGgD1D9v/wDZO1X4A/s0+DNWl+Lfirxvb3euQxajper3pn06S8ltp5Bd2y7v3ZASVTneXEu7cuCGAPc/GeoeKPiB/wAFRvEvwwbx/wCL9A8J6h4e/wCPbQ9Zltvs0h05G82FclEkDchtp5JNAHh37AvhS60v9nv9qHx1p/irxJp+o6FoGq2trZ2momK1eQ2Usi3TooDG4Ro12SBgVyeOaANbVfjx8SdX/Y6/ZT8Gab481vRPEHxH8R6lbX/jH+1J/t0ccWqNbojy7w7J/pSMfnHECr0JoA9E8R+Gta/YM/bG+Bnh3wv8RfFni3wT44vf7P1Dw34k1v7RtmmnS3NwUWNUABmhkQ7NxaCRd204ABgfBz4TeLf2v/jV+1NoWsfGb4g+HtN8Na/dWul2Gma3KbJJJbu98nzYGbDRR/Z1/dqUJBwGXANAGN8L/wBorxH4l/4JtX194y+N/iLwHd6f41k0a38Q2NnNqer6hCtql2likgmjdGZ3YiRpVUJEIiwRsUAY3wq8d618Gv22/hHonhef406T4X1+6WHUtC+LrPayXks5lgadYo2CTIqvGwLKSJIs56AAH0V/wTf/AOTpP2z/APscl/8AS7VaAP0BoAKAPAv2uv2RtH/au8M6JBNrt74S8UeHrv7boniGwUyPZyErvDR7l3q2xDwysGjQhsblYA8o1H/gnl4g8VfF/wCGvxN8YfGe/wDF3i3wpqMV7d3N5oqQxXscMySQW8EMcyx2qKEbJCyMzyO5PIUAFXUf+CZMGj/FHxBr3w5+K/iP4X+EPE20a54X0CPb543szrDOJAIlw7KgMT+XvfB2tsABB8PP+CWPhnwp8EviF8ONd8UnxLaeJL6HU9Ovl0z7K+kXMKSLFIq+c/mYEhB5XcpZeN2QAcd4m/4JM+JPG/w70Xwr4j/aH17W4dBkSPSI7vSmeysrVUdTEtsbo5blAsnmDYiFApBXYAfQtv8Asd+R+2ncftAHxduMtgLH/hHv7Nxj/Rlg3faPN/2d2PL74z3oA89+HP8AwTpvfhXN8aNM8P8AxPktfA/xH0zUdP8A+EafRBIunNcJKkEonecvIYUmcYGzzONxyoIALepf8E2PDXiX9kjwl8F9d8TTXWpeFp7u60vxZZ2CwyxSzzTSkGFnfMeZlDoJBv8AKU7lIGAC98J/2CL3Q/jfpfxY+KnxR1H4ueLtFtktdHa60uKxt7RVWQZdA8nmMDKXUgphyXO5iCADtf2cP2TD+z58SfjN4sXxUNdPxF1car9kOnfZxp+JrqXy93mv5v8Ax9Y3YT7nTngA8QsP+CVGmxfss33wfvfiHPc3DeKT4psteg0hYhBKbZLYxSQGZjImxWPEiHcV7KQwBvp/wT18Ua98c/h38VfG3xqufGXibwrNE80k/hyG1W7iilaSKGNYpgsKguxJ2uzM7EnkKAD1X9nD9lH/AIZ9+KXxm8YjxR/b3/CxtZGrGy/s/wCzf2fia7l8vf5r+b/x9Y3bU+5054APoCgDyjQP2gINf/aL8T/CRPCfiC1uNB0mDVZPENxbBdOuFlKgJG+ck/PgHu0NwOPKywB6tkDuOaAPHf2mv2q/BP7KPhOw13xiNQuhqFz9ls9P0mJJbq4YDcxVXdF2qOSxYAZA6kAgHoPw+8Zf8LA8G6V4h/sTWfDZv4vN/snxBafZb+25I2zRZOxuM4yeCKAOioATcM4yM/WgAyM4zzQAiyKxwGBPXANAC5BoA5D4r/Fzwp8EPBV34t8a6r/Y3h61kjimvBbTXGxpHCINkSO5yzAcDvzQB598Sv2sNB8Br8Irmw0HWvFOkfEq/tbTTdW062K21tHceUYpZi+GUss6ssZXcwSXpsIoA9wByKAAEEZByPWgAJAGTwBQB5H4l/ac8KeFv2kPCvwTu7XVX8XeJNOfVLOeGCM2aRKtwxDuXDBsWsvAQ/w88nAB8YfEb4r+NrP9s39r7RIPGOvw6LoXwnvtS0nTo9UnW30+7XTtOdbi3jDbYpQzuwdAGBdjnJNAHkOk+Dfj54w/YUg+PH/DRvi+2/smzuWttAgvbqNpoItQljkae6W4DPLkuVLKxCJHHnAG0A5P9qjU/Fnxq8E/stfE3WPGmqR6l4qj/ss20blY7C7tbiOGTUIQrKElmYrI2xUwUUAkAYAPddZ0n4s/FT9ruw/Zt0n40+LvD2ifD3w5Dc6t4jtNSki1HWZHWGV52ZWDs5F5BEEkkdVELOOWKkAp/DP4s/FH4U3f7WPwR8V+Otb8X6l4V8G6l4h0PxRd6g7XlmY7ddpWU7pQ7LdWzgeaRE0TBfvbqAOb+HWmfF7S/wBgbxd8fL748+M9Vn1bQZ7S00S5v7pm06ZNYii+0x3JuCd5S3kXIRTtnYZwOQDjfGuqfHf4Z/sqfDH9of8A4X54q1C41DUILSPwzNcTtaiNWnZGnZpyLkt9ny4kjO4Sbc4QAgHq/jaw+Nv7L37TX7PV9rPx28QeOk+JPiJYdT0e58xNOgSS4tUnjigaVo9hF62wLHGI/LUqBwFAJ/2g/El142/aA+ItjbftNePLfWLDNrY+C/hPpOp3aaZ5e1QbhoZFikYDcJQrBhK5Usnl7KAPFPHvjjx9+0t/wTaHjnxX451R5vAviCTw/c2aM2zX4pDYPBJekOBJJB5jBXZWY9SdxZmAO/v5vH3wJ8IfsQ6Zp3xQ8V31n4x1S31G7tv7TnhjS0mXRxHp+1ZCHt4leRUU/KBI2FGTQB3kmq/E/wDba/bW+Kvg3Rvi14o+FXgnwEJrKC38PXbwTTTxyLbszCN4/MDSpNJuYsVXagxu3AA4Wx/aG+KejfseftSeBtc8baxqXi34W+IdP0+08ZQahLHfSRy6qLeSMTDEuAbaY73dmK3BThUAoA5/442fxz+An7P3wi+PzftD+LvEc+vyaK48O3M08VnGJLA3MayqLgpOALcJJvTMxdnflm3AH1V8U/h/4l1D/gq18FfFll4a1e48K2HhKe3u9chsZWsbaUxasBHJOFKIxMsYwWyd6+oyAdT4r/Ye1bxF8f8A47/ERPFFlFbfEfwPc+E7eya2cvZSS2lpAJnbOGUG2Y4HOGHpQBseEv2O9T8N/sIXHwAk8R2k+py2F7af2ytuwhDT3ctwp2Z3YAkCnnsaAPM/E3/BODXde+EnwD8HR+NNPim+Gt7dXd1cNZyFL4S3STAIN2VwExznrQB1/wC0n+xN4r8XfGy1+NnwY8cWvgD4nw2YsrltQtFuLO/GzyfMfcj7XEJ2cxyA+XHgIyliAZvwl/4J83/g/wAB/Ge78VeMYPE/xX+KOkXtjqGvrZLDbWLXMTmVIkADMhmfcx+QFY4wsce05AOj0n9i7V9P/YJf9nx/E9m2ptBND/ba2zeT8+oNdg+XndwG29evNAHO/E79gbWvHv7FvgX4HweLbC01Dw5eRXUmrSWrtFMEFxwqA5H+vHUn7poA739or9k3Ufjb8SvgJ4ntNftdNh+GurrqVxBcQM73qiezk2oQQFOLRhyD94elAHlmi/sA/Eb4e/GbxzffDv4xSeDPhn44uje63ZWtjHLqy5aQmCCaRGEfE0wS4DB0yhKyFMkAj8F/8E3NT8OfsVePPgdd+MrG41LX9cXW7TWY7KQQ27KLTCNHvBOfsrDOePMBwduCAZ2k/sCfFfxNovwGg+IHxD0K+u/hZrZuLX7BaMyyaYn9n/Z7ZWEcXzqLOQFnVifMXLHBoA6P4x/sQfEvTfj34i+MfwA+I+m+BfFPiS2Sz1XT9Y06Ka2ZfkMskbmGUAu0EDFTEW3ea3mYfYACrpP/AATRj8O/sr/Ef4c2/jE6r468e3dne6z4s1OGQrI0F2lwieX5hJAAl+YsWZ5WYnG1VAOo/aI/Yg1f42/skfDL4PWviey0u/8ACI0zzdTmtneK4+y6fLanagII3NJuGTwBQB654i+Ffj/U/wBo7wh420/4jT6b8P8AStJns9S8GLb5jv7h9+2Ytuxn5ojkglPIwvEz4APYKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD5Y+Jvw98YWHxU8V6l4WvPGSxySeDprP/ic6ldaeJZtfl/tbbbGfytgtI4PMjUKqRZA2K7ZAOrvPiP8TbC30C8/4RmKQ3viO/0S+tItJvnmFsmqTQ2l5GoYxoj2sfmO0zxofOR1kIVYZQB934/8c6F8T9X0m18M3c2mah4rgtYL82eo3WbMWOkmWdQf9GijzLeqW863VWgLpFdSiWOQAtJ8SPiTqPxK8R+HLPwtb6dpVppGqy2Gs6hp946PqEUtuLQSbQImheO4ZgIZpHkEb5+zujwqAcavxx+NGr28jaT8PIPtOoaLe3WkQajYanaMdQha98uGRnhCLG/lWO1rp7J3DyEIN4WMA6XXvi548Sdk0PQLvUrfU57E6JcT+F7+2LQi52aml0jtut2igUyxPP5Pms6rGku35wDzz4i/E7426p8NvHGnzeGr7S7qbw9qFpp2o+H9DvjdtqZ0bTbm3EKxyM8Qaa41eNZjlY5LWBGfzBiYA6LQfjT8XPFHiG400+E4/DNpCFhk1jWdFvooYJTaalI7zB2SMIk1rYK3kzTx7ZmC3DGVDGAaFt+0L4pf4dfCnxZqWkW+jr441u4iNlZ2c2tSwaa1hqF3ZvGlo7GaV0tbZ2KBgBJJ8oxuABzd9+0t8T/CnijwhbeM/CFp4X0E6ZDJ4s1Y6fe3Asb5hYgW1sVAhnaSW5mijWCa6c8MVBheNwDU+DXx2+J3jm88JXGs+GNLs/DOpWGn6xLqtlaajM91bXVjDg26xQTQIwv5mUrJc71gjaQoEAmYA+naACgAoAKACgAoAKACgAoAKACgBskayxsjgMjDBB6EUAR/ZIvMRti5Q7kG0fKcEZHpwSPxNAC3VrDewPBcRJNBICrxyKGVgexB6igB6qEGBwBwB6UAOoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8A/9k="
                },
                {
                  "timing": 2100,
                  "timestamp": 172554923218,
                  "data": "data:image/jpeg;base64,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"
                },
                {
                  "timing": 2400,
                  "timestamp": 172555223218,
                  "data": "data:image/jpeg;base64,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"
                },
                {
                  "timing": 2700,
                  "timestamp": 172555523218,
                  "data": "data:image/jpeg;base64,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"
                },
                {
                  "timing": 3000,
                  "timestamp": 172555823218,
                  "data": "data:image/jpeg;base64,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"
                }
              ]
            }
          }
        }
      }
    },
    "final-screenshot": {
      "title": "Final Screenshot",
      "description": "The last screenshot captured of the pageload.",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "screenshot",
              "timing": 708,
              "timestamp": 172553530916,
              "data": "data:image/jpeg;base64,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EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k="
            }
          }
        }
      }
    },
    "user-timings": {
      "title": "User Timing marks and measures",
      "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "displayValue": "4 user timings",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "name",
                  "itemType": "text",
                  "text": "Name"
                },
                {
                  "key": "timingType",
                  "itemType": "text",
                  "text": "Type"
                },
                {
                  "key": "startTime",
                  "itemType": "ms",
                  "granularity": 0.01,
                  "text": "Start Time"
                },
                {
                  "key": "duration",
                  "itemType": "ms",
                  "granularity": 0.01,
                  "text": "Duration"
                }
              ],
              "items": [
                {
                  "name": "Next.js-before-hydration",
                  "startTime": 0,
                  "duration": 264.284,
                  "timingType": "Measure"
                },
                {
                  "name": "Next.js-hydration",
                  "startTime": 264.284,
                  "duration": 8.535,
                  "timingType": "Measure"
                },
                {
                  "name": "beforeRender",
                  "startTime": 264.3,
                  "timingType": "Mark"
                },
                {
                  "name": "afterHydrate",
                  "startTime": 272.825,
                  "timingType": "Mark"
                }
              ]
            }
          }
        }
      }
    },
    "critical-request-chains": {
      "title": "Avoid chaining critical requests",
      "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "displayValue": "1 chain found",
            "details": {
              "type": "criticalrequestchain",
              "chains": {
                "023A7F629A4CFDC5DF9BA798121E38CD": {
                  "request": {
                    "url": "http://localhost:3000/information",
                    "startTime": 172552.823922,
                    "endTime": 172552.87077,
                    "responseReceivedTime": 172552.87053400002,
                    "transferSize": 1618
                  },
                  "children": {
                    "45031.9": {
                      "request": {
                        "url": "http://localhost:3000/_next/static/chunks/react-refresh.js?ts=1646846801070",
                        "startTime": 172552.874357,
                        "endTime": 172552.885477,
                        "responseReceivedTime": 172552.88086099998,
                        "transferSize": 24968
                      }
                    }
                  }
                }
              },
              "longestChain": {
                "duration": 61.55499999294989,
                "length": 2,
                "transferSize": 24968
              }
            }
          }
        }
      }
    },
    "diagnostics": {
      "title": "Diagnostics",
      "description": "Collection of useful page vitals.",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "debugdata",
              "items": [
                {
                  "numRequests": 12,
                  "numScripts": 8,
                  "numStylesheets": 0,
                  "numFonts": 0,
                  "numTasks": 409,
                  "numTasksOver10ms": 2,
                  "numTasksOver25ms": 2,
                  "numTasksOver50ms": 1,
                  "numTasksOver100ms": 0,
                  "numTasksOver500ms": 0,
                  "rtt": 0.109,
                  "throughput": 80005827.48539297,
                  "maxRtt": 0.109,
                  "maxServerLatency": 5.766,
                  "totalByteWeight": 1180696,
                  "totalTaskTime": 149.35399999999976,
                  "mainDocumentTransferSize": 1618
                }
              ]
            }
          }
        }
      }
    },
    "network-requests": {
      "title": "Network Requests",
      "description": "Lists the network requests that were made during page load.",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "url",
                  "itemType": "url",
                  "text": "URL"
                },
                {
                  "key": "protocol",
                  "itemType": "text",
                  "text": "Protocol"
                },
                {
                  "key": "startTime",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "Start Time"
                },
                {
                  "key": "endTime",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "End Time"
                },
                {
                  "key": "transferSize",
                  "itemType": "bytes",
                  "displayUnit": "kb",
                  "granularity": 1,
                  "text": "Transfer Size"
                },
                {
                  "key": "resourceSize",
                  "itemType": "bytes",
                  "displayUnit": "kb",
                  "granularity": 1,
                  "text": "Resource Size"
                },
                {
                  "key": "statusCode",
                  "itemType": "text",
                  "text": "Status Code"
                },
                {
                  "key": "mimeType",
                  "itemType": "text",
                  "text": "MIME Type"
                },
                {
                  "key": "resourceType",
                  "itemType": "text",
                  "text": "Resource Type"
                }
              ],
              "items": [
                {
                  "url": "http://localhost:3000/information",
                  "protocol": "http/1.1",
                  "startTime": 0,
                  "endTime": 46.84799999813549,
                  "finished": true,
                  "transferSize": 1618,
                  "resourceSize": 3430,
                  "statusCode": 200,
                  "mimeType": "text/html",
                  "resourceType": "Document"
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/webpack.js?ts=1646846801070",
                  "protocol": "http/1.1",
                  "startTime": 50.11799998464994,
                  "endTime": 56.742999993730336,
                  "finished": true,
                  "transferSize": 9135,
                  "resourceSize": 45808,
                  "statusCode": 200,
                  "mimeType": "application/javascript",
                  "resourceType": "Script"
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                  "protocol": "http/1.1",
                  "startTime": 50.28899997705594,
                  "endTime": 172.88599998573773,
                  "finished": true,
                  "transferSize": 1041178,
                  "resourceSize": 4241028,
                  "statusCode": 200,
                  "mimeType": "application/javascript",
                  "resourceType": "Script"
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/pages/_app.js?ts=1646846801070",
                  "protocol": "http/1.1",
                  "startTime": 51.10499999136664,
                  "endTime": 75.68300000275485,
                  "finished": true,
                  "transferSize": 46085,
                  "resourceSize": 156486,
                  "statusCode": 200,
                  "mimeType": "application/javascript",
                  "resourceType": "Script"
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/pages/information.js?ts=1646846801070",
                  "protocol": "http/1.1",
                  "startTime": 51.21899998630397,
                  "endTime": 81.1309999844525,
                  "finished": true,
                  "transferSize": 55284,
                  "resourceSize": 191359,
                  "statusCode": 200,
                  "mimeType": "application/javascript",
                  "resourceType": "Script"
                },
                {
                  "url": "http://localhost:3000/_next/static/development/_buildManifest.js?ts=1646846801070",
                  "protocol": "http/1.1",
                  "startTime": 51.40599998412654,
                  "endTime": 55.88299999362789,
                  "finished": true,
                  "transferSize": 722,
                  "resourceSize": 385,
                  "statusCode": 200,
                  "mimeType": "application/javascript",
                  "resourceType": "Script"
                },
                {
                  "url": "http://localhost:3000/_next/static/development/_ssgManifest.js?ts=1646846801070",
                  "protocol": "http/1.1",
                  "startTime": 56.1359999992419,
                  "endTime": 74.73199997912161,
                  "finished": true,
                  "transferSize": 411,
                  "resourceSize": 76,
                  "statusCode": 200,
                  "mimeType": "application/javascript",
                  "resourceType": "Script"
                },
                {
                  "url": "http://localhost:3000/_next/static/development/_middlewareManifest.js?ts=1646846801070",
                  "protocol": "http/1.1",
                  "startTime": 57.0049999805633,
                  "endTime": 75.01499998033978,
                  "finished": true,
                  "transferSize": 427,
                  "resourceSize": 92,
                  "statusCode": 200,
                  "mimeType": "application/javascript",
                  "resourceType": "Script"
                },
                {
                  "url": "http://localhost:3000/_next/static/chunks/react-refresh.js?ts=1646846801070",
                  "protocol": "http/1.1",
                  "startTime": 50.43499998282641,
                  "endTime": 61.55499999294989,
                  "finished": true,
                  "transferSize": 24968,
                  "resourceSize": 78502,
                  "statusCode": 200,
                  "mimeType": "application/javascript",
                  "resourceType": "Script"
                },
                {
                  "url": "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2772",
                  "protocol": "data",
                  "startTime": 52.49199998797849,
                  "endTime": 52.53200000151992,
                  "finished": true,
                  "transferSize": 0,
                  "resourceSize": 78,
                  "statusCode": 200,
                  "mimeType": "image/svg+xml",
                  "resourceType": "Image"
                },
                {
                  "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                  "protocol": "data",
                  "startTime": 52.60100000305101,
                  "endTime": 52.61899999459274,
                  "finished": true,
                  "transferSize": 0,
                  "resourceSize": 42,
                  "statusCode": 200,
                  "mimeType": "image/gif",
                  "resourceType": "Image"
                },
                {
                  "url": "http://localhost:3000/vercel.svg",
                  "protocol": "http/1.1",
                  "startTime": 299.29499997524545,
                  "endTime": 301.50299999513663,
                  "finished": true,
                  "transferSize": 868,
                  "resourceSize": 1101,
                  "statusCode": 200,
                  "mimeType": "image/svg+xml",
                  "resourceType": "Image"
                }
              ]
            }
          }
        }
      }
    },
    "network-rtt": {
      "title": "Network Round Trip Times",
      "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "numericValue": 0.109,
            "displayValue": "0 ms",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "origin",
                  "itemType": "text",
                  "text": "URL"
                },
                {
                  "key": "rtt",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "Time Spent"
                }
              ],
              "items": [
                {
                  "origin": "http://localhost:3000",
                  "rtt": 0.109
                }
              ]
            }
          }
        }
      }
    },
    "network-server-latency": {
      "title": "Server Backend Latencies",
      "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "numericValue": 5.766,
            "displayValue": "10 ms",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "origin",
                  "itemType": "text",
                  "text": "URL"
                },
                {
                  "key": "serverResponseTime",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "Time Spent"
                }
              ],
              "items": [
                {
                  "origin": "http://localhost:3000",
                  "serverResponseTime": 5.766
                }
              ]
            }
          }
        }
      }
    },
    "main-thread-tasks": {
      "title": "Tasks",
      "description": "Lists the toplevel main thread tasks that executed during page load.",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "startTime",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "Start Time"
                },
                {
                  "key": "duration",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "End Time"
                }
              ],
              "items": [
                {
                  "duration": 88.373,
                  "startTime": 179.241
                },
                {
                  "duration": 31.397,
                  "startTime": 267.621
                }
              ]
            }
          }
        }
      }
    },
    "metrics": {
      "title": "Metrics",
      "description": "Collects all available metrics.",
      "numericUnit": "millisecond",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "numericValue": 7660,
            "details": {
              "type": "debugdata",
              "items": [
                {
                  "firstContentfulPaint": 912,
                  "firstMeaningfulPaint": 912,
                  "largestContentfulPaint": 7660,
                  "interactive": 7660,
                  "speedIndex": 912,
                  "totalBlockingTime": 303,
                  "maxPotentialFID": 353,
                  "cumulativeLayoutShift": 0,
                  "cumulativeLayoutShiftMainFrame": 0,
                  "totalCumulativeLayoutShift": 0,
                  "observedTimeOrigin": 0,
                  "observedTimeOriginTs": 172552823218,
                  "observedNavigationStart": 0,
                  "observedNavigationStartTs": 172552823218,
                  "observedFirstPaint": 301,
                  "observedFirstPaintTs": 172553123995,
                  "observedFirstContentfulPaint": 301,
                  "observedFirstContentfulPaintTs": 172553123995,
                  "observedFirstContentfulPaintAllFrames": 301,
                  "observedFirstContentfulPaintAllFramesTs": 172553123995,
                  "observedFirstMeaningfulPaint": 301,
                  "observedFirstMeaningfulPaintTs": 172553123995,
                  "observedLargestContentfulPaint": 301,
                  "observedLargestContentfulPaintTs": 172553123995,
                  "observedLargestContentfulPaintAllFrames": 301,
                  "observedLargestContentfulPaintAllFramesTs": 172553123995,
                  "observedTraceEnd": 2633,
                  "observedTraceEndTs": 172555455887,
                  "observedLoad": 298,
                  "observedLoadTs": 172553121193,
                  "observedDomContentLoaded": 256,
                  "observedDomContentLoadedTs": 172553078948,
                  "observedCumulativeLayoutShift": 0,
                  "observedCumulativeLayoutShiftMainFrame": 0,
                  "observedTotalCumulativeLayoutShift": 0,
                  "observedFirstVisualChange": 307,
                  "observedFirstVisualChangeTs": 172553130218,
                  "observedLastVisualChange": 307,
                  "observedLastVisualChangeTs": 172553130218,
                  "observedSpeedIndex": 310,
                  "observedSpeedIndexTs": 172553133599
                },
                {
                  "lcpInvalidated": false
                }
              ]
            }
          }
        }
      }
    },
    "resource-summary": {
      "title": "Keep request counts low and transfer sizes small",
      "description": "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "displayValue": "10 requests • 1,153 KiB",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "label",
                  "itemType": "text",
                  "text": "Resource Type"
                },
                {
                  "key": "requestCount",
                  "itemType": "numeric",
                  "text": "Requests"
                },
                {
                  "key": "transferSize",
                  "itemType": "bytes",
                  "text": "Transfer Size"
                }
              ],
              "items": [
                {
                  "resourceType": "total",
                  "label": "Total",
                  "requestCount": 10,
                  "transferSize": 1180696
                },
                {
                  "resourceType": "script",
                  "label": "Script",
                  "requestCount": 8,
                  "transferSize": 1178210
                },
                {
                  "resourceType": "document",
                  "label": "Document",
                  "requestCount": 1,
                  "transferSize": 1618
                },
                {
                  "resourceType": "image",
                  "label": "Image",
                  "requestCount": 1,
                  "transferSize": 868
                },
                {
                  "resourceType": "stylesheet",
                  "label": "Stylesheet",
                  "requestCount": 0,
                  "transferSize": 0
                },
                {
                  "resourceType": "media",
                  "label": "Media",
                  "requestCount": 0,
                  "transferSize": 0
                },
                {
                  "resourceType": "font",
                  "label": "Font",
                  "requestCount": 0,
                  "transferSize": 0
                },
                {
                  "resourceType": "other",
                  "label": "Other",
                  "requestCount": 0,
                  "transferSize": 0
                },
                {
                  "resourceType": "third-party",
                  "label": "Third-party",
                  "requestCount": 0,
                  "transferSize": 0
                }
              ]
            }
          }
        }
      }
    },
    "largest-contentful-paint-element": {
      "title": "Largest Contentful Paint element",
      "description": "This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "displayValue": "1 element found",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "node",
                  "itemType": "node",
                  "text": "Element"
                }
              ],
              "items": [
                {
                  "node": {
                    "type": "node",
                    "lhId": "page-2-H1",
                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,0,MAIN,0,H1",
                    "selector": "div#__next > div.Home_container__bCOhY > main.Home_main__nLjiQ > h1.Home_title__T09hD",
                    "boundingRect": {
                      "top": 64,
                      "bottom": 432,
                      "left": 1,
                      "right": 359,
                      "width": 358,
                      "height": 368
                    },
                    "snippet": "<h1 class=\"Home_title__T09hD\">",
                    "nodeLabel": "Welcome to this page with additional information!"
                  }
                }
              ]
            }
          }
        }
      }
    },
    "long-tasks": {
      "title": "Avoid long main-thread tasks",
      "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "displayValue": "2 long tasks found",
            "details": {
              "type": "table",
              "headings": [
                {
                  "key": "url",
                  "itemType": "url",
                  "text": "URL"
                },
                {
                  "key": "startTime",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "Start Time"
                },
                {
                  "key": "duration",
                  "itemType": "ms",
                  "granularity": 1,
                  "text": "Duration"
                }
              ],
              "items": [
                {
                  "url": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                  "duration": 353,
                  "startTime": 7551.8939999999975
                },
                {
                  "url": "webpack-internal:///./node_modules/next/dist/client/dev/fouc.js",
                  "duration": 63,
                  "startTime": 610.766
                }
              ]
            }
          }
        }
      }
    },
    "full-page-screenshot": {
      "title": "Full-page screenshot",
      "description": "A full-height screenshot of the final rendered page",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "full-page-screenshot",
              "screenshot": {
                "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAEcAbwBvAGcAbABlAC8AUwBrAGkAYQAvADAARQA5ADgAMwBFAEEAQQA1AEEAMQAyADgAOQA2ADUAMABDAEIANwBDADcARgA2ADgAMgAxAEQARgA2ADkANlhZWiAAAAAAAACD3gAAPb7///+7WFlaIAAAAAAAAEq+AACxNgAACrlYWVogAAAAAAAAKDsAABEMAADIzXBhcmEAAAAAAAQAAAACZUIAAPMVAAAMqgAAE+UAAAuDAAAAFwAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAGxIUFxQRGxcWFx4cGyAoQisoJSUoUTo9MEJgVWVkX1VdW2p4mYFqcZBzW12FtYaQnqOrratngLzJuqbHmairpP/bAEMBHB4eKCMoTisrTqRuXW6kpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpP/AABEIBdAC0AMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAQMHAv/EAEoQAQACAQMBAwcJAwkHBAIDAAABAgMEBRESBiExEzVBUWFxsRQiMnJzgZGhwRWy0RYjMzRCUlSC4UNTYpKTwvEkJTbwg6NjdKL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z",
                "width": 720,
                "height": 1488
              },
              "nodes": {
                "page-0-IMG": {
                  "top": 1523,
                  "bottom": 1539,
                  "left": 370,
                  "right": 442,
                  "width": 72,
                  "height": 16
                },
                "page-1-IMG": {
                  "top": 1523,
                  "bottom": 1539,
                  "left": 370,
                  "right": 442,
                  "width": 72,
                  "height": 16
                },
                "page-2-H1": {
                  "top": 552,
                  "bottom": 772,
                  "left": 32,
                  "right": 688,
                  "width": 656,
                  "height": 221
                },
                "4-0-LINK": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-1-META": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-2-META": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-3-META": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-4-META": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-5-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-6-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-7-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-8-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-9-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-10-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-11-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-12-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-13-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-14-SCRIPT": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "width": 0,
                  "height": 0
                },
                "4-15-IMG": {
                  "top": 1523,
                  "bottom": 1539,
                  "left": 370,
                  "right": 442,
                  "width": 72,
                  "height": 16
                },
                "4-16-BODY": {
                  "top": 0,
                  "bottom": 1572,
                  "left": 0,
                  "right": 720,
                  "width": 720,
                  "height": 1572
                }
              }
            }
          }
        }
      }
    },
    "script-treemap-data": {
      "title": "Script Treemap Data",
      "description": "Used for treemap app",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "treemap-data",
              "nodes": [
                {
                  "name": "http://localhost:3000/information",
                  "resourceBytes": 156
                },
                {
                  "name": "http://localhost:3000/_next/static/chunks/polyfills.js?ts=1646846801070",
                  "resourceBytes": 71
                },
                {
                  "name": "http://localhost:3000/_next/static/chunks/webpack.js?ts=1646846801070",
                  "resourceBytes": 45808,
                  "unusedBytes": 29804
                },
                {
                  "name": "http://localhost:3000/_next/static/chunks/main.js?ts=1646846801070",
                  "resourceBytes": 4241003,
                  "unusedBytes": 20428
                },
                {
                  "name": "http://localhost:3000/_next/static/chunks/pages/_app.js?ts=1646846801070",
                  "resourceBytes": 156486,
                  "unusedBytes": 0
                },
                {
                  "name": "http://localhost:3000/_next/static/chunks/pages/information.js?ts=1646846801070",
                  "resourceBytes": 191359,
                  "unusedBytes": 0
                },
                {
                  "name": "http://localhost:3000/_next/static/development/_buildManifest.js?ts=1646846801070",
                  "resourceBytes": 385,
                  "unusedBytes": 0
                },
                {
                  "name": "http://localhost:3000/_next/static/development/_ssgManifest.js?ts=1646846801070",
                  "resourceBytes": 76,
                  "unusedBytes": 0
                },
                {
                  "name": "http://localhost:3000/_next/static/development/_middlewareManifest.js?ts=1646846801070",
                  "resourceBytes": 92,
                  "unusedBytes": 0
                },
                {
                  "name": "http://localhost:3000/_next/static/chunks/react-refresh.js?ts=1646846801070",
                  "resourceBytes": 78502,
                  "unusedBytes": 0
                }
              ]
            }
          }
        }
      }
    }
  },
  "notApplicable": {
    "uses-rel-preload": {
      "title": "Preload key requests",
      "description": "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "opportunity",
              "headings": [],
              "items": [],
              "overallSavingsMs": 0
            }
          }
        }
      }
    },
    "performance-budget": {
      "title": "Performance budget",
      "description": "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null
          }
        }
      }
    },
    "timing-budget": {
      "title": "Timing budget",
      "description": "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null
          }
        }
      }
    },
    "third-party-summary": {
      "title": "Minimize third-party usage",
      "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null
          }
        }
      }
    },
    "third-party-facades": {
      "title": "Lazy load third-party resources with facades",
      "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn more](https://web.dev/third-party-facades/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null
          }
        }
      }
    },
    "lcp-lazy-loaded": {
      "title": "Largest Contentful Paint image was not lazily loaded",
      "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more](https://web.dev/lcp-lazy-loading/).",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null
          }
        }
      }
    },
    "layout-shift-elements": {
      "title": "Avoid large layout shifts",
      "description": "These DOM elements contribute most to the CLS of the page.",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "table",
              "headings": [],
              "items": []
            }
          }
        }
      }
    },
    "non-composited-animations": {
      "title": "Avoid non-composited animations",
      "description": "Animations which are not composited can be janky and increase CLS. [Learn more](https://web.dev/non-composited-animations)",
      "results": {
        "/": {
          "2022-03-09T17:26:32.735Z": {}
        },
        "/information": {
          "2022-03-09T17:26:32.735Z": {
            "score": null,
            "details": {
              "type": "table",
              "headings": [],
              "items": []
            }
          }
        }
      }
    }
  }
}