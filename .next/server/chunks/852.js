"use strict";
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 7266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us5)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/aboutSkillsProgress.js
const aboutSkillsProgress = (skillsEl, progresEl, sectionEl) => {
  let skillInAbout = skillsEl;

  if (skillInAbout) {
    window.addEventListener("scroll", () => {
      progresEl.forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > sectionEl.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ const common_aboutSkillsProgress = (aboutSkillsProgress);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/About-us5/about-us5.jsx
/* eslint-disable @next/next/no-img-element */





const AboutUs5 = () => {
  external_react_default().useEffect(() => {
    common_aboutSkillsProgress(document.querySelector(".about-cr .skills-box"), document.querySelectorAll(".skill-progress .progres"), document.querySelector(".about-cr"));
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "about-cr",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 img md-mb50",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/img/portfolio/about.jpg",
            alt: ""
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "cont full-width",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "color-font",
              children: "UI / UX Designer"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "co-tit mb-15",
              children: "We help to create visual strategies."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "I m Walid . I create award-winning websites, remarkable brands and creative design."
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "skills-box mt-40",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "fz-14 mb-15",
                  children: "UI / UX Design"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": "90%"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "fz-14 mb-15",
                  children: "Web Development"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": "75%"
                  })
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const about_us5 = (AboutUs5);

/***/ }),

/***/ 8030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const AboutUs6 = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    id: "about",
    className: "about-ar section-padding",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 valign",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "img",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "bg-img bg-fixed hero-bg",
              style: {
                backgroundImage: "url(/img/arch/hero.jpg)"
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "exp valign text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "full-width",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
                  className: "bg-img bg-fixed",
                  style: {
                    backgroundImage: "url(/img/arch/hero.jpg)"
                  },
                  children: "3"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  children: "Years Of Experience"
                })]
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8  wow fadeInLeft",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("iframe", {
              src: "https://calendly.com/walidnhaila55/book-your-free-website-consultation",
              width: "100%",
              height: "750",
              frameBorder: "0"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: `https://calendly.com/walidnhaila55/book-your-free-website-consultation`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "butn bord mt-30",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  children: " Free Consultation"
                })
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs6);

/***/ }),

/***/ 7564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2589);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */





const FreelancreIntro = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
    className: "freelancre valign",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
              src: "/img/hero.jpg",
              alt: ""
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8 valign",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "cont",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
              className: "cd-headline clip",
              children: ["Hello, My name is Walid i love design and i hope to make awesome designs and also i create a", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                style: {
                  fontSize: "35px",
                  lineHeight: "49px"
                },
                className: "cd-words-wrapper",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default()), {
                  options: {
                    wrapperClassName: "color-font fw-600",
                    strings: ["Landing Pages", "Awesome Design"],
                    autoStart: true,
                    loop: true
                  },
                  loop: true,
                  onInit: typewriter => {
                    typewriter;
                  }
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "states",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              className: "flex",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "numb valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                  children: "3"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "text valign",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["Years ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), " Of Experience"]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              className: "flex",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "numb valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                  children: "18"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "text valign",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["Projects Completed ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), " In 3 Countries"]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
              className: "mail-us",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "mailto:walidnhaila@mail.de?subject=Subject",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "text valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                        children: "Get In Touch"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                        children: "walidnhaila@mail.de"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "mail-icon",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      className: "icon-box",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                        className: "icon color-font pe-7s-mail"
                      })
                    })
                  })]
                })
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "line bottom left"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreelancreIntro);

/***/ }),

/***/ 7492:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */







class FullTestimonials extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderArrows", () => {
      return /*#__PURE__*/_jsx("div", {
        className: "arrows",
        children: /*#__PURE__*/_jsxs("div", {
          className: "container",
          children: [/*#__PURE__*/_jsx("div", {
            onClick: () => this.slider.slickNext(),
            className: "next cursor-pointer",
            children: /*#__PURE__*/_jsx("span", {
              className: "pe-7s-angle-right"
            })
          }), /*#__PURE__*/_jsx("div", {
            onClick: () => this.slider.slickPrev(),
            className: "prev cursor-pointer",
            children: /*#__PURE__*/_jsx("span", {
              className: "pe-7s-angle-left"
            })
          })]
        })
      });
    });
  }

  render() {
    return /*#__PURE__*/_jsxs("section", {
      className: `testimonials ${this.props.withIMG ? "section-padding bg-img" : this.props.withCOLOR ? "section-padding back-color" : this.props.noPadding ? "" : "section-padding"} ${this.props.classText ? this.props.classText : ""}`,
      style: {
        backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"}`
      },
      children: [this.props.showHead && /*#__PURE__*/_jsx("div", {
        className: "container",
        children: /*#__PURE__*/_jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/_jsx("div", {
            className: "col-lg-8 col-md-10",
            children: /*#__PURE__*/_jsxs("div", {
              className: "sec-head  text-center",
              children: [/*#__PURE__*/_jsx("h6", {
                className: "wow fadeIn",
                "data-wow-delay": ".5s",
                children: "Testimonials"
              }), /*#__PURE__*/_jsx("h3", {
                className: "wow color-font",
                children: "We love our clients from all over the world."
              })]
            })
          })
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "container-fluid position-re",
        children: [/*#__PURE__*/_jsx("div", {
          className: "row wow fadeInUp",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/_jsx("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/_jsxs(Slider, {
              className: "slic-item",
              ref: c => this.slider = c,
              dots: false,
              infinite: true,
              arrows: true,
              centerMode: true,
              autoplay: true,
              rows: 1,
              slidesToScroll: 1,
              slidesToShow: 3,
              responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }],
              children: [/*#__PURE__*/_jsxs("div", {
                className: "item",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "author",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/_jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/_jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "item",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "author",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/_jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/_jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "item",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "author",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/_jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/_jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "item",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "author",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/_jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/_jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              })]
            })
          })
        }), this.renderArrows()]
      })]
    });
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FullTestimonials)));

/***/ }),

/***/ 4771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ works_style4)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/common/initIsotope.js
const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  var iso;

  if (grid.length >= 1) {
    grid.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items"
      });
    });
  }

  var gridMons = document.querySelectorAll(".gallery-mons");

  if (gridMons.length >= 1) {
    gridMons.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items",
        masonry: {
          columnWidth: ".width2"
        }
      });
    });
  }

  var filtersElem = document.querySelector(".filtering");

  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }

      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({
        filter: filterValue
      });
    });
    var buttonGroups = document.querySelectorAll(".filtering");

    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }

        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

/* harmony default export */ const common_initIsotope = (initIsotope);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Works-style4/works-style4.jsx
/* eslint-disable @next/next/no-img-element */






const WorksStyle4 = () => {
  external_react_default().useEffect(() => {
    setTimeout(() => {
      common_initIsotope();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "portfolio-frl section-padding pb-70",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Portfolio"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: "wow color-font",
              children: ["My Recent Web Design & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Some Past Projects."]
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "gallery full-width",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items graphic lg-mr wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Creative Landing Page"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Ui / Ux creative Web app design"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: ``,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/1.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "",
                    children: "Web"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "",
                    children: "Creative"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items web wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "cont",
                children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Creative VSL"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: ``,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/2.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "tags",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "",
                    children: "Creative"
                  })
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items web wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Creative Footer"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Ui / Ux creative  app design"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: ``,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/3.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "tags",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "",
                    children: "Creative"
                  })
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items web graphic wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Creative Mobile App"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Ui / Ux creative mobile app design"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: ``,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/4.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "",
                    children: "Web"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "",
                    children: "Creative"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items brand wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Creative WEB App"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Ui / Ux creative app design"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: ``,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/5.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "",
                    children: "App"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "",
                    children: "Creative"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items brand wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Creative Sign App"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Ui / Ux creative  app design"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: ``,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/6.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const works_style4 = (WorksStyle4);

/***/ }),

/***/ 8858:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */





const Blogs2 = () => {
  return /*#__PURE__*/_jsx("section", {
    className: "blog-list section-padding sub-bg",
    children: /*#__PURE__*/_jsx("div", {
      className: "container",
      children: /*#__PURE__*/_jsxs("div", {
        className: "row",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/_jsxs("div", {
            className: "head md-mb50",
            children: [/*#__PURE__*/_jsx("h6", {
              className: "back-color",
              children: "Get The Latest News"
            }), /*#__PURE__*/_jsx("h3", {
              children: "What Our Trending News."
            }), /*#__PURE__*/_jsx("p", {
              children: "We provide company and finance service for startups and company business."
            }), /*#__PURE__*/_jsx(Link, {
              href: "/blog/blog-dark",
              children: /*#__PURE__*/_jsx("a", {
                children: /*#__PURE__*/_jsx("span", {
                  children: "More Blog Posts"
                })
              })
            })]
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "col-lg-7 offset-lg-1",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/_jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/blog/1.jpg",
                alt: ""
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "info",
                  children: [/*#__PURE__*/_jsx(Link, {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/_jsxs("span", {
                        children: [/*#__PURE__*/_jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/_jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/_jsx(Link, {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/_jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/_jsx("h5", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/blog-details/blog-details-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/_jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/blog/2.jpg",
                alt: ""
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "info",
                  children: [/*#__PURE__*/_jsx(Link, {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/_jsxs("span", {
                        children: [/*#__PURE__*/_jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/_jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/_jsx(Link, {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/_jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/_jsx("h5", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/blog-details/blog-details-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/_jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/blog/3.jpg",
                alt: ""
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "info",
                  children: [/*#__PURE__*/_jsx(Link, {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/_jsxs("span", {
                        children: [/*#__PURE__*/_jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/_jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/_jsx(Link, {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/_jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/_jsx("h5", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/blog-details/blog-details-dark",
                    children: /*#__PURE__*/_jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          })]
        })]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Blogs2)));

/***/ }),

/***/ 8682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const SContactForm = ({
  noLine
}) => {
  const messageRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);

  function validateEmail(value) {
    let error;

    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  }

  const sendMessage = ms => new Promise(r => setTimeout(r, ms));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "contact-sec section-padding position-re",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Contact Us"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
              className: "wow color-font",
              children: "Let\u2019s Get in Touch And Make Magic Together."
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "form wow fadeInUp",
            "data-wow-delay": ".5s",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
              initialValues: {
                name: "",
                email: "",
                message: ""
              },
              onSubmit: async values => {
                await sendMessage(500);
                alert(JSON.stringify(values, null, 2)); // show message

                messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon."; // Reset the values

                values.name = "";
                values.email = "";
                values.message = ""; // clear message

                setTimeout(() => {
                  messageRef.current.innerText = "";
                }, 2000);
              },
              children: ({
                errors,
                touched
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
                id: "contact-form",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "messages",
                  ref: messageRef
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "controls",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "row",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      className: "col-lg-6",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                          id: "form_name",
                          type: "text",
                          name: "name",
                          placeholder: "Name",
                          required: "required"
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      className: "col-lg-6",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: "form-group",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                          validate: validateEmail,
                          id: "form_email",
                          type: "email",
                          name: "email",
                          placeholder: "Email",
                          required: "required"
                        }), errors.email && touched.email && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                          children: errors.email
                        })]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      className: "col-12",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                          as: "textarea",
                          id: "form_message",
                          name: "message",
                          placeholder: "Message",
                          rows: "4",
                          required: "required"
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      className: "col-12",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
                          type: "submit",
                          className: "nb butn bord curve mt-30",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                            children: "Send Massege"
                          })
                        })
                      })
                    })]
                  })
                })]
              })
            })
          })
        })
      })]
    }), !noLine ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "line bottom left"
    }) : ""]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SContactForm);

/***/ })

};
;