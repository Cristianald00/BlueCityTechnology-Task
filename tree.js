// source:
// http://www.atpworldtour.com/Share/Event-Draws.aspx?EventId=410&Year=2013

var tree_structure = {
  chart: {
    container: "#OrganiseChart6",
    levelSeparation:    20,
    siblingSeparation:  15,
    subTeeSeparation:   0,
    rootOrientation: "WEST",

    node: {
      HTMLclass: "tennis-draw",
      drawLineThrough: true
    },
    connectors: {
      type: "step",
      style: {
        "stroke-width": 2,
        "stroke": "#ccc"
      }
      /*
      style: {
        'stroke': '#8080FF',
        'arrow-end': 'block-wide-long'
      },
      style: {
        'stroke': '#bbb',
        "stroke-dasharray": "- .", //"", "-", ".", "-.", "-..", ". ", "- ", "--", "- .", "--.", "--.."
        'arrow-start': 'classic-wide-long'
      },
      type: "curve",
      style: {
        stroke: "#50688D"
      },
      style: {
        'stroke': '#8080FF',
        'arrow-end': 'block-wide-long'
      }
      */
    }
  },


  nodeStructure: {
    HTMLclass: "winner",
    connectors: {
      style: {
        stroke: "#F2C777"
      }
    },
    children: [
      {
        image: "https://images.pexels.com/photos/1006965/pexels-photo-1006965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        HTMLclass: "first-draw",
        connectors: {
          style: {
            stroke: "#BF544B"
          }
        },
        children: [
          {
            HTMLclass: "first-draw",
            connectors: {
              style: {
                stroke: "#BF544B"
              }
            },
            children: [
              {
                image: "https://images.pexels.com/photos/344775/pexels-photo-344775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                HTMLclass: "first-draw",
                connectors: {
                  style: {
                    stroke: "#52D9A7"
                  }
                },
                children: [
                  {
                    text: {
                      name: "Bump to version 0.0.2",
                    }
                  }
                ]
              }
            ]
          },
          {
            HTMLclass: "first-draw bye",
            connectors: {
              style: {
                stroke: "#BF544B"
              }
            },
            children: [
              {
                image: "https://images.pexels.com/photos/344775/pexels-photo-344775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                HTMLclass: "first-draw",
                connectors: {
                  style: {
                    stroke: "#52D9A7"
                  }
                },
                children: [
                  {
                    text: {
                      name: "Merge Pull Request 1.2.12",
                    }
                  }
                ]
              }
            ]
          }
        ]

      },
      {
        image: "https://images.pexels.com/photos/611230/eifel-tower-city-paris-611230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        HTMLclass: "first-draw",
        connectors: {
          style: {
            stroke: "#F2C777"
          }
        },
        children: [
          {
            HTMLclass: "first-draw",
            connectors: {
              style: {
                stroke: "#BF544B"
              }
            },
            children: [
              {
                image: "https://images.pexels.com/photos/1006965/pexels-photo-1006965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                HTMLclass: "first-draw",
                connectors: {
                  style: {
                    stroke: "#BF544B"
                  }
                },
                children: [
                  {
                    text: {
                      name: "Revised Custom Variable Script",
                    }
                  }
                ]
              }
            ]
          },
          {
            HTMLclass: "first-draw bye",
            connectors: {
              style: {
                stroke: "#BF544B"
              }
            },
            children: [
              {
                image: "https://images.pexels.com/photos/1006965/pexels-photo-1006965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                HTMLclass: "first-draw",
                connectors: {
                  style: {
                    stroke: "#BF544B"
                  }
                },
                children: [
                  {
                    text: {
                      name: "Java Script Update for universe",
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        image: "https://images.pexels.com/photos/611230/eifel-tower-city-paris-611230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        HTMLclass: "first-draw",
        connectors: {
          style: {
            stroke: "#F2C777"
          }
        },
        children: [
          {
            image: "https://images.pexels.com/photos/4937229/pexels-photo-4937229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            HTMLclass: "first-draw",
            connectors: {
              style: {
                stroke: "#F26835"
              }
            },
            children: [
              {
                connectors: {
                  style: {
                    stroke: "#F26835"
                  }
                },
                children: [
                  {
                    text: {
                      name: "Universe Page",
                    }
                  }
                ]
              }
            ]
          },
          {
            HTMLclass: "first-draw",
            connectors: {
              style: {
                stroke: "#F26835"
              }
            },
            children: [
              {
                image: "https://images.pexels.com/photos/344775/pexels-photo-344775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                HTMLclass: "first-draw",
                connectors: {
                  style: {
                    stroke: "#52D9A7"
                  }
                },
                children: [
                  {
                    text: {
                      name: "Update NSPW for memory leak",
                    }
                  }
                ]
              },
              {
                image: "https://images.pexels.com/photos/344775/pexels-photo-344775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                HTMLclass: "first-draw",
                connectors: {
                  style: {
                    stroke: "#52D9A7"
                  }
                },
                children: [
                  {
                    text: {
                      name: "aaaaaaa a aa a a a a a aaaaaa",
                    }
                  }
                ]
              }
            ]
          },
          {
            HTMLclass: "first-draw",
            connectors: {
              style: {
                stroke: "#BF544B"
              }
            },
            children: [
              {
                connectors: {
                  style: {
                    stroke: "#F26835"
                  }
                },
                children: [
                  {
                    text: {
                      name: "aaaaaaa a aa a a a a a aaaaaa",
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
