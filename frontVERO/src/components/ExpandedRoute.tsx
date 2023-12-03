import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ExpandedRoute = () => {
  const route = {
    id: "0_BVECgJWMRLCCsKswrZCQUlNwrZ0AQvwQEhLScK2VCRBPTFATz1aw7xyaWNoIEhCQFg9ODU0MDIxMUBZPTQ3Mzc4MTc3QHU9MEBMPTg1MDMwMDBAYT0xMjhADTs4T2x0ZW5AWD03OTA3NzAzCTYUNTE5MzhAFTYQMDIxOEANNiwyMDIzMTIwMzA4MzAZDUA5MDAkSUMgNSAxNTEyJCQxJAUBCMKnV9pmAAnXBZwgLCBCYWhuaG9mCaUINjkyDdsQNTE5MjkVpRQ3MjM1MkA-pQABmBWyDDkwNSQdnDE94mYAMqUAIFBvc3RwbGF0eg2nCDIyMClMEDQ5NTkxFacMMDA1OUZMAQg5MjMdpzAyNCRCIDUwMyAzMDI1ZrEAznIACbMcTWFydGlnbnkBqxQwNzkxMjIBqxg2MTA1ODM1GasMMTUwMEZSAQQzMh2rQDQ2JEIgMzUxIDMxMDQ3JCQzJfgEJMI1XcprAAmkRExhdXNhbm5lQFg9NjYyOTA5NQWkEDUxNjc5LqQABDEySqQABDQ4FaQwMTAzOSRJUiA5MCAxNzKcAghHQEbmbABgQT0yQE89NDYuNTE5NzAwLCA2LjYzMjMwMAWwCQoMWT00NgkfJVQ6nAIFmVGcDDEwNDZdnCi2R1DCtmZ0QDBAMmGxAeQsLTFAMTAwQDFAQDBAAQEYZmFsc2VAMAEYBQUQLTFAJGY2AwAIwqdi7kMACUMAdDpVAMhmQCTCp8K2S0PCtiNWRSMyI0NGIzEwMCNDQSMwI0NNIzAjU0lDVCMxI0FNIzExNTUwODABDCQyIzAjUlQjMTUjATwNPTAwI0VSRyMyNjIjSElOAQ4kQ0sjNTE3NDcwfBkHCDYwNgEOAQcgMHwwfDY1NzgxAREkNDYzfDF8MHwxOAUYKC0yMTQ3NDgzNjQ4AWMAUhFkTDEjVk9MTCNJU1QjGtcBCjgKEgoHrQm4EgdTVEFUSU9OEhkyMDIzLTEyLTAzVDA4OjMwOjAwKzAxOjAwIgdQTEFOTkVECjoNOqENFToAGjI6AAg5OjBKOgBYKAESFxABGgYwMDAwMTEiAklDKgE1MgShKpAaNgoCUiASGlBsYWNlIHJlc2VydmF0aW9uIHBvc3NpYmxlGP__DQIEASANCVz__wEqDlBVQkxJQ19KT1VSTkVZGpQBCkNOoAA22gBaoAAZWBFFpU1m5QAANUYfAR1FMCoIRk9PVFBBVEgapAExNzZSAD6XAAQyM0pSAAAIETylNGKOAAQyNEo8ABgJEhoICBAJJXUwNzkzIgFCKgM1MDMyBKFTQj4BDI4FCjwxPgQ1ORlrPqcABDMyGWsMCVVOUEkaDCgFCiQBPhQxMjAwNTU5N0QiDE5PVF9TRVJWSUNFRCgGCiEBJgA4Ac8uJgAdSQAHGUkENjNiSQAACBkmBDUyGa06bwAACRUmCDE1MlnrOiYAAAoZJgg0MzY1ZDomAAALHSYAN2JyAAAMHSY9RTpMAAANNQcAMTImAD0HAA4dSQA0Ym8AAA8dSS4mAB1JABAZSQA1LiMANpkBABEdJgAwYioBABJVI-EXNSo-AQQENDZSIwIYExIbCAUQE0WQCDEzOEWQEDM1MTIFofoAN0KRAgSHAlX8Mm4APpECBDQ4GW6RqQwoBQofTWkEMTQu0AAVIQAGGSEAM1IhAAAHGSEAMlIhAHmb4YBWDQEQMTA6MzlKnwBhmwAFbZupEBhSKgI5MDIE4Z8-CgE",
    legs: [
      {
        distance: 0,
        duration: 0,
        mode: "CAR",
        points: [
          {
            place: {
              canton: "746abab6e2ae4908b248876ac80420db",
              id: "9e7d61ac938b4a5e81a395e232d1ca39",
              lat: 47.409598,
              long: 8.530621,
              name: "48c9a8c06ec84c71842abc6e2ae2d5df",
            },
          },
          {
            place: {
              canton: "b75ff39c40ad4acebf0254789e506317",
              id: "58055e3edabc497ab1c9c386b79effd4",
              lat: 47.409598,
              long: 8.530621,
              name: "50333c047f504782827fb828a4856c59",
            },
          },
        ],
      },
      {
        duration: 1860,
        mode: "TRAIN",
        points: [
          {
            departure: {
              quay: "18",
              time: "2023-12-03T08:30:00+01:00",
            },
            place: {
              canton: "ZH",
              id: "8503000",
              lat: 47.378177,
              long: 8.540193,
              name: "Zürich HB",
            },
          },
          {
            place: {
              canton: "SO",
              id: "8500218",
              lat: 47.351929,
              long: 7.907685,
              name: "Olten",
            },
          },
        ],
      },
      {
        end: {
          place: {
            canton: "SO",
            id: "8572352",
            lat: 47.351929,
            long: 7.906921,
            name: "Olten, Bahnhof",
          },
          time: "2023-12-03T09:05:00+01:00",
        },
        mode: "FOOT",
        start: {
          place: {
            canton: "SO",
            id: "8500218",
            lat: 47.351929,
            long: 7.907685,
            name: "Olten",
          },
          time: "2023-12-03T09:00:00+01:00",
        },
      },
      {
        duration: 60,
        mode: "BUS",
        points: [
          {
            departure: {
              quay: "A1",
              time: "2023-12-03T09:23:00+01:00",
            },
            place: {
              canton: "SO",
              id: "8572352",
              lat: 47.351929,
              long: 7.906921,
              name: "Olten, Bahnhof",
            },
          },
          {
            place: {
              canton: "SO",
              id: "8500598",
              lat: 47.349591,
              long: 7.90622,
              name: "Olten, Postplatz",
            },
          },
        ],
      },
      {
        duration: 840,
        mode: "BUS",
        points: [
          {
            departure: {
              quay: "2",
              time: "2023-12-03T09:32:00+01:00",
            },
            place: {
              canton: "SO",
              id: "8500598",
              lat: 47.349591,
              long: 7.90622,
              name: "Olten, Postplatz",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:33:00+01:00",
            },
            place: {
              canton: null,
              id: "1200552",
              lat: 47.414637,
              long: 9.720279,
              name: "Dornbirn, Neugrüt",
            },
          },
          {
            departure: {
              quay: "2",
              time: "2023-12-03T09:33:00+01:00",
            },
            place: {
              canton: "AG",
              id: "8500552",
              lat: 47.508098,
              long: 8.220024,
              name: "Rüfenach AG, Hinterrein",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:34:00+01:00",
            },
            place: {
              canton: null,
              id: "1200632",
              lat: 47.414197,
              long: 9.717375,
              name: "Dornbirn, Volkergasse",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:36:00+01:00",
            },
            place: {
              canton: null,
              id: "1200528",
              lat: 47.412804,
              long: 9.712791,
              name: "Dornbirn, Messekreuzung",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:39:00+01:00",
            },
            place: {
              canton: null,
              id: "1201520",
              lat: 47.417604,
              long: 9.673022,
              name: "Lustenau, Sägerstrasse",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:40:00+01:00",
            },
            place: {
              canton: null,
              id: "1201436",
              lat: 47.418404,
              long: 9.665256,
              name: "Lustenau, Binsenfeld",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:41:00+01:00",
            },
            place: {
              canton: null,
              id: "1201478",
              lat: 47.418997,
              long: 9.66228,
              name: "Lustenau, Holzstrasse",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:43:00+01:00",
            },
            place: {
              canton: null,
              id: "1201498",
              lat: 47.415249,
              long: 9.66033,
              name: "Lustenau, Pestalozziweg",
            },
          },
          {
            departure: {
              quay: "2",
              time: "2023-12-03T09:43:00+01:00",
            },
            place: {
              canton: "VD",
              id: "8501498",
              lat: 46.316398,
              long: 7.072344,
              name: "Bouquetins",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:44:00+01:00",
            },
            place: {
              canton: null,
              id: "1201448",
              lat: 47.412804,
              long: 9.660321,
              name: "Lustenau, Flurstrasse",
            },
          },
          {
            departure: {
              quay: "2",
              time: "2023-12-03T09:44:00+01:00",
            },
            place: {
              canton: "VS",
              id: "8501448",
              lat: 46.174953,
              long: 6.871489,
              name: "Champéry",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:45:00+01:00",
            },
            place: {
              canton: null,
              id: "1201548",
              lat: 47.4107,
              long: 9.660626,
              name: "Lustenau, Wiesenrain",
            },
          },
          {
            departure: {
              quay: null,
              time: "2023-12-03T09:46:00+01:00",
            },
            place: {
              canton: null,
              id: "1201500",
              lat: 47.408803,
              long: 9.656249,
              name: "Lustenau, Philipp-Krapf-Str.",
            },
          },
          {
            place: {
              canton: "VS",
              id: "8501500",
              lat: 46.105826,
              long: 7.079122,
              name: "Martigny",
            },
          },
        ],
      },
      {
        duration: 3000,
        mode: "TRAIN",
        points: [
          {
            departure: {
              quay: "1",
              time: "2023-12-03T09:48:00+01:00",
            },
            place: {
              canton: "VS",
              id: "8501500",
              lat: 46.105826,
              long: 7.079122,
              name: "Martigny",
            },
          },
          {
            departure: {
              quay: "2",
              time: "2023-12-03T10:06:00+01:00",
            },
            place: {
              canton: "VD",
              id: "8501400",
              lat: 46.316848,
              long: 6.963683,
              name: "Aigle",
            },
          },
          {
            departure: {
              quay: "1",
              time: "2023-12-03T10:17:00+01:00",
            },
            place: {
              canton: "VD",
              id: "8501300",
              lat: 46.435874,
              long: 6.91043,
              name: "Montreux",
            },
          },
          {
            departure: {
              quay: "1",
              time: "2023-12-03T10:24:00+01:00",
            },
            place: {
              canton: "VD",
              id: "8501200",
              lat: 46.462994,
              long: 6.843452,
              name: "Vevey",
            },
          },
          {
            place: {
              canton: "VD",
              id: "8501120",
              lat: 46.516777,
              long: 6.629095,
              name: "Lausanne",
            },
          },
        ],
      },
      {
        end: {
          place: {
            canton: "VD",
            id: "A=2@O=46.519700, 6.632300@X=6632300@Y=46519700@",
            lat: 46.5197,
            long: 6.6323,
            name: "46.519700, 6.632300",
          },
          time: "2023-12-03T10:46:00+01:00",
        },
        mode: "FOOT",
        start: {
          place: {
            canton: "VD",
            id: "8501120",
            lat: 46.516777,
            long: 6.629095,
            name: "Lausanne",
          },
          time: "2023-12-03T10:39:00+01:00",
        },
      },
    ],
  };

  const legs = route.legs;
  const changes = legs.map((leg) => {
    let points;
    if (leg.mode == "FOOT") {
      points = [leg.start, leg.end];
    } else {
      //ts-ignore
      points = [leg.points[0], leg.points[leg.points.length - 1]];
    }
    console.log(points);

    return (
      <div>
        <div className="flex flex-row justify-around m-4">
          <span className="flex flex-row">
            {<FaArrowRight className="mr-2" />} {leg.mode}
          </span>
          <span>{!!leg.duration ? Math.ceil(leg.duration / 60) : 0} min</span>
          <span>{!!leg.distance ? Math.ceil(leg.distance / 1000) : 0} km</span>
        </div>
        <div>
          {points.map((point) => {
            return <div>{point.place.name}</div>;
          })}
        </div>
      </div>
    );
  });

  return <div className="flex flex-col bg-white">{changes}</div>;
};

export default ExpandedRoute;
